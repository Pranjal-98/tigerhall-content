import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

// Mock the Logo components
jest.mock("../../assets/Logo", () => () => <div data-testid="logo" />);
jest.mock("../../assets/SmallLogo", () => () => (
  <div data-testid="small-logo" />
));
jest.mock("../../assets/SearchIcon", () => () => (
  <div data-testid="search-icon" />
));

beforeAll(() => {
  // Mocking matchMedia
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
});

const setup = (props = {}) => {
  const utils = render(
    <ChakraProvider>
      <Navbar searchQuery="" setSearchQuery={jest.fn()} {...props} />
    </ChakraProvider>
  );
  return { ...utils };
};

describe("Navbar Component", () => {
  test("renders the Navbar component correctly", () => {
    setup();
    expect(screen.getByTestId("logo")).toBeInTheDocument();
    expect(screen.getByTestId("search-icon")).toBeInTheDocument();
  });

  test("displays the correct logo based on screen size", () => {
    setup();
    // Assuming we are testing on a base screen size
    expect(screen.getByTestId("small-logo")).toBeInTheDocument();
  });

  test("updates the search query state correctly", () => {
    const mockSetSearchQuery = jest.fn();
    setup({ searchQuery: "test", setSearchQuery: mockSetSearchQuery });

    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "new search query" } });
    expect(mockSetSearchQuery).toHaveBeenCalledWith("new search query");
  });
});
