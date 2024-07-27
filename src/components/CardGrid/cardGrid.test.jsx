import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import CardGrid from "../CardGrid/CardGrid";
import { ChakraProvider } from "@chakra-ui/react";

// Mock the Card component
jest.mock("../Card/card", () => () => <div data-testid="card" />);

const mockFetchContentCards = jest.fn();
const mockSetContentCards = jest.fn();

const mockContentCards = [
  {
    id: "1",
    name: "Example Card",
    image: { uri: "https://example.com/image.jpg" },
    length: 120,
    categories: [{ name: "category Technology" }],
    experts: [{ firstName: "John", lastName: "Doe", company: "Example Inc" }],
  },
  // Add more mock cards if needed
];

const setup = (props = {}) => {
  const utils = render(
    <ChakraProvider>
      <CardGrid
        searchQuery=""
        isFetching={false}
        contentCards={mockContentCards}
        setContentCards={mockSetContentCards}
        fetchContentCards={mockFetchContentCards}
        {...props}
      />
    </ChakraProvider>
  );
  return { ...utils };
};

describe("CardGrid Component", () => {
  test("renders the CardGrid component correctly", () => {
    setup();
    expect(screen.getByText("Tigerhall Library")).toBeInTheDocument();
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });

  test("displays content cards when isFetching is false", () => {
    setup();
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });

  test("calls fetchContentCards on initial render and when searchQuery is empty", async () => {
    setup();
    await waitFor(() => {
      expect(mockFetchContentCards).toHaveBeenCalled();
    });
  });

  test("calls debounced fetchContentCards when searchQuery changes", async () => {
    setup({ searchQuery: "new query" });
    await waitFor(() => {
      expect(mockFetchContentCards).toHaveBeenCalled();
    });
  });
});
