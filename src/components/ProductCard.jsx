import { Link } from "react-router-dom";
import { ArrowUpRight, Plus, Star } from "lucide-react";
import { formatPrice } from "../data/products.js";

export default function ProductCard({ product, addToCart }) {
  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-image-wrap" aria-label={`View ${product.name}`}>
        <img className="product-image" src={product.image} alt={product.name} loading="lazy" />
        {product.tag && <span className="product-tag">{product.tag}</span>}
        <span className="image-arrow"><ArrowUpRight size={18} /></span>
      </Link>
      <div className="product-info">
        <div className="product-meta"><span>{product.category}</span><span className="rating"><Star size={12} fill="currentColor" /> {product.rating}</span></div>
        <Link to={`/products/${product.id}`} className="product-name">{product.name}</Link>
        <div className="product-bottom">
          <span className="product-price">{formatPrice(product.price)}</span>
          <button className="quick-add" onClick={() => addToCart(product)} aria-label={`Add ${product.name} to cart`}><Plus size={17} /><span>Add</span></button>
        </div>
      </div>
    </article>
  );
}
