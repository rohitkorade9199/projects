import React from 'react'
import { Link } from 'react-router-dom';
function Products() {
  return (
   <div>
    <h2>Our Products</h2>
    <Link to="/products/catalogue">View Catalogue</Link>
  </div>
  )
}

export default Products
