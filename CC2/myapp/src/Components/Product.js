import React from 'react';
import '../Assets/Css/product.css'; // Import your CSS file

const Product = () => {
  const products = [
    {
      id: 1,
      name: 'Organic Moisturizer',
      price: '$29.99',
      description: 'Hydrates and nourishes the skin with organic ingredients.',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT--ezkgufyXmnWmasli98nrpbN4vzLyDgnw&usqp=CAU',
    },
    {
      id: 2,
      name: 'Vitamin C Serum',
      price: '$39.99',
      description: 'Brightens and evens skin tone, packed with antioxidants.',
      imageURL: 'https://studdmuffyn.com/cdn/shop/files/vitamin-c-anti-aging-serum-2.jpg?v=1687413316',
    },
    {
      id:3,
      name:'Eyeliner',
      price:'$40.97',
      description:'Cosmetic used to define the Eyes',
      imageURL:'https://marscosmetics.in/cdn/shop/products/EL03-4W_800x.jpg?v=1647930734',
    },
    {
      id:4,
      name:'Lipstick',
      price:'$15.99',
      description:'Cosmetic product used to apply coloration and texture to lips,often made of wax and oil',
      imageURL:'https://newsmobile.in/wp-content/uploads/2018/03/lipstick-2.jpg',
    },
    
    // Add more products as needed
  ];

  return (
    <div className="products-container">
      <h1>Our Beauty Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageURL} alt={product.name} />
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <p>{product.description}</p>
              {/* Additional buttons, details, or links can be added here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
