import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router";
import {
  Heading,
  Flex,
  Divider,
  chakra,
  Spacer,
  Input,
  Stack,
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { GrLogout } from "react-icons/gr";
import { BsYoutube } from "react-icons/bs";
import { FaChurch, FaPrayingHands } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import useAuth from "../hooks/useAuth";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import Login from "../pages/Login";

const CGrLogout = chakra(GrLogout);

export default function Navbar({ search, setSearch }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { logout } = useAuth();

  const navigate = useNavigate();
  let location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Flex as="nav" backgroundColor="gray.100" width="100wh" marginBottom="6px">
      <Stack direction={["column", "row"]} width="100wh" spacing="15px">
        <Button color="#0c9b94" variant="link" leftIcon={<BsYoutube />}>
          Assista nossos Cultos no YouTube
        </Button>
        <Button color="#0c9b94" variant="link" leftIcon={<FaChurch />}>
          Cultos e Eventos
        </Button>
        <Button color="#0c9b94" variant="link" leftIcon={<IoLocationSharp />}>
          Localização e Horários
        </Button>
        <Button color="#0c9b94" variant="link" leftIcon={<FaPrayingHands />}>
          Ofertas e Doações
        </Button>
        <Button onClick={onOpen}>
          <HamburgerIcon color="#0c9b94" />
        </Button>
      </Stack>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Login />
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
