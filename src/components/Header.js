import * as React from "react";
import { Heading, Flex, Box, Image } from "@chakra-ui/react";
import IBS_logo from "../config/IBS_logo.png";

export default function Header() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="center"
      wrap="wrap"
      padding={6}
      backgroundColor="gray.100"
    >
      <Flex align="center" justify="center" mr={5} gap="8">
        <Image
          boxSize="100px"
          objectFit="cover"
          src={IBS_logo}
          alt="Logo IBS"
          borderRadius="full"
          fallbackSrc="https://via.placeholder.com/100"
        />
        <Heading
          as="h1"
          size="lg"
          letterSpacing={"tighter"}
          fontSize="50px"
          color="#0c9b94"
        >
          Igreja Batista Sudoeste
        </Heading>
      </Flex>
    </Flex>
  );
}
