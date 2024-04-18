import {
  Tailwind,
  Body,
  Head,
  Html,
  Preview,
  Text,
  Container,
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
}: ContactMessageProps) => (
  <Html>
    <Head />
    <Preview>Message from {name}</Preview>
    <Body>
      <Tailwind>
        <Container className="flex text-lg">
          <Text className="font-bold">Name: </Text>
          <Text>{name}</Text>
        </Container>
        <Container className="flex text-lg">
          <Text className="font-bold">Mail: </Text>
          <Text>{mail}</Text>
        </Container>
        <Container className="flex">
          <Text className="font-bold">Message: </Text>
          <Text className="italic">{message}</Text>
        </Container>
      </Tailwind>
    </Body>
  </Html>
);
