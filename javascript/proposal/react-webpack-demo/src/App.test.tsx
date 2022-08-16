/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("App.tsx", () => {
  describe("when message not provied", () => {
    test("should show hello world as a default message", () => {
      render(<App />);

      expect(screen.getByTestId("heading-hello")).toHaveTextContent(
        "Hello world"
      );
      expect(screen.getByTestId("heading-hello")).toBeInTheDocument();
    });

    test("should match snapshot", () => {
      const { asFragment } = render(<App />);

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("when provide a message", () => {
    test("should show message instead of Hello world", () => {
      render(<App message="hi mom" />);

      expect(screen.getByTestId("heading-hello")).toHaveTextContent("hi mom");
      expect(screen.getByTestId("heading-hello")).toBeInTheDocument();
    });

    test("should match snapshot", () => {
      const { asFragment } = render(<App message="hi mom" />);

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
