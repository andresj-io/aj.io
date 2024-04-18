import { z } from "zod";

export type FormType = {
  name: string;
  mail: string;
  subject: string;
  message: string;
};

export type NavBarItems = {
  text: string;
  href: string;
}[];

export const FormSchema = z.object({
  name: z.string(),
  mail: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

export type formSchemaType = z.infer<typeof FormSchema>;
