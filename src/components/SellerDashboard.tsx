import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import AddProductForm from './AddProductForm'
import { Product } from '../types'

interface SellerDashboardProps {
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

const SellerDashboard: React.FC<SellerDashboardProps> = ({ setProducts }) => {
  const [showAddForm, setShowAddForm] = useState(false)
  const [sellerProducts, setSellerProducts] = useState<Product[]>([])

  const handleAddProduct = (newProduct: Product) => {
    setSellerProducts(prevProducts => [...prevProducts, newProduct])
    setProducts(prevProducts => [...prevProducts, newProduct])
    setShowAddForm(false)
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Seller Dashboard</h1>
      <button
        onClick={() => setShowAddForm(true)}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 flex items-center mb-6"
      >
        <Plus size={20} className="mr-2" />
        Add New Product
      </button>
      {showAddForm && (
        <AddProductForm 
          onClose={() => setShowAddForm(false)} 
          onAddProduct={handleAddProduct}
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sellerProducts.map(product => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500">{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SellerDashboard