"use client";

import React from "react";
import { useFormStatus } from "react-dom";

const FormButton: React.FC = () => {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-neutral" type="submit">
      {pending ? "Sending..." : "Send"}
    </button>
  );
};

export default FormButton;
