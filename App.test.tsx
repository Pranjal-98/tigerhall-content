import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders App component", () => {
  render(<App />);

  // Check if the text "App" is in the document
  expect(screen.getByText("App")).toBeInTheDocument();
});
