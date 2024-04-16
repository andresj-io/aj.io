"use client";
import React from "react";
import { FormType } from "@/types/form";
import { useState } from "react";
import {
  UserIcon,
  EnvelopeIcon,
  BookmarkIcon,
} from "@heroicons/react/16/solid";
import { sendEmail } from "@/app/api/send/route";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormType>({
    name: "",
    mail: "",
    subject: "",
    message: "",
  });

  // const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(formData);
  // try {
  //   const response = await fetch("/api/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   });

  //   if (response.ok) {
  //     // Handle successful form submission
  //     console.log("Form submitted successfully");
  //     // Clear form data or show success message
  //     setFormData({ name: "", subject: "", mail: "", message: "" });
  //   } else {
  //     // Handle form submission failure
  //     console.error("Form submission failed");
  //   }
  // } catch (error) {
  //   console.error("An error occurred", error);
  // }
  // };

  return (
    <form
      className="lg:ml-14"
      action={async (formData) => {
        await sendEmail(formData);
      }}
    >
      <h6 className="footer-title">Get in touch</h6>
      <fieldset className="form-control mb-5">
        <label className="form-control flex-col">
          <div className="label">
            <span className="label-text">
              I am open to any work opportunities that align with my skills and
              interests.
            </span>
          </div>
        </label>
        <label className="input input-bordered flex items-center gap-2 mb-2">
          <UserIcon className="w-4 h-4 opacity-70" />
          <input type="text" className="grow" placeholder="Your name" />
        </label>
        <label className="input input-bordered flex items-center gap-2 mb-2">
          <EnvelopeIcon className="w-4 h-4 opacity-70" />
          <input
            type="email"
            className="grow"
            placeholder="Email"
            // value={formData.mail}
            // onChange={handleChange}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 mb-2">
          <BookmarkIcon className="w-4 h-4 opacity-70" />
          <input
            type="text"
            className="grow"
            placeholder="Subject"
            // value={formData.subject}
            // onChange={handleChange}
          />
        </label>
        <textarea
          className="textarea textarea-bordered h-24 mb-2"
          placeholder="Leave a message and I'll get back to you as soon as possible!"
          // value={formData.message}
          // onChange={handleChange}
        ></textarea>
        <button className="btn btn-neutral">Send</button>
      </fieldset>
    </form>
  );
};

export default ContactForm;
