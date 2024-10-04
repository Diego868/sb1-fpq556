import React, { useState } from 'react'
import { Product } from '../types'
import { Plus, Minus } from 'lucide-react'

interface CheckoutProps {
  cartItems: Product[]
  clearCart: () => void
  updateCartItemQuantity: (productId: number, quantity: number) => void
}

const Checkout: React.FC<CheckoutProps> = ({ cartItems, clearCart, updateCartItemQuantity }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
  })

  const total = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Order submitted:', { items: cartItems, customer: formData })
    alert('Thank you for your order!')
    clearCart()
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Order</h2>
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-2 border-b pb-2">
              <span>{item.name}</span>
              <div className="flex items-center">
                <button
                  onClick={() => updateCartItemQuantity(item.id, (item.quantity || 1) - 1)}
                  className="text-gray-500 hover:text-gray-700 mr-2"
                >
                  <Minus size={20} />
                </button>
                <span>{item.quantity || 1}</span>
                <button
                  onClick={() => updateCartItemQuantity(item.id, (item.quantity || 1) + 1)}
                  className="text-gray-500 hover:text-gray-700 ml-2"
                >
                  <Plus size={20} />
                </button>
                <span className="ml-4">${(item.price * (item.quantity || 1)).toFixed(2)}</span>
              </div>
            </div>
          ))}
          <div className="text-xl font-bold mt-4">Total: ${total.toFixed(2)}</div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block mb-2">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="block mb-2">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="country" className="block mb-2">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="zipCode" className="block mb-2">Zip Code</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Checkout