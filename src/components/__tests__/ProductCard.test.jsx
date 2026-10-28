import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductCard from "../ProductCard.jsx";

const product = {
  id: "test-keyboard",
  name: "Test Keyboard",
  category: "Keyboards",
  price: 89.99,
  rating: 4.8,
  image: "https://example.com/keyboard.jpg",
  tag: "Bestseller",
};

function renderCard(addToCart = vi.fn()) {
  const result = render(
    <MemoryRouter>
      <ProductCard product={product} addToCart={addToCart} />
    </MemoryRouter>
  );
  return { ...result, addToCart };
}

describe("ProductCard", () => {
  it("renders product name and formatted price", () => {
    renderCard();
    expect(screen.getByRole("link", { name: "Test Keyboard" })).toBeInTheDocument();
    expect(screen.getByText("$89.99")).toBeInTheDocument();
    expect(screen.getByAltText("Test Keyboard")).toBeInTheDocument();
  });

  it("shows an add-to-cart control", () => {
    renderCard();
    expect(screen.getByRole("button", { name: /add test keyboard to cart/i })).toBeInTheDocument();
  });

  it("calls addToCart with the product when clicked", () => {
    const addToCart = vi.fn();
    renderCard(addToCart);
    fireEvent.click(screen.getByRole("button", { name: /add test keyboard to cart/i }));
    expect(addToCart).toHaveBeenCalledTimes(1);
    expect(addToCart).toHaveBeenCalledWith(product);
  });
});
