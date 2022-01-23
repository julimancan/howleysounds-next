import { sendEmail } from "../../lib/sendEmail";

const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  if (req.method === "POST") {

  const body = JSON.parse(req.body);
  const servicesRequired = [];

  for (const [key, value] of Object.entries(body)) {
    if (value === true) {
      servicesRequired.push(key);  
    }
  }

  const message = `
       Artist Name: ${body.artistName}\r\n
       Contact's Name: ${body.yourName}\r\n
       Email: ${body.email}\r\n
       Artist Website: ${body.artistWebsite}
       Services Required: \r\n
            ${servicesRequired.map(service => service)}\r\n
       Message: ${body.message}

  `;

  const data = {
    to: "kevinhowleydev@gmail.com",
    from: "kevinHowleyWebsite@howleysounds.com",
    subject: "New Message from howleysounds Contact Form",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail.send(data);
  return res.status(200).end();
  }
  return res.status(404).json({
    error: {
      code: "not_found",
      message: "The requested endpoint was not found or doesn't support this method."
    }
  })
};
