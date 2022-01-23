import fetch from "node-fetch";

const SENDGRID_API = "https://api.sendgrid.com/v3/mail/send";
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

const sendEmail = async ({name, email, emailData}) => {
  await fetch(SENDGRID_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SENDGRID_API_KEY}`
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email
            }
          ],
          subject: "Demo Success"
        }
      ],
      from: {
        email: "noreply@demo.com",
        name: "Test Sendgrid"
      },
      content: [
        {
          type: "text/html",
          value: `this is the email body for ${name}, email: ${email}, data: ${emailData}`
        }
      ]
    })
  });
};

export { sendEmail };
