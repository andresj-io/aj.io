"use server";

import { Resend } from "resend";
import { AutomaticReply } from "../../emails/automatic-reply";
import { formSchemaType } from "@/lib/types";
import validateForm from "@/utils/form/validateForm";
import { ContactMessage } from "@/emails/contact-message";

const getErrorMesssage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "An error occurred";
  }
  return message;
};

export const sendContactEmail = async (formData: unknown | formSchemaType) => {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const validatedData = validateForm(formData);

    console.log(validatedData);

    let Response = await resend.emails.send({
      from: "Andres Jacome <work@andresj.io>",
      to: [validatedData.mail],
      subject: "I have received your message!",
      react: AutomaticReply({
        name: validatedData.name,
      }) as React.ReactElement,
    });
    console.log(Response.data, Response.error);

    Response = await resend.emails.send({
      from: "work@andresj.io",
      to: "work@andresj.io",
      subject: validatedData.subject,
      text: validatedData.message,
      react: ContactMessage({
        name: validatedData.name,
        mail: validatedData.mail,
        message: validatedData.message,
      }) as React.ReactElement,
    });
    console.log(Response.data, Response.error);

    //   if (error) {
    //     return Response.json({ error });
    //   }

    // return Response.json({ data });
  } catch (error) {
    console.log(error);
    return getErrorMesssage(error);
  }
};
