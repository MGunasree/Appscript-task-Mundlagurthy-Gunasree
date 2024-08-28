import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from '../styles/Product.css'; 

const Product = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Backpack', price: '$50', image: 'https://m.media-amazon.com/images/I/51DVNSbWIRL._SX679_.jpg' },
    { id: 2, name: 'Toy', price: '$20', image: 'https://via.placeholder.com/100' },
    { id: 3, name: 'Shoes', price: '$75', image: 'https://via.placeholder.com/100' },
    { id: 4, name: 'Hat', price: '$30', image: 'https://via.placeholder.com/100' },
    { id: 5, name: 'Sunglasses', price: '$90', image: 'https://via.placeholder.com/100' },
    { id: 6, name: 'Bag', price: '$40', image: 'https://via.placeholder.com/100' },
    { id: 7, name: 'Watch', price: '$150', image: 'https://via.placeholder.com/100' },
    { id: 8, name: 'Scarf', price: '$25', image: 'https://via.placeholder.com/100' },
    { id: 9, name: 'Gloves', price: '$35', image: 'https://via.placeholder.com/100' },
    // Add more products as needed
  ]);

  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9); // Number of products to display initially
  const containerRef = useRef(null);

  const loadMoreProducts = useCallback(() => {
    setDisplayedProducts(products.slice(0, visibleCount));
  }, [products, visibleCount]);

  useEffect(() => {
    loadMoreProducts(); // Load initial set of products

    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const containerBottom = containerRef.current.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (scrollTop > 300) {
          setVisibleCount(prevCount => Math.min(prevCount + 3, products.length)); // Load 3 more products
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreProducts]);

  useEffect(() => {
    loadMoreProducts(); // Update displayed products when visibleCount changes
  }, [visibleCount, loadMoreProducts]);

  return (
    <div ref={containerRef} style={{ flex: 1, padding: '10px' }}>
      <div className="product-container">
        {displayedProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price}</p>
            <div className="love-icon" onClick={(e) => {
              e.target.classList.toggle('loved');
            }}>
              ❤️
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
