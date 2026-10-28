import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App.jsx";

const STORAGE_KEY = "componentcorner-cart";

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("App cart state and localStorage", () => {
  it("renders the storefront and navigation", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: /make space/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /shop all/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /cart/i })).toBeInTheDocument();
  });

  it("loads saved cart data from localStorage on startup", async () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([{ id: "mechanical-keyboard", quantity: 2 }]));
    render(<App />);
    await userEvent.click(screen.getByRole("link", { name: /cart/i }));
    expect(await screen.findByRole("heading", { name: /mechanical keyboard/i })).toBeInTheDocument();
    expect(screen.getByText("2", { selector: ".quantity-control span" })).toBeInTheDocument();
  });

  it("saves cart changes to localStorage after adding a product", async () => {
    const setItemSpy = vi.spyOn(Storage.prototype, "setItem");
    render(<App />);
    await userEvent.click(screen.getByRole("link", { name: /shop all/i }));
    await userEvent.click(screen.getByRole("button", { name: /add mechanical keyboard to cart/i }));

    await waitFor(() => {
      expect(setItemSpy).toHaveBeenCalledWith(STORAGE_KEY, expect.any(String));
      expect(JSON.parse(localStorage.getItem(STORAGE_KEY))).toEqual([
        { id: "mechanical-keyboard", quantity: 1 },
      ]);
    });
  });

  it("persists quantity updates and removal", async () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([{ id: "mechanical-keyboard", quantity: 1 }]));
    render(<App />);
    await userEvent.click(screen.getByRole("link", { name: /cart/i }));
    await userEvent.click(screen.getByRole("button", { name: /increase quantity/i }));
    await waitFor(() => expect(JSON.parse(localStorage.getItem(STORAGE_KEY))[0].quantity).toBe(2));

    await userEvent.click(screen.getByRole("button", { name: /remove mechanical keyboard/i }));
    await waitFor(() => expect(JSON.parse(localStorage.getItem(STORAGE_KEY))).toEqual([]));
  });

  it("ignores malformed saved cart data without crashing", async () => {
    localStorage.setItem(STORAGE_KEY, "not valid JSON");
    render(<App />);
    await userEvent.click(screen.getByRole("link", { name: /cart/i }));
    expect(await screen.findByText(/your bag is currently empty/i)).toBeInTheDocument();
  });
});
