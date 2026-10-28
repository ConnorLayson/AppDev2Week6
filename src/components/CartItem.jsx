import { Minus, Plus, X } from "lucide-react";
import { formatPrice } from "../data/products.js";

export default function CartItem({ product, quantity, onRemove, onQuantityChange }) {
  return (
    <article className="cart-item">
      <img className="cart-item-image" src={product.image} alt={product.name} />
      <div className="cart-item-info">
        <span className="eyebrow">{product.category}</span>
        <h3>{product.name}</h3>
        <span className="cart-item-price">{formatPrice(product.price)}</span>
        <div className="quantity-control" aria-label={`Quantity for ${product.name}`}>
          <button onClick={() => onQuantityChange(Math.max(1, quantity - 1))} aria-label="Decrease quantity"><Minus size={13} /></button>
          <span>{quantity}</span>
          <button onClick={() => onQuantityChange(quantity + 1)} aria-label="Increase quantity"><Plus size={13} /></button>
        </div>
      </div>
      <div className="cart-item-end">
        <strong>{formatPrice(product.price * quantity)}</strong>
        <button className="remove-button" onClick={onRemove} aria-label={`Remove ${product.name}`}><X size={16} /> Remove</button>
      </div>
    </article>
  );
}
