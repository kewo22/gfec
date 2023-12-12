import nodemailer from "nodemailer";
import { MongoClient } from "mongodb";
import Mail from "nodemailer/lib/mailer";

type ApiResponse<T> = {
  data?: T;
  message: string;
  error?: any;
};

export async function GET(request: Request) {
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
  const client = await new MongoClient(uri.trim()).connect();
  const db = await client.db("gfec");
  const collection = db.collection("getInTouch");
  const loggerCollection = db.collection("logger");
  const insertOneRes = await collection.insertOne(data);

  try {

    if (insertOneRes.insertedId) {
      const port = process.env.NODEMAILER_PORT as unknown as number;
      const transporter = nodemailer.createTransport({
        service: process.env.NODEMAILER_SERVICE,
        host: process.env.NODEMAILER_USER,
        port,
        auth: {
          user: process.env.NODEMAILER_USER,
          pass: process.env.NODEMAILER_PASSWORD,
        },
      });

      const date = data.preferredDate
        ? new Date(data.preferredDate).toLocaleDateString("en-GB")
        : "-";
      const time = data.preferredTime ? data.preferredTime : "-";

      const html = `
      <table style="border: 1px solid black; border-collapse: collapse; width: 300px; min-width: 300px;">
        <tr>
          <th style="border: 1px solid black; border-collapse: collapse; padding: 5px;" align='left'>Name</th>
          <td style="border: 1px solid black; border-collapse: collapse; padding: 5px;">${data.firstName} ${data.lastName}</td>
        </tr>
        <tr>
          <th style="border: 1px solid black; border-collapse: collapse; padding: 5px;" align='left'>Email</th>
          <td style="border: 1px solid black; border-collapse: collapse; padding: 5px;">${data.email}</td>
        </tr>
        <tr>
          <th style="border: 1px solid black; border-collapse: collapse; padding: 5px;" align='left'>Mobile</th>
          <td style="border: 1px solid black; border-collapse: collapse; padding: 5px;">${data.mobile}</td>
        </tr>
        <tr>
          <th style="border: 1px solid black; border-collapse: collapse; padding: 5px;" align='left'>Preferred Date</th>
          <td style="border: 1px solid black; border-collapse: collapse; padding: 5px;">${date}
        </td>
        </tr>
        <tr>
          <th style="border: 1px solid black; border-collapse: collapse; padding: 5px;" align='left'>Preferred Time</th>
          <td style="border: 1px solid black; border-collapse: collapse; padding: 5px;">${time}</td>
        </tr>
      </table>
    `;

      const mailOptions: Mail.Options = {
        from: process.env.NODEMAILER_USER,
        to: process.env.TO_MAIL as unknown as string,
        subject: `Get In Touch With ${data.firstName} ${data.lastName}`,
        text: "Record Added",
        html,
      };

      const mailOptions1: Mail.Options = {
        from: process.env.NODEMAILER_USER,
        to: process.env.TO_MAIL_1 as unknown as string,
        subject: `Get In Touch With ${data.firstName} ${data.lastName}`,
        text: "Record Added",
        html,
      };

      const mailOptions2: Mail.Options = {
        from: process.env.NODEMAILER_USER,
        to: process.env.TO_MAIL_2 as unknown as string,
        subject: `Get In Touch With ${data.firstName} ${data.lastName}`,
        text: "Record Added",
        html,
      };

      const mailOptions3: Mail.Options = {
        from: process.env.NODEMAILER_USER,
        to: process.env.TO_MAIL_3 as unknown as string,
        subject: `Get In Touch With ${data.firstName} ${data.lastName}`,
        text: "Record Added",
        html,
      };

      await transporter.sendMail(mailOptions).then(res => {
        console.info(res)
        loggerCollection.insertOne({
          type: "email success",
          log: JSON.stringify(res)
        })
      }).catch(error => {
        console.error(error)
        loggerCollection.insertOne({
          type: "email failed",
          log: JSON.stringify(error)
        })
        return Response.json({ message: `Failed`, data: null, error });
      })

      await transporter.sendMail(mailOptions1).then(res => {
        console.info(res)
        loggerCollection.insertOne({
          type: "email success",
          log: JSON.stringify(res)
        })
      }).catch(error => {
        console.error(error)
        loggerCollection.insertOne({
          type: "email failed",
          log: JSON.stringify(error)
        })
        return Response.json({ message: `Failed`, data: null, error });
      })

      await transporter.sendMail(mailOptions2).then(res => {
        console.info(res)
        loggerCollection.insertOne({
          type: "email success",
          log: JSON.stringify(res)
        })
      }).catch(error => {
        console.error(error)
        loggerCollection.insertOne({
          type: "email failed",
          log: JSON.stringify(error)
        })
        return Response.json({ message: `Failed`, data: null, error });
      })

      await transporter.sendMail(mailOptions3).then(res => {
        console.info(res)
        loggerCollection.insertOne({
          type: "email success",
          log: JSON.stringify(res)
        })
      }).catch(error => {
        console.error(error)
        loggerCollection.insertOne({
          type: "email failed",
          log: JSON.stringify(error)
        })
        return Response.json({ message: `Failed`, data: null, error });
      })

      // Promise.all([
      //   transporter.sendMail(mailOptions),
      //   transporter.sendMail(mailOptions1),
      //   transporter.sendMail(mailOptions2),
      //   transporter.sendMail(mailOptions3),
      // ])
      //   .then((res) => {
      // console.log(res)
      // loggerCollection.insertOne({
      //   type: "email success",
      //   log: JSON.stringify(res)
      // })
      //   })
      //   .catch((error) => {
      // console.log(error)
      // loggerCollection.insertOne({
      //   type: "email failed",
      //   log: JSON.stringify(error)
      // })
      // return Response.json({ message: `Failed`, data: null, error });
      //   });

    } else {
      loggerCollection.insertOne({
        type: "insert failed",
        log: JSON.stringify(insertOneRes)
      })
      return Response.json({ message: `Failed`, data: null });
    }

    loggerCollection.insertOne({
      type: "insert success",
      log: JSON.stringify(insertOneRes)
    })
    // return res.status(200).json({ message: `Success`, data: insertOneRes });
    return Response.json({ message: `Success`, data: insertOneRes });
  } catch (error) {
    console.error(error)
    loggerCollection.insertOne({
      type: "failed",
      log: JSON.stringify(error)
    })
    return Response.json({ message: `Failed`, data: null, error });
  }
}
