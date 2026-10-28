import { fireEvent, render, screen } from "@testing-library/react";
import CartItem from "../CartItem.jsx";

const product = {
  id: "test-mouse",
  name: "Test Mouse",
  category: "Accessories",
  price: 25,
  image: "https://example.com/mouse.jpg",
};

describe("CartItem", () => {
  it("renders product information and quantity", () => {
    render(<CartItem product={product} quantity={2} onRemove={vi.fn()} onQuantityChange={vi.fn()} />);
    expect(screen.getByRole("heading", { name: "Test Mouse" })).toBeInTheDocument();
    expect(screen.getByText("2", { selector: ".quantity-control span" })).toBeInTheDocument();
    expect(screen.getByText("$50.00")).toBeInTheDocument();
  });

  it("calls the remove callback when Remove is clicked", () => {
    const onRemove = vi.fn();
    render(<CartItem product={product} quantity={1} onRemove={onRemove} onQuantityChange={vi.fn()} />);
    fireEvent.click(screen.getByRole("button", { name: /remove test mouse/i }));
    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  it("reports quantity changes from the quantity controls", () => {
    const onQuantityChange = vi.fn();
    render(<CartItem product={product} quantity={2} onRemove={vi.fn()} onQuantityChange={onQuantityChange} />);
    fireEvent.click(screen.getByRole("button", { name: /increase quantity/i }));
    expect(onQuantityChange).toHaveBeenCalledWith(3);
  });
});
