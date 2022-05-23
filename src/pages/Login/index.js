import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Text,
  Link,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";
import {
  FaUserAlt,
  FaLock,
  FaEye,
  FaEyeSlash,
  ChevronDownIcon,
} from "react-icons/fa";
import Swal from "sweetalert2";
import Header from "../../components/Header";
import useAuth from "../../hooks/useAuth";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CFaEye = chakra(FaEye);
const CFaEyeSlash = chakra(FaEyeSlash);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChangeEmail = (event) => setEmail(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleShowClick = () => setShowPassword(!showPassword);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
  }

  return (
    <>
      <Flex
        flexDirection="column"
        width="100%"
        height="100vh"
        backgroundColor="gray.100"
        justifyContent="flex-start"
        alignItems="center"
        color="#0c9b94"
        paddingTop="20px"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Heading>Login</Heading>
          <Box width="100%">
            <form onSubmit={handleSubmit}>
              <Stack spacing={4} p="1rem">
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={handleChangeEmail}
                      required
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<CFaLock color="gray.300" />}
                    />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Senha"
                      value={password}
                      onChange={handleChangePassword}
                      required
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size="md"
                        onClick={handleShowClick}
                        variant="link"
                      >
                        {showPassword ? <CFaEyeSlash /> : <CFaEye />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="green"
                  width="full"
                  isLoading={isLoading}
                  loadingText="Entrando"
                >
                  Entrar
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
        <Box width="100%" padding="8">
          <Heading fontSize="15px" color="#0c9b94" textAlign="center">
            Para realizar seu cadastro entre em contato com o Administrador do
            Site pelo email: igrejabatistasudoeste@gmail.com
          </Heading>
        </Box>
      </Flex>
    </>
  );
}
