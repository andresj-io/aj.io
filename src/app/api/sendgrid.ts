export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {}

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: "work@andresj.io", // Change to your recipient
  from: "work@andresj.io", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error: any) => {
    console.error(error);
  });

// async function sendEmail(req, res) {
//   try {
//     // console.log("REQ.BODY", req.body);
//     await sgMail.send({
//       to: "work@andresj.io",
//       from: "work@andresj.io", // your website email address here
//       subject: `${req.body.subject}`,
//       html: `<div>You've got a mail</div>`,
//     });
//   } catch (error) {
//     // console.log(error);
//     return res.status(error.statusCode || 500).json({ error: error.message });
//   }

//   return res.status(200).json({ error: "" });
// }

// export default sendEmail;
