import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link to="/" className="brand footer-brand"><span className="brand-mark">c.</span><span>component<span className="brand-light">corner</span></span></Link>
        <p>Good tools make room for great ideas.</p>
        <Link to="/products" className="footer-link">Explore the collection ↗</Link>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} ComponentCorner</span>
        <span>Thoughtfully selected. Made for everyday.</span>
      </div>
    </footer>
  );
}
