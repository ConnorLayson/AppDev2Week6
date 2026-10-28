export const products = [
  {
    id: "mechanical-keyboard",
    name: "Mechanical Keyboard",
    category: "Keyboards",
    price: 89.99,
    rating: 4.8,
    description: "A satisfying, tactile keyboard for focused work and late-night ideas. Compact, sturdy, and designed for everyday use.",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=1000&q=85",
    tag: "Bestseller",
  },
  {
    id: "wireless-mouse",
    name: "Wireless Precision Mouse",
    category: "Accessories",
    price: 49.99,
    rating: 4.7,
    description: "Smooth, precise tracking in a comfortable shape. A dependable companion for work, study, and creative projects.",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1000&q=85",
    tag: "Popular",
  },
  {
    id: "usb-c-hub",
    name: "7-in-1 USB-C Hub",
    category: "Connectivity",
    price: 39.99,
    rating: 4.6,
    description: "Bring your everyday connections together with a compact hub made for a cleaner, more capable workspace.",
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=1000&q=85",
    tag: "Everyday essential",
  },
  {
    id: "laptop-stand",
    name: "Aluminum Laptop Stand",
    category: "Workspace",
    price: 59.99,
    rating: 4.9,
    description: "Lift your laptop to a more comfortable viewing height with a sturdy, minimalist stand that frees up desk space.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1000&q=85",
    tag: "Staff pick",
  },
  {
    id: "noise-cancelling-headphones",
    name: "Studio Headphones",
    category: "Audio",
    price: 129.99,
    rating: 4.8,
    description: "Settle into your own sound space with comfortable over-ear headphones for playlists, calls, and deep focus.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=85",
    tag: "Premium",
  },
  {
    id: "desk-lamp",
    name: "Ambient Desk Lamp",
    category: "Workspace",
    price: 44.99,
    rating: 4.5,
    description: "A warm, adjustable glow for your desk, reading corner, or evening study session.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=85",
    tag: "New",
  },
];

export function formatPrice(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}
