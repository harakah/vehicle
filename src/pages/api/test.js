import cors from "cors";
import nc from "next-connect";

const handler =
  nc()
  // use connect based middleware
  .use(cors())
  .get(async (req, res) => {
    try {
      setTimeout(() => {
          console.log("this is the first message")
          res.status(200).json({ success: true });
        }, 15000);
    } catch (err) {
      res.status(404).json({ success: false, message: err });
    }
  });

export default handler;