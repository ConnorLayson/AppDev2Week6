import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "../components/ProductCard.jsx";

export default function ProductsPage({ products, addToCart }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(products.map((product) => product.category))];

  const filteredProducts = useMemo(() => products.filter((product) => {
    const matchesQuery = `${product.name} ${product.category}`.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;
    return matchesQuery && matchesCategory;
  }), [products, query, category]);

  return (
    <main className="page-wrap catalog-page">
      <div className="catalog-intro">
        <span className="eyebrow">THE FULL COLLECTION</span>
        <h1>Good things for<br /><em>your everyday.</em></h1>
        <p>Considered tech and workspace essentials. Nothing extra, just the things that work.</p>
      </div>
      <div className="catalog-toolbar">
        <div className="catalog-count"><SlidersHorizontal size={15} /> <span>{filteredProducts.length} products</span></div>
        <div className="category-filters" aria-label="Filter by category">
          {categories.map((item) => <button key={item} className={category === item ? "filter-chip active" : "filter-chip"} onClick={() => setCategory(item)}>{item}</button>)}
        </div>
        <label className="search-field"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search essentials" aria-label="Search products" /></label>
      </div>
      {filteredProducts.length ? (
        <div className="product-grid catalog-grid">
          {filteredProducts.map((product) => <ProductCard key={product.id} product={product} addToCart={addToCart} />)}
        </div>
      ) : <div className="empty-state"><h2>No matches just yet.</h2><p>Try a different search or category.</p><button className="button button-dark" onClick={() => { setQuery(""); setCategory("All"); }}>Clear filters</button></div>}
    </main>
  );
}
