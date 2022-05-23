import React, { useState } from "react";
import { useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import Header from "../../components/Header.js";
import { Heading, Flex, Box, Image } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import IBS_frente from "../../config/IBS_frente.jpg";

export default function Banner() {
  const { auth } = useAuth();
  let location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Flex
        flexDirection="column"
        width="100wh"
        alignItems="center"
        position="relative"
        height="500px"
      >
        <Image
          src={IBS_frente}
          fallbackSrc="https://via.placeholder.com/150"
          width="100%"
          position="fixed"
          zIndex={1}
          style={{
            filter: "brightness(40%)",
          }}
        />
        <Flex
          zIndex={2}
          color="white"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          alignContent="center"
          width="100%"
          height="100%"
        >
          <Heading fontSize="60px">Bem-vindo</Heading>
          <Heading
            fontSize="20px"
            textAlign="center"
            width="60%"
            marginTop="30px"
            marginBottom="10px"
          >
            Somos vidas mudadas por Cristo e interresados em impactar
            positivamente a sua vida e de todos ao nosso redor, venha conhecer
            mais sobre nossa Igreja!
          </Heading>
        </Flex>
      </Flex>
    </>
  );
}
