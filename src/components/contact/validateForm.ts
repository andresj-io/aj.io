import { z } from "zod";
import { formSchema } from "@/types/form";

export default function validateForm(formData: FormData) {
  try {
    return formSchema.parse(FormData);
  } catch (error: any) {
    console.log(error);
    let errorMesssage = "Form validation failed:\n";

    if (error.issues) {
      error.issues.forEach((issue: z.ZodIssue) => {
        errorMesssage += `${issue.path}: ${issue.message}\n`;
      });
    } else {
      errorMesssage += error.message;
    }
    throw new Error(errorMesssage);
  }
}

//   const parsedData = formSchema.safeParse({
//     name: formData.get("name") as string,
//     mail: formData.get("mail") as string,
//     message: formData.get("message") as string,
//     subject: formData.get("subject") as string,
//   });
//   if (!parsedData.success) {
//     let errorMesssage = "";

//     parsedData.error.issues.forEach((issue) => {
//       errorMesssage += `${issue.path}: ${issue.message}\n`;
//     return parsedData.error.errors;
//   }
// }
