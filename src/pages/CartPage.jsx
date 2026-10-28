import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, ShoppingBag } from "lucide-react";
import CartItem from "../components/CartItem.jsx";
import { formatPrice } from "../data/products.js";

export default function CartPage({ cart, products, removeFromCart, updateQuantity }) {
  const items = cart.map((entry) => ({
    ...entry,
    product: products.find((product) => product.id === entry.id),
  })).filter((entry) => entry.product);
  const subtotal = items.reduce((sum, entry) => sum + entry.product.price * entry.quantity, 0);
  const itemCount = items.reduce((sum, entry) => sum + entry.quantity, 0);
  const shipping = subtotal === 0 || subtotal >= 75 ? 0 : 7.95;

  if (!items.length) {
    return (
      <main className="page-wrap cart-page">
        <div className="cart-heading"><span className="eyebrow">YOUR SELECTION</span><h1>Your bag<span className="period">.</span></h1></div>
        <div className="empty-cart"><div className="empty-cart-icon"><ShoppingBag size={28} /></div><h2>Room for something useful.</h2><p>Your bag is currently empty. Find something that makes your everyday a little better.</p><Link to="/products" className="button button-dark">Explore products <ArrowRight size={16} /></Link></div>
      </main>
    );
  }

  return (
    <main className="page-wrap cart-page">
      <div className="cart-heading"><span className="eyebrow">YOUR SELECTION</span><h1>Your bag<span className="period">.</span></h1><p>{itemCount} {itemCount === 1 ? "item" : "items"} selected with care.</p></div>
      <div className="cart-layout">
        <section className="cart-items-list" aria-label="Items in your cart">
          <div className="cart-list-heading"><span>ITEM</span><span>SUBTOTAL</span></div>
          {items.map(({ id, quantity, product }) => (
            <CartItem key={id} product={product} quantity={quantity}
              onRemove={() => removeFromCart(id)}
              onQuantityChange={(next) => updateQuantity(id, next)} />
          ))}
          <Link to="/products" className="back-link continue-link"><ArrowLeft size={15} /> Continue shopping</Link>
        </section>
        <aside className="order-summary">
          <span className="eyebrow">THE DETAILS</span><h2>Order summary</h2>
          <div className="summary-line"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
          <div className="summary-line"><span>Shipping</span><span>{shipping === 0 ? "Complimentary" : formatPrice(shipping)}</span></div>
          {subtotal > 0 && subtotal < 75 && <p className="shipping-hint">You're {formatPrice(75 - subtotal)} away from free shipping.</p>}
          <div className="summary-total"><span>Total</span><strong>{formatPrice(subtotal + shipping)}</strong></div>
          <button className="button button-dark checkout-button" onClick={() => window.alert("Demo storefront: checkout is not connected.")}>Continue to checkout <ArrowRight size={16} /></button>
          <p className="checkout-note">Checkout is a demo only. No payment will be taken.</p>
        </aside>
      </div>
    </main>
  );
}
