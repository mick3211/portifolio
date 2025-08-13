import Mailgun from "mailgun.js";
import mailgunFormData from "form-data";

const mailgunApiKey = process.env.MAILGUN_API_KEY;
if (!mailgunApiKey) {
  throw new Error("MAILGUN_API_KEY is not defined in environment variables");
}

const mailgun = new Mailgun(mailgunFormData);

export const mg = mailgun.client({
  username: "api",
  key: mailgunApiKey,
});

export const mailgunRecipient = process.env.MAILGUN_SEND_TO;
