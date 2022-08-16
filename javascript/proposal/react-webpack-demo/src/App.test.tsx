/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("should show hello world", () => {
  render(<App />);
  expect(screen.getByTestId("heading-hello")).toHaveTextContent("Hello world");
});
