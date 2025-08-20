"use server";

import { mailgunRecipient, mg } from "@/data/service/mailgun";

export type SendEmailActionState = {
  error: boolean;
  message?: string;
};

export default async function sendEmail(
  _: any,
  formData: FormData,
): Promise<SendEmailActionState> {
  const name = formData.get("fullName") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const content = formData.get("content") as string;

  // Validate form data
  if (!name || !email || !subject || !content) {
    return {
      error: true,
      message: "Campos inválidos",
    };
  }

  const html = `
    <div>
      <h1>Nova mensagem de ${name}</h1>
      <p>${content}</p>
      <strong>Email para contato: ${email}</strong>
    </div>
  `;

  try {
    const resp = await mg.messages.create(
      "sandboxc2f5235dfb964714ade20d221a2a62ac.mailgun.org",
      {
        from: `Mickael Dev <mickaelf.dev@gmail.com>`,
        to: [`Mickael Felizardo <${mailgunRecipient}>`],
        replyTo: `${name} <${email}>`,
        subject: subject,
        text: content,
        html: html,
      },
    );

    console.log("Email sent:", resp);
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      error: true,
      message:
        "Não foi possível enviar o email. Por favor, tente novamente mais tarde.",
    };
  }

  return {
    error: false,
    message: "Email enviado com sucesso!",
  };
}
