import { z } from "zod";
import { formSchemaType, FormSchema } from "@/lib/types";

export default function validateForm(
  formData: FormData | formSchemaType | unknown,
) {
  try {
    console.log(formData);
    if (formData instanceof FormData) {
      const data = Object.fromEntries(formData.entries());
      return FormSchema.parse(data);
    } else if (typeof formData === "object") {
      return FormSchema.parse(formData);
    } else {
      console.log("Invalid form data");
      throw new Error("Invalid form data");
    }
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

//   if (!parsedData.success) {
//     let errorMesssage = "";

//     parsedData.error.issues.forEach((issue) => {
//       errorMesssage += `${issue.path}: ${issue.message}\n`;
//     return parsedData.error.errors;
//   }
// }
