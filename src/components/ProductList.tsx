import React from 'react'
import ProductCard from './ProductCard'
import { Product } from '../types'

interface ProductListProps {
  products: Product[]
  addToCart: (product: Product) => void
  onProductClick: (product: Product) => void
}

const ProductList: React.FC<ProductListProps> = ({ products, addToCart, onProductClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          addToCart={addToCart} 
          onProductClick={onProductClick}
        />
      ))}
    </div>
  )
}

export default ProductList