import * as React from "react";
import { Route, Routes } from "react-router";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Home";

export default function Pages() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ChakraProvider>
  );
}
