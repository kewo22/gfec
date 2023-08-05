// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { MongoClient } from "mongodb";
import Mail from "nodemailer/lib/mailer";

type ApiResponse<T> = {
  data?: T;
  message: string;
  error?: any;
};

const get = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<any>>
) => {
  const uri = process.env.MONGO_URL || "";
  try {
    const client = await new MongoClient(uri.trim()).connect();
    const db = await client.db("gfec");
    const collection = db.collection("getInTouch");
    const data = await collection.find({}).toArray();

    return res.status(200).json({ data: data, message: "Success" });
  } catch (error) {
    return res.status(500).json({ data: null, message: `Error`, error });
  }
};

const post = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<any>>
) => {
  const uri = process.env.MONGO_URL || "";
  try {
    const client = await new MongoClient(uri.trim()).connect();
    const db = await client.db("gfec");
    const collection = db.collection("getInTouch");
    console.log(req.body)
    const x = {
      firstName: JSON.parse(req.body).firstName,
      lastName: JSON.parse(req.body).lastName,
      email: JSON.parse(req.body).email,
      phone: JSON.parse(req.body).phone,
      address: JSON.parse(req.body).address,
      preferredDate: JSON.parse(req.body).preferredDate,
      preferredTime: JSON.parse(req.body).preferredTime,
    };
    console.log(x)
    const insertOneRes = await collection.insertOne(x);
    if (insertOneRes.insertedId) {
      const port = process.env.NODEMAILER_PORT as unknown as number;
      const transporter = nodemailer.createTransport({
        service: process.env.NODEMAILER_SERVICE,
        port,
        auth: {
          user: process.env.NODEMAILER_USER,
          pass: process.env.NODEMAILER_PASSWORD,
        },
      });

      const html = `
          <table style="border: 1px solid black; border-collapse: collapse; width: 300px; min-width: 300px;">
            <tr>
              <th style="border: 1px solid black; border-collapse: collapse; padding: 5px;" align='left'>Name</th>
              <td style="border: 1px solid black; border-collapse: collapse; padding: 5px;">${
                x.firstName
              } ${x.lastName}</td>
            </tr>
            <tr>
              <th style="border: 1px solid black; border-collapse: collapse; padding: 5px;" align='left'>Email</th>
              <td style="border: 1px solid black; border-collapse: collapse; padding: 5px;">${
                x.email
              }</td>
            </tr>
            <tr>
              <th style="border: 1px solid black; border-collapse: collapse; padding: 5px;" align='left'>Phone</th>
              <td style="border: 1px solid black; border-collapse: collapse; padding: 5px;">${
                x.phone
              }</td>
            </tr>
            <tr>
              <th style="border: 1px solid black; border-collapse: collapse; padding: 5px;" align='left'>Preferred Date</th>
              <td style="border: 1px solid black; border-collapse: collapse; padding: 5px;">${
                x.preferredDate
              }</td>
            </tr>
            <tr>
              <th style="border: 1px solid black; border-collapse: collapse; padding: 5px;" align='left'>Preferred Time</th>
              <td style="border: 1px solid black; border-collapse: collapse; padding: 5px;">${
                x.preferredTime
              }</td>
            </tr>
            <tr>
              <th style="border: 1px solid black; border-collapse: collapse; padding: 5px;" align='left'>Address</th>
              <td style="border: 1px solid black; border-collapse: collapse; padding: 5px;">${
                x.address ? x.address : "-"
              }</td>
            </tr>
          </table>
        `;

      const mailOptions: Mail.Options = {
        from: process.env.NODEMAILER_USER,
        to: (process.env.TO_MAIL as unknown as string).split(","),
        subject: `Get In Touch With ${x.firstName} ${x.lastName}`,
        text: "Record Added",
        html,
      };

      const yy = await transporter.sendMail(mailOptions);
      console.log("🚀 ~ file: getInTouch.ts:151 ~ yy:", yy);
      // try {
      //   console.log("🚀 ~ file: getInTouch.ts:69 ~ x:", x);
      // } catch (error) {
      //   console.log("mail err");
      //   console.log(error);
      // }
    }

    return res.status(200).json({ message: `Success`, data: insertOneRes });
  } catch (error) {
    return res.status(500).json({ data: null, message: `Error`, error });
  }
};

function initMiddleware(middleware: any) {
  return (req: any, res: any) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result: any) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

// // Initialize the cors middleware
// const cors = initMiddleware(
//   // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
//   Cors({
//     // Only allow requests with GET, POST and OPTIONS
//     methods: ["POST", "OPTIONS"],
//     allowedHeaders: [
//       "X-CSRF-Token",
//       "X-Requested-With",
//       "Accept",
//       "Accept-Version",
//       "Content-Length",
//       "Content-MD5",
//       "Content-Type",
//       "Date",
//       "X-Api-Version",
//     ],
//     origin: "*",
//     credentials: false,
//   })
// );

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<any>>
) {
  try {
    // await cors(req, res);
    switch (req.method) {
      case "GET":
        return get(req, res);

      case "POST":
        return post(req, res);

      case "PATCH":
        res.status(200).json({ message: "PATCH" });
        break;

      default:
        res.status(405).end(`${req.method} Not Allowed`);
        break;
    }
  } catch (error) {
    console.error(error);
    // Sentry.captureException(error);
    res.status(500).send({ message: "Server Error" });
  }
}
