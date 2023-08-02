import axios from 'axios';
import _find from 'lodash/find';
import _get from 'lodash/get';
import cors from "cors";
import nc from 'next-connect';
import { storage, ref, getMetadata, getDownloadURL } from '../../../../firebase/initFirebase';

const handler = 
  nc()
  // use connect based middleware
  .use(cors())
  .get(async (req, res) => {
    const { query: { vin } } = req;
    try {
      if (vin) {
        // Create a reference to the file whose metadata we want to retrieve
        const report = ref(storage, vin);
        // Get metadata properties
        getDownloadURL(report)
          .then(async (url) => {
            const { data: content } = await axios.get(url);
            // Metadata now contains the metadata for vin
            res.status(200).json({ success: true, content });
          })
          .catch((err) => {
            res.status(404).json({ success: false, message: `VIN: ${vin} not found.` });
        });
      } else {
        res.status(404).json({ success: false, message: `VIN: ${vin} not found.` });
      }
    } catch (err) {
      res.status(404).json({ success: false, message: `VIN: ${vin} not found.` });
    }
  });

export default handler;