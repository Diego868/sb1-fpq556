import React from 'react'
import { X, Star } from 'lucide-react'
import { Product } from '../types'

interface ProductPreviewProps {
  product: Product
  onClose: () => void
  addToCart: (product: Product) => void
}

const ProductPreview: React.FC<ProductPreviewProps> = ({ product, onClose, addToCart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
        <div className="flex flex-col md:flex-row gap-6">
          <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-64 object-cover rounded-lg" />
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
              <p className="text-3xl font-bold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
              <div className="flex items-center mb-4">
                <Star className="text-yellow-400 fill-current" />
                <span className="ml-1">{product.rating.toFixed(1)}</span>
              </div>
              <p className="text-gray-600 mb-4">{product.category}</p>
              <p className="text-gray-800 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <button
              onClick={() => {
                addToCart(product)
                onClose()
              }}
              className="w-full bg-yellow-400 text-gray-900 py-2 rounded-md hover:bg-yellow-500 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPreview