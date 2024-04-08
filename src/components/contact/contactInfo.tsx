import React from "react";
import Link from "next/link";
import {
  AtSymbolIcon,
  PhoneIcon,
  DevicePhoneMobileIcon,
  MapPinIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import { contactData } from "@/data/contact/contact";

const ContactInfo: React.FC = () => {
  return (
    <div>
      <div className="flex items-center gap-3 hover:text-primary my-3 hover:scale-110">
        <AtSymbolIcon className="w-6 h-6" />
        <Link href={`mailto:${contactData.mail}`} target="_blank">
          {contactData.mail}
        </Link>
      </div>
      <div className="flex items-center gap-3 hover:text-info my-3 hover:scale-110">
        <PhoneIcon className="w-6 h-6" />
        <Link href={`tel:${contactData.phoneNumber}`} target="_blank">
          {contactData.phoneNumber}
        </Link>
      </div>
      <div className="flex items-center gap-3 hover:text-success my-3 hover:scale-110">
        <DevicePhoneMobileIcon className="w-6 h-6" />
        <Link
          href={`https://wa.me/${contactData.phoneNumber}`}
          target="_blank"
          className="flex"
        >
          WhatsApp
          <ArrowUpRightIcon className="w-2 h-3 ml-1" />
        </Link>
      </div>
      <p className="flex items-center gap-3 my-3 hover:text-warning hover:scale-110">
        <MapPinIcon className="w-6 h-6" />
        {contactData.Location}
      </p>
    </div>
  );
};

export default ContactInfo;
