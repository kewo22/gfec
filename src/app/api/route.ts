import nodemailer from "nodemailer";
import { MongoClient } from "mongodb";
import Mail from "nodemailer/lib/mailer";

type ApiResponse<T> = {
  data?: T;
  message: string;
  error?: any;
};

export async function GET(request: Request) {
  console.log("APIII");

  //   const res = await fetch("https://data.mongodb-api.com/...", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "API-Key": "",
  //     },
  //   });
  //   const data = await res.json();

  const data = 1;

  return Response.json({ data });
}

export async function POST(request: Request) {
  const data = await request.json();

  const uri = process.env.MONGO_URL || "";
  console.log("🚀 ~ file: route.ts:31 ~ POST ~ uri:", uri);

  try {
    const client = await new MongoClient(uri.trim()).connect();
    const db = await client.db("gfec");
    const collection = db.collection("getInTouch");
    const insertOneRes = await collection.insertOne(data);
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
          <td style="border: 1px solid black; border-collapse: collapse; padding: 5px;">${data.firstName
        } ${data.lastName}</td>
        </tr>
        <tr>
          <th style="border: 1px solid black; border-collapse: collapse; padding: 5px;" align='left'>Email</th>
          <td style="border: 1px solid black; border-collapse: collapse; padding: 5px;">${data.email
        }</td>
        </tr>
        <tr>
          <th style="border: 1px solid black; border-collapse: collapse; padding: 5px;" align='left'>Phone</th>
          <td style="border: 1px solid black; border-collapse: collapse; padding: 5px;">${data.phone
        }</td>
        </tr>
        <tr>
          <th style="border: 1px solid black; border-collapse: collapse; padding: 5px;" align='left'>Preferred Date</th>
          <td style="border: 1px solid black; border-collapse: collapse; padding: 5px;">${data.preferredDate
        }</td>
        </tr>
        <tr>
          <th style="border: 1px solid black; border-collapse: collapse; padding: 5px;" align='left'>Preferred Time</th>
          <td style="border: 1px solid black; border-collapse: collapse; padding: 5px;">${data.preferredTime
        }</td>
        </tr>
        <tr>
          <th style="border: 1px solid black; border-collapse: collapse; padding: 5px;" align='left'>Address</th>
          <td style="border: 1px solid black; border-collapse: collapse; padding: 5px;">${data.address ? data.address : "-"
        }</td>
        </tr>
      </table>
    `;

      const mailOptions: Mail.Options = {
        from: process.env.NODEMAILER_USER,
        to: (process.env.TO_MAIL as unknown as string).split(","),
        subject: `Get In Touch With ${data.firstName} ${data.lastName}`,
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

    // return res.status(200).json({ message: `Success`, data: insertOneRes });
    return Response.json({ message: `Success`, data: insertOneRes })
  } catch (error) {

  }

}
