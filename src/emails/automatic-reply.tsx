import {
  Tailwind,
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
  Link,
} from "@react-email/components";
import {
  AtSymbolIcon,
  PhoneIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import * as React from "react";
import { contactData } from "@/data/contact/contact";

interface AutomaticReplyProps {
  name: string;
}

// const baseUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : "";

export const AutomaticReply = ({ name }: AutomaticReplyProps) => (
  <Html>
    <Head />
    <Preview>I have received your message!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://github.com/andresj-io.png"
          width="120"
          height="120"
          alt="Koala"
          style={logo}
        />
        {/* <Heading as="h2">I have received your message!</Heading> */}

        <Text style={paragraph}>Hi {name},</Text>
        <Text style={paragraph}>
          I appreciate you reaching out to me. I will review your message and
          get back to you as soon as possible.
        </Text>
        <Text style={paragraph}>
          Best regards,
          <br /> Andrés Jácome
        </Text>
        <Hr style={hr} />

        <Text style={footer}>
          <Tailwind>
            <AtSymbolIcon className="w-4 h-4 mr-2" />
            {contactData.mail}
            <br />
            <PhoneIcon className="w-5 h-5 mr-2" />
            {contactData.phoneNumber}
            <br />
            <svg
              className="h-5 w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="4.983" cy="5.009" r="2.188"></circle>
              <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
            </svg>
            <Link href={contactData.linkedinLink}>
              LinkedIn
              <ArrowUpRightIcon className="w-2 h-3 ml-1" />
            </Link>
          </Tailwind>
        </Text>
      </Container>
    </Body>
  </Html>
);

AutomaticReply.PreviewProps = {
  name: "Alan",
} as AutomaticReplyProps;

export default AutomaticReply;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
