import axios from 'axios';
import moment from 'moment';
require('moment-timezone');
import cors from "cors";
import nc from 'next-connect';
const nodemailer = require('nodemailer');
import Template from '../../lib/mailTemplate';
import { 
  storage,
  ref,
  uploadString,
  refDB,
  setDB,
  database as db
} from '../../../firebase/initFirebase';
import { URLWEB, NAME, EMAIL, REFRESH_TOKEN_GOOGLE, TOKEN_GOOGLE, CLIENT_ID_GOOGLE, CLIENT_SECRET_GOOGLE, API_KEY_CARFAX_PRO } from 'lib/constant';

function onError(err, req, res, next) {
  logger.log(err);
  // OR: console.error(err);

  res.status(500).end(err.toString());
  // OR: you may want to continue
  next();
}

const handler = 
    // USE CONNECT BASED MIDDLEWARE
    nc({ onError })
    .use(cors())
    .post(async function main (req, res) {
      const email = EMAIL;
      const refreshToken = REFRESH_TOKEN_GOOGLE;
      const token = TOKEN_GOOGLE;
      const clientId = CLIENT_ID_GOOGLE;
      const clientSecret = CLIENT_SECRET_GOOGLE;

      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          type: 'OAuth2',
          user: email,
          clientId: clientId,
          clientSecret: clientSecret,
          refreshToken: refreshToken,
          accessToken: token
        }
      });
      
      // RESPONSE FROM PAYPAL
      const details = req.body.details;
      const {
        id: orderID,
        payer: { name: { given_name, surname } },
        create_time
      } = details;
      const name = `${given_name} ${surname}`;
      // REQUEST FROM FORM DATA
      const { productName: vin, amount, total, receiptDetail, phone } = req.body;
      const productName = vin.toUpperCase() || vin;
      const payload = {
        productName,
        orderID,
        name: name || '',
        phone,
        create_time: moment(create_time).format('YYYY-MM-DD HH:mm'),
        amount,
        total,
        receiptDetail
      };

      const mailData = {
        from: `${NAME} <${email}>`,
        to: `${req.body.email}`,
        subject: 'Success - Your Vehicle Report is available!',
        html: Template(payload)
      }

      // SEND TO BOT
      const text = `<b>Name :</b> ${name}\n<b>Phone :</b> ${phone}\n<b>Link :</b> ${URLWEB}report/${productName}`
      // \n\nref: ${prefix}
      axios.get(`https://api.telegram.org/bot2125537901:AAEIHEh3JvI1vNM5ofj-uQsEH13FYUcBczM/sendMessage?chat_id=-774963401&text=${text}&parse_mode=html`);
      
      // CHECK IF VIN IS EXIST
      if (productName) {
        const now = moment(create_time).tz('Asia/Jakarta');
        const prefix = `${now.format('YYYY-MM-DD')}/${now.format('HH:mm:ss')}-${productName}`;
        
        // UPLOAD DB FIREBASE paidUsers/
        setDB(refDB(db, `paidUsers/${prefix}`), {
          phone,
          vin: productName,
          paypalName: name,
          email: req.body.email,
          create_time: moment(create_time).format('YYYY-MM-DD HH:mm'),
          claim: 0,
          url: URLWEB
        });

        // UPLOAD DB FIREBASE detailsPaidUsers/
        setDB(refDB(db, `detailsPaidUsers/${productName}`), details);

        // SEND MAIL TO BUYER
        await transporter.sendMail(mailData);

        // Call CARFAX PRO
        await axios
          .get(`https://api.carfax.pro/wp-json/v1/get_report_by_wholesaler/${productName}/${API_KEY_CARFAX_PRO}/carfax/en`)
           // IF REPORT AVAILABLE
          .then(({ data: { report: { report } } }) => {
            // CREATE REF REPORT
            const storageRef = ref(storage, `${productName}`);
            // UPLOAD FILE REPORT
            uploadString(storageRef, report);
          })
          // IF REPORT NOT AVAILABLE
          .catch(async (error) => {
            console.error(error);
            // SENDING ERROR TO BOT
            const errorText = `Something went wrong when generating ${URLWEB}report/${productName}. Fix it soon.`
            await axios.get(`https://api.telegram.org/bot2125537901:AAEIHEh3JvI1vNM5ofj-uQsEH13FYUcBczM/sendMessage?chat_id=-774963401&text=${errorText}&parse_mode=html`);
          });
          res.status(200).json({ success: true });
      } else {
        res.status(404).json({ success: false });
      }
    });

export default handler;
