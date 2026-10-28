import { Link } from "react-router-dom";
import { ArrowDownRight, ArrowRight, Check, Sparkles } from "lucide-react";
import ProductCard from "../components/ProductCard.jsx";

export default function HomePage({ products, addToCart }) {
  const featured = products.slice(0, 3);

  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow"><Sparkles size={14} /> THE EVERYDAY TECH EDIT</div>
          <h1>Make space<br />for <em>better</em> ideas.</h1>
          <p className="hero-description">Thoughtfully chosen tools and desk essentials that make your everyday flow feel a little more effortless.</p>
          <div className="hero-actions">
            <Link to="/products" className="button button-dark">Shop the collection <ArrowRight size={16} /></Link>
            <a href="#why-us" className="text-link">Why ComponentCorner <ArrowDownRight size={16} /></a>
          </div>
          <div className="hero-proof"><span className="proof-check"><Check size={13} /></span> Curated essentials, no unnecessary clutter.</div>
        </div>
        <div className="hero-visual">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=90" alt="A calm, thoughtfully arranged workspace" />
          <div className="hero-image-note"><span className="note-dot" /> A workspace that works for you</div>
          <div className="hero-index">01 <span>/</span> 03</div>
        </div>
        <div className="hero-side-label">DESIGNED FOR YOUR DAILY ROUTINE</div>
      </section>

      <section className="trust-strip">
        <div><span className="trust-number">01</span><span>Useful by design</span></div>
        <div><span className="trust-number">02</span><span>Quality over quantity</span></div>
        <div><span className="trust-number">03</span><span>Small things, better days</span></div>
      </section>

      <section className="section page-wrap featured-section">
        <div className="section-heading">
          <div><span className="eyebrow">A GOOD PLACE TO START</span><h2>Everyday favorites<span className="period">.</span></h2></div>
          <Link to="/products" className="underlined-link">View all products <ArrowRight size={15} /></Link>
        </div>
        <div className="product-grid">
          {featured.map((product) => <ProductCard key={product.id} product={product} addToCart={addToCart} />)}
        </div>
      </section>

      <section className="why-section" id="why-us">
        <div className="why-inner page-wrap">
          <div><span className="eyebrow">THE COMPONENTCORNER WAY</span><h2>Less searching.<br /><em>More doing.</em></h2></div>
          <div className="why-copy"><p>We believe the right tools should fit naturally into your life. That's why our collection focuses on practical, considered essentials that earn their place on your desk.</p><Link to="/products" className="button button-outline">Find your essentials <ArrowRight size={16} /></Link></div>
        </div>
      </section>
    </main>
  );
}
