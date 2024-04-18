"use server";

import { Resend } from "resend";
import { AutomaticReply } from "../../emails/automatic-reply";
import { z } from "zod";
import { getSystemErrorName } from "util";

export async function sendContactEmail(formData: FormData) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const formSchema = z.object({
      name: z.string(),
      mail: z.string().email(),
      message: z.string(),
      subject: z.string(),
    });

    const parsedData = formSchema.parse({
      name: formData.get("name") as string,
      mail: formData.get("mail") as string,
      message: formData.get("message") as string,
      subject: formData.get("subject") as string,
    });

    console.log(parsedData);

    let Response = await resend.emails.send({
      from: "Andres Jacome <work@andresj.io>",
      to: [parsedData.mail],
      subject: "I have received your message!",
      react: AutomaticReply({
        name: parsedData.name,
      }) as React.ReactElement,
      bcc: "work@andresj.io",
    });
    console.log(Response.data, Response.error);

    Response = await resend.emails.send({
      from: "work@andresj.io",
      to: "work@andresj.io",
      subject: parsedData.subject,
      text: parsedData.message,
      reply_to: parsedData.mail,
    });
    console.log(Response.data, Response.error);

    //   if (error) {
    //     return Response.json({ error });
    //   }

    // return Response.json({ data });
  } catch (error: unknown) {
    console.log(error);
    return { error: getErrorMessage(error) };
  }
}
