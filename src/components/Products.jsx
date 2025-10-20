import './Products.css';

function Products() {
  const products = [
    {
      id: 1,
      name: 'Premium Collection',
      description: 'Handcrafted products with attention to detail',
      category: 'Featured'
    },
    {
      id: 2,
      name: 'Modern Essentials',
      description: 'Contemporary designs for everyday life',
      category: 'Popular'
    },
    {
      id: 3,
      name: 'Limited Edition',
      description: 'Exclusive items for discerning customers',
      category: 'Exclusive'
    },
    {
      id: 4,
      name: 'Classic Range',
      description: 'Timeless pieces that never go out of style',
      category: 'Classic'
    },
    {
      id: 5,
      name: 'Luxury Series',
      description: 'The pinnacle of craftsmanship and quality',
      category: 'Luxury'
    },
    {
      id: 6,
      name: 'Eco-Friendly Line',
      description: 'Sustainable products for a better tomorrow',
      category: 'Sustainable'
    }
  ];

  return (
    <section id="products" className="products">
      <div className="products-container">
        <h2 className="section-title">Our Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-badge">{product.category}</div>
              <div className="product-image">
                <div className="placeholder-icon">📦</div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <button className="product-button">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
