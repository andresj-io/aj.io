import React from "react";
import { UserIcon, EnvelopeIcon } from "@heroicons/react/16/solid";

const ContactForm: React.FC = () => {
  return (
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
        <input type="text" className="grow" placeholder="Email" />
      </label>
      <textarea
        className="textarea textarea-bordered h-24 mb-2"
        placeholder="Leave a message and I'll get back to you as soon as possible!"
      ></textarea>
      <button className="btn btn-info">Send</button>
    </fieldset>
  );
};

export default ContactForm;
