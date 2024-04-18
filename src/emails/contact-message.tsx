import {
  Body,
  Head,
  Html,
  Preview,
  Text,
  Section,
  Row,
  Column,
} from "@react-email/components";
import * as React from "react";

interface ContactMessageProps {
  name: string;
  mail: string;
  message: string;
}

export const ContactMessage = ({
  name,
  mail,
  message,
}: ContactMessageProps) => {
  return (
    <Html>
      <Head />
      <Preview>Message from {name}</Preview>
      <Body style={main}>
        <Section style={content}>
          <Row style={{ ...boxInfos, paddingBottom: "0" }}>
            <Column>
              <Text style={paragraph}>
                <b>Name: </b>
                {name}
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                <b>Mail: </b>
                {mail}
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                <b>Message: </b>
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>{message}</Text>
            </Column>
          </Row>
        </Section>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const boxInfos = {
  padding: "20px",
};

ContactMessage.PreviewProps = {
  name: "John Doe",
  mail: "dev@andresj.io",
  subject: "Hello, I'm interested in your services.",
  message: "How much does it cost to build a website?",
} as ContactMessageProps;

export default ContactMessage;
