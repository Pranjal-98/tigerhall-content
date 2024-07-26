import React, { useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  HStack,
  Center,
} from "@chakra-ui/react";
import "./index.css";
import SearchIcon from "../../assets/SearchIcon";
import Logo from "../../assets/Logo";

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: Function;
}

const Navbar = ({ searchQuery, setSearchQuery }: NavbarProps): JSX.Element => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <HStack
      px={5}
      bg="gray.900"
      justifyContent={"space-between"}
      borderBottomWidth={1}
      borderColor="gray.700"
    >
      <Box w="25%">
        <Logo />
      </Box>
      <Box w="50%">
        <InputGroup w="100%" bg="gray.900" borderColor="gray.700">
          <InputLeftElement>
            <Center color="white">
              <SearchIcon />
            </Center>
          </InputLeftElement>
          <Input
            color={"white"}
            fontSize={"montrealHeaderSM"}
            placeholder="Search..."
            variant="outline"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </InputGroup>
      </Box>
      <Box w="25%"></Box>
    </HStack>
  );
};

export default Navbar;
