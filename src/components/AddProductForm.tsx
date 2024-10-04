import React, { useState } from 'react'
import { X } from 'lucide-react'
import { Product } from '../types'

interface AddProductFormProps {
  onClose: () => void
  onAddProduct: (product: Product) => void
}

const AddProductForm: React.FC<AddProductFormProps> = ({ onClose, onAddProduct }) => {
  const [product, setProduct] = useState<Omit<Product, 'id'>>({
    name: '',
    price: '',
    image: '',
    rating: '',
    category: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setProduct(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newProduct: Product = {
      ...product,
      id: Date.now(),
      price: parseFloat(product.price),
      rating: parseFloat(product.rating)
    }
    onAddProduct(newProduct)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Add New Product</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block mb-2">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
              min="0"
              step="0.01"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block mb-2">Image URL</label>
            <input
              type="url"
              id="image"
              name="image"
              value={product.image}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rating" className="block mb-2">Initial Rating</label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={product.rating}
              onChange={handleChange}
              required
              min="0"
              max="5"
              step="0.1"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block mb-2">Category</label>
            <select
              id="category"
              name="category"
              value={product.category}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            >
              <option value="">Select a category</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Books">Books</option>
              <option value="Home & Kitchen">Home & Kitchen</option>
              <option value="Sports & Outdoors">Sports & Outdoors</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Add Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddProductForm