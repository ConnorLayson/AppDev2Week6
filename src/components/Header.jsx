import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, MoveRight } from "lucide-react";

export default function Header({ cartCount = 0 }) {
  return (
    <header className="site-header">
      <div className="announcement">Thoughtful tech for your everyday <span>·</span> Free shipping over $75</div>
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="ComponentCorner home">
          <span className="brand-mark">c.</span>
          <span>component<span className="brand-light">corner</span></span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/products">Shop all</NavLink>
        </nav>
        <div className="header-actions">
          <Link to="/products" className="header-shop-link">Explore <MoveRight size={15} /></Link>
          <Link to="/cart" className="cart-link" aria-label={`Shopping cart, ${cartCount} items`}>
            <ShoppingBag size={20} strokeWidth={1.7} />
            <span>Bag</span>
            <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
