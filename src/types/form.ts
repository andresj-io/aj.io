import { object, string } from "zod";

export type FormType = {
  name: string;
  mail: string;
  subject: string;
  message: string;
};

export const formSchema = object({
  name: string(),
  mail: string().email(),
  subject: string(),
  message: string(),
});
