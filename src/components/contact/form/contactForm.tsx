"use client";

import React from "react";
import {
  UserIcon,
  EnvelopeIcon,
  BookmarkIcon,
} from "@heroicons/react/16/solid";
import { sendContactEmail } from "@/utils/form/sendContactEmail";
import validateForm from "@/utils/form/validateForm";
import toast from "react-hot-toast";
import FormButton from "./formButton";

const ContactForm: React.FC = () => {
  // const pending = useFormStatus();

  const clientAction = async (formData: FormData) => {
    // pending.start();
    console.log("formData", formData);
    try {
      const validatedData = validateForm(formData);
      const response = await sendContactEmail(validatedData);
      console.log("response", response);
      toast.success("Message sent!");
    } catch (error: any) {
      toast.error(error);
    }
  };

  return (
    <form className="flex flex-col w-full gap-2" action={clientAction}>
      <fieldset className="form-control mb-5 flex flex-col gap-2">
        <FormInputField
          icon={<UserIcon className="size-4 opacity-70" />}
          placeholder="Your name"
          name="name"
          type="text"
        />
        <FormInputField
          icon={<EnvelopeIcon className="size-4 opacity-70" />}
          placeholder="Email"
          name="mail"
          type="email"
        />
        <FormInputField
          icon={<BookmarkIcon className="size-4 opacity-70" />}
          placeholder="Subject"
          name="subject"
          type="text"
        />
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Leave a message and I'll get back to you as soon as possible!"
          name="message"
        ></textarea>
        <FormButton />
      </fieldset>
    </form>
  );
};

const FormInputField: React.FC<{
  icon: React.ReactNode;
  placeholder: string;
  name: string;
  type: string;
}> = ({ icon, placeholder, name, type }) => {
  return (
    <label className="input input-bordered flex items-center gap-2">
      {icon}
      <input
        type={type}
        className="grow"
        placeholder={placeholder}
        name={name}
        required
      />
    </label>
  );
};

export default ContactForm;
