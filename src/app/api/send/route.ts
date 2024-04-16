import { EmailTemplate } from "@/components/contact/email/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log(formData);
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "work@andresj.io",
    subject: "New submission",
    text: `New submission from ${formData.get("name")}`,
  });
};
