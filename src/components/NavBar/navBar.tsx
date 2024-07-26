import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  HStack,
  Center,
} from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import "./index.css";
import SearchIcon from "../../assets/SearchIcon";
import Logo from "../../assets/Logo";

const Navbar = () => {
  const theme = useTheme();
  return (
    <HStack
      px={5}
      bg="gray.900"
      justifyContent={"space-between"}
      border={`1px solid ${"gray.500"}`}
    >
      <Box w="25%">
        <Logo />
      </Box>
      <Box w="50%">
        <InputGroup w="100%">
          <InputLeftElement>
            <Center color="white">
              <SearchIcon />
            </Center>
          </InputLeftElement>
          <Input placeholder="Search..." variant="outline" />
        </InputGroup>
      </Box>
      <Box w="25%"></Box>
    </HStack>
  );
};

export default Navbar;
