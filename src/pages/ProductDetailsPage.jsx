import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, ShieldCheck, Truck } from "lucide-react";
import { formatPrice } from "../data/products.js";

export default function ProductDetailsPage({ products, addToCart }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return <main className="page-wrap empty-state"><span className="eyebrow">NOT FOUND</span><h1>We couldn't find that item.</h1><Link to="/products" className="button button-dark"><ArrowLeft size={16} /> Back to products</Link></main>;
  }

  return (
    <main className="page-wrap detail-page">
      <Link to="/products" className="back-link"><ArrowLeft size={15} /> All products</Link>
      <div className="detail-layout">
        <div className="detail-image-wrap"><img src={product.image} alt={product.name} className="detail-image" /><span className="detail-image-caption">COMPONENTCORNER · EVERYDAY EDIT</span></div>
        <div className="detail-copy">
          <span className="eyebrow">{product.category} / SELECTED ESSENTIALS</span>
          <h1>{product.name}<span className="period">.</span></h1>
          <div className="detail-rating"><span>★★★★★</span> {product.rating} / 5 customer rating</div>
          <p className="detail-price">{formatPrice(product.price)}</p>
          <p className="detail-description">{product.description}</p>
          <button className="button button-dark detail-add" onClick={() => addToCart(product)}>Add to bag <ArrowRight size={16} /></button>
          <div className="detail-benefits"><div><Truck size={18} /><span><strong>Free shipping</strong><small>On orders over $75</small></span></div><div><ShieldCheck size={18} /><span><strong>Easy, secure checkout</strong><small>Shop with confidence</small></span></div><div><Check size={18} /><span><strong>Considered quality</strong><small>Selected for everyday use</small></span></div></div>
          <p className="detail-note">A useful thing, chosen with care. Add it to your bag to keep exploring.</p>
        </div>
      </div>
    </main>
  );
}
