import axios from 'axios';
import _find from 'lodash/find';
import _get from 'lodash/get';
import cors from "cors";
import nc from "next-connect";

const handler = 
  nc()
  // use connect based middleware
  .use(cors())
  .get(async (req, res) => {
    const { query: { vin } } = req;
    try {
      if (vin) {
        // https://api.carfax.pro
        const { data: { carfax } } = await axios.get(`https://api.carfax.pro/wp-json/v1/get_report_check/${vin}`);
        if (carfax.Records) {
          const firstWord = carfax.Vehicle.replace(/ .*/,'');
          const response = {
            records: carfax.Records,
            vehicle: carfax.Vehicle,
            mark: firstWord,
            year: carfax.Year,
            vin: carfax.VIN,
            body: carfax.Body
          };
          res.status(200).json({ success: true, data: response });
        } else {
          res.status(404).json({ success: false, message: `VIN: ${vin} not found.` });
        }
      } else {
        res.status(404).json({ success: false, message: `VIN: ${vin} not found.` });
      }
    } catch (err) {
      res.status(404).json({ success: false, message: `VIN: ${vin} not found.` });
    }
  });

export default handler;