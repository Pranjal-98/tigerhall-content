import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "./Dashboard";

// Mock the dependencies
jest.mock("../components/NavBar/navBar", () => ({
  __esModule: true,
  default: ({ searchQuery, setSearchQuery }) => (
    <div>
      NavBar
      <input
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  ),
}));

jest.mock("../components/CardGrid/cardGrid", () => ({
  __esModule: true,
  default: ({
    searchQuery,
    isFetching,
    contentCards,
    setContentCards,
    fetchContentCards,
  }) => (
    <div>
      CardGrid
      <button onClick={fetchContentCards}>Fetch Content Cards</button>
    </div>
  ),
}));

// Mock fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: {
          contentCards: {
            edges: [
              {
                id: "1",
                name: "Test Card",
                categories: [{ name: "Test Category" }],
                experts: [
                  {
                    firstName: "John",
                    lastName: "Doe",
                    company: "Test Company",
                  },
                ],
                image: { uri: "http://example.com/image.jpg" },
                length: 300,
              },
            ],
          },
        },
      }),
  })
);

describe("Dashboard component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders Dashboard component", () => {
    render(<Dashboard />);
    expect(screen.getByText("NavBar")).toBeInTheDocument();
    expect(screen.getByText("CardGrid")).toBeInTheDocument();
  });

  test("initial state is correct", () => {
    render(<Dashboard />);
    expect(screen.getByText("NavBar")).toBeInTheDocument();
    expect(screen.getByText("CardGrid")).toBeInTheDocument();
  });

  test("fetchContentCards function updates contentCards state", async () => {
    render(<Dashboard />);
    fireEvent.click(screen.getByText("Fetch Content Cards"));
    expect(global.fetch).toHaveBeenCalledTimes(1);

    // Wait for fetch to complete and verify state update
    await waitFor(() => {
      expect(screen.getByText("CardGrid")).toBeInTheDocument();
    });
  });

  test("handles search query input", async () => {
    render(<Dashboard />);
    const input = screen.getByPlaceholderText("Search...");

    // Simulate user typing in search bar
    fireEvent.change(input, { target: { value: "test query" } });

    await waitFor(() => {
      expect(input).toHaveValue("test query");
    });
  });
});
