import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./card";
import { ChakraProvider } from "@chakra-ui/react";

// Mock the assets
jest.mock("../../assets/ContentStatus", () => () => (
  <svg data-testid="content-status" />
));
jest.mock("../../assets/Time", () => () => <svg data-testid="time" />);
jest.mock("../../assets/Share", () => () => <svg data-testid="share" />);
jest.mock("../../assets/Bookmark", () => () => <svg data-testid="bookmark" />);
jest.mock("../../assets/Headphone", () => () => (
  <svg data-testid="headphone" />
));

const setup = () => {
  const utils = render(
    <ChakraProvider>
      <Card
        cardImage="https://example.com/image.jpg"
        time="60"
        contentCategory="Podcast"
        description="Example Description"
        expertName="John Doe"
        expertCompany="Example Company"
      />
    </ChakraProvider>
  );
  return { ...utils };
};

describe("Card Component", () => {
  test("renders the Card component correctly", () => {
    setup();
    expect(screen.getByAltText("Podcast")).toBeInTheDocument();
    expect(screen.getByText("30% Completed")).toBeInTheDocument();
    expect(screen.getByText("Example Description")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Example Company")).toBeInTheDocument();
    expect(screen.getByTestId("content-status")).toBeInTheDocument();
    expect(screen.getByTestId("time")).toBeInTheDocument();
    expect(screen.getByTestId("share")).toBeInTheDocument();
    expect(screen.getByTestId("bookmark")).toBeInTheDocument();
    expect(screen.getByTestId("headphone")).toBeInTheDocument();
  });

  test("displays the correct time in minutes", () => {
    setup();
    expect(screen.getByText("60m")).toBeInTheDocument();
  });

  test("displays expert name and company correctly", () => {
    setup();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Example Company")).toBeInTheDocument();
  });

  test("renders action icons", () => {
    setup();
    expect(screen.getByTestId("share")).toBeInTheDocument();
    expect(screen.getByTestId("bookmark")).toBeInTheDocument();
    expect(screen.getByTestId("headphone")).toBeInTheDocument();
  });

  test("renders image with correct alt text", () => {
    setup();
    expect(screen.getByAltText("Podcast")).toHaveAttribute(
      "src",
      "https://example.com/image.jpg"
    );
  });
});
