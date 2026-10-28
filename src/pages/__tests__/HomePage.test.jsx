import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from "../HomePage.jsx";
import { products } from "../../data/products.js";

describe("HomePage", () => {
  it("renders the main hero content and featured products", () => {
    render(
      <MemoryRouter>
        <HomePage products={products} addToCart={vi.fn()} />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: /make space for better ideas/i })).toBeInTheDocument();
    expect(screen.getByText(/thoughtfully chosen tools and desk essentials/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /everyday favorites/i })).toBeInTheDocument();
    expect(screen.getByText("Mechanical Keyboard")).toBeInTheDocument();
  });
});
