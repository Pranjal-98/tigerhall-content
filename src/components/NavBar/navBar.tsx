import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  HStack,
  Center,
  useBreakpointValue,
} from "@chakra-ui/react";
import SearchIcon from "../../assets/SearchIcon";
import Logo from "../../assets/Logo";
import SmallLogo from "../../assets/SmallLogo";

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ searchQuery, setSearchQuery }) => {
  // Handler for updating search query state
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Responsive logo based on screen size
  const logo = useBreakpointValue({
    base: <SmallLogo />, // Logo for small screens
    md: <Logo />, // Logo for medium screens and up
  });

  return (
    <HStack
      px={5}
      bg="gray.900"
      justifyContent="space-between"
      borderBottomWidth={1}
      borderColor="gray.700"
    >
      {/* Logo section */}
      <Box data-testid="logo" w={{ base: "15%", md: "25%" }}>
        {logo}
      </Box>

      {/* Search bar section */}
      <Box w={{ base: "70%", md: "50%" }}>
        <InputGroup w="100%" bg="gray.900" borderColor="gray.700">
          <InputLeftElement>
            <Center color="white">
              <SearchIcon data-testid="search-icon" />
            </Center>
          </InputLeftElement>
          <Input
            color="white"
            fontSize="montrealHeaderSM"
            placeholder="Search..."
            bg="gray.200"
            variant="outline"
            value={searchQuery}
            onChange={handleSearchChange}
            _placeholder={{ color: "gray.700" }}
          />
        </InputGroup>
      </Box>

      {/* Placeholder for alignment */}
      <Box w={{ base: "15%", md: "25%" }} />
    </HStack>
  );
};

export default Navbar;
