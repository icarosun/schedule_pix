import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Home from "../../../pages/index.js";

describe("Page home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
