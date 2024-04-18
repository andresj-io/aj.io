"use client";

import React from "react";
import {
  UserIcon,
  EnvelopeIcon,
  BookmarkIcon,
} from "@heroicons/react/16/solid";
// import { sendContactEmail } from "./sendContactEmail";
import validateForm from "./validateForm";
import toast from "react-hot-toast";

const ContactForm: React.FC = () => {
  // const pending = useFormStatus();

  const clientAction = async (formData: FormData) => {
    // pending.start();
    console.log("formData", formData);
    try {
      validateForm(formData);
      // await sendContactEmail(formData);
      toast.success("Message sent!");
    } catch (error: any) {
      toast.error(error);
    }
  };

  return (
    <form className="flex flex-col w-full" action={clientAction}>
      <fieldset className="form-control mb-5">
        <label className="input input-bordered flex items-center gap-2 mb-2">
          <UserIcon className="w-4 h-4 opacity-70" />
          <input
            type="text"
            className="grow"
            placeholder="Your name"
            name="name"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 mb-2">
          <EnvelopeIcon className="w-4 h-4 opacity-70" />
          <input
            type="email"
            className="grow"
            placeholder="Email"
            name="mail"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 mb-2">
          <BookmarkIcon className="w-4 h-4 opacity-70" />
          <input
            type="text"
            className="grow"
            placeholder="Subject"
            name="subject"
            required
          />
        </label>
        <textarea
          className="textarea textarea-bordered h-24 mb-2"
          placeholder="Leave a message and I'll get back to you as soon as possible!"
          name="message"
        ></textarea>
        <button className="btn btn-neutral" type="submit">
          Send
        </button>
      </fieldset>
    </form>
  );
};

export default ContactForm;
