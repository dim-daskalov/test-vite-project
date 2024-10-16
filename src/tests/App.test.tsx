import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import App from "../App";

describe("App Component", () => {
  it("it should increment count when button is clicked", () => {
    // Render the App component
    render(<App />);

    // Find the button using its accessible name
    const button = screen.getByRole("button", { name: /count is/i });

    // Initial count should be 0
    expect(button).toHaveTextContent("count is 0");

    // Click the button to increment the count
    fireEvent.click(button);

    // Verify that the count has incremented to 1
    expect(button).toHaveTextContent("count is 1");

    // Click the button again to increment the count
    fireEvent.click(button);

    // Verify that the count has incremented to 2
    expect(button).toHaveTextContent("count is 2");
  });
});
