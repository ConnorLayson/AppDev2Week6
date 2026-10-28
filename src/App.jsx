import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import { products } from "./data/products.js";

const CART_STORAGE_KEY = "componentcorner-cart";

function readSavedCart() {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed)
      ? parsed.filter(
          (item) =>
            item &&
            typeof item.id === "string" &&
            Number.isInteger(item.quantity) &&
            item.quantity > 0 &&
            products.some((product) => product.id === item.id)
        )
      : [];
  } catch {
    return [];
  }
}

function StoreRoutes() {
  const [cart, setCart] = useState(readSavedCart);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      console.error("Could not save cart to localStorage:", error);
    }
  }, [cart]);

  function addToCart(product) {
    setCart((current) => {
      const found = current.find((item) => item.id === product.id);
      if (found) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...current, { id: product.id, quantity: 1 }];
    });
  }

  function removeFromCart(productId) {
    setCart((current) => current.filter((item) => item.id !== productId));
  }

  function updateQuantity(productId, nextQuantity) {
    const quantity = Number(nextQuantity);
    if (!Number.isInteger(quantity) || quantity < 1) return;
    setCart((current) =>
      current.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app-shell">
      <Header cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<HomePage products={products} addToCart={addToCart} />} />
        <Route path="/products" element={<ProductsPage products={products} addToCart={addToCart} />} />
        <Route
          path="/products/:id"
          element={<ProductDetailsPage products={products} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              products={products}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />
        <Route path="*" element={<main className="page-wrap empty-state"><h1>Page not found</h1><p>That page doesn't exist.</p><a className="button button-dark" href="/products">Browse products</a></main>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <StoreRoutes />
    </BrowserRouter>
  );
}
