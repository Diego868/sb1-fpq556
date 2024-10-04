import React from 'react'
import { Star } from 'lucide-react'
import { Product } from '../types'

interface ProductCardProps {
  product: Product
  addToCart: (product: Product) => void
  onProductClick: (product: Product) => void
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart, onProductClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover cursor-pointer" 
        onClick={() => onProductClick(product)}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 cursor-pointer" onClick={() => onProductClick(product)}>{product.name}</h2>
        <p className="text-2xl font-bold text-blue-600 mb-2">${product.price.toFixed(2)}</p>
        <div className="flex items-center mb-2">
          <Star className="text-yellow-400 fill-current" />
          <span className="ml-1">{product.rating.toFixed(1)}</span>
        </div>
        <p className="text-sm text-gray-600 mb-4">{product.category}</p>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-yellow-400 text-gray-900 py-2 rounded-md hover:bg-yellow-500 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard