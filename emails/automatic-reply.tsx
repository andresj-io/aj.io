import {
  Tailwind,
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import * as React from "react";

interface AutomaticReplyProps {
  userFirstname: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const AutomaticReply = ({ userFirstname }: AutomaticReplyProps) => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://github.com/andresj-io.png"
          width="120"
          height="120"
          alt="Koala"
          style={logo}
        />
        <Heading as="h2">I have received your message!</Heading>
        <Tailwind>
          <Text style={paragraph}>Hi {userFirstname},</Text>
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
            <Link
              href="/documents/contact_AndresJacome.vcf"
              download="AndresJacome.vcf"
              target="_blank"
              className="flex items-center gap-2"
            >
              <UserPlusIcon className="w-4 h-4" />
              Add contact
            </Link>
          </Text>
        </Tailwind>
      </Container>
    </Body>
  </Html>
);

AutomaticReply.PreviewProps = {
  userFirstname: "Alan",
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
