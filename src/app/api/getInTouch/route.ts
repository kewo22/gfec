import { Collection, MongoClient, ObjectId } from "mongodb";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function GET(request: Request) {
  const uri = process.env.MONGO_URL || "";
  try {
    const client = await new MongoClient(uri.trim()).connect();
    const db = await client.db("gfec");
    const collection = db.collection("getInTouch");
    const getData = await collection
      .find({
        $or: [{ isDeleted: false }, { isDeleted: { $exists: false } }], // Only fetch non-deleted items
      })
      .sort({ _id: -1 })
      // .sort({ email: -1 }) implement later 
      .toArray(); // Fetch only non-deleted items
    return Response.json({ message: `Success`, data: getData });
  } catch (err) {
    return Response.json({ message: `Failed`, data: null });
  }
}

export async function POST(request: Request) {
  const data = await request.json();

  const uri = process.env.MONGO_URL || "";

  let loggerCollection: Collection | null = null;

  try {
    const client = await new MongoClient(uri.trim()).connect();
    const db = await client.db("gfec");
    const collection = db.collection("getInTouch");
    loggerCollection = db.collection("logger");
    const insertOneRes = await collection.insertOne(data);

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

      const recipients = [
        process.env.TO_MAIL,
        process.env.TO_MAIL_1,
        process.env.TO_MAIL_2,
        process.env.TO_MAIL_3,
      ].filter((to): to is string => Boolean(to));

      const logger = loggerCollection;

      await Promise.all(
        recipients.map((to) => {
          const mailOptions: Mail.Options = {
            from: process.env.NODEMAILER_USER,
            to,
            subject: `Get In Touch With ${data.firstName} ${data.lastName}`,
            text: "Record Added",
            html,
          };

          return transporter
            .sendMail(mailOptions)
            .then((res) => {
              logger.insertOne({
                type: "email success",
                log: JSON.stringify(res),
              });
            })
            .catch((error) => {
              logger.insertOne({
                type: "email failed",
                log: JSON.stringify(error),
              });
            });
        })
      );
    } else {
      loggerCollection.insertOne({
        type: "insert failed",
        log: JSON.stringify(insertOneRes),
      });
      return Response.json({ message: `Failed`, data: null }, { status: 500 });
    }

    loggerCollection.insertOne({
      type: "insert success",
      log: JSON.stringify(insertOneRes),
    });
    // return res.status(200).json({ message: `Success`, data: insertOneRes });
    return Response.json({ message: `Success`, data: insertOneRes });
  } catch (error) {
    // console.error(error)
    loggerCollection?.insertOne({
      type: "failed",
      log: JSON.stringify(error),
    });
    return Response.json({ message: `Failed`, data: null, error }, { status: 500 });
  }
}
