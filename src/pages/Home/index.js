import React, { useState } from "react";
import { useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import Header from "../../components/Header.js";
import { Heading, Flex, Box, Image } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Banner from "./Banner";

export default function Home() {
  const { auth } = useAuth();
  let location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Flex
        flexDirection="column"
        width="100wh"
        minHeight="calc(100vh - 285px)"
        backgroundColor="gray.100"
        alignItems="center"
      >
        <Navbar />
        <Banner />
      </Flex>
    </>
  );
}
