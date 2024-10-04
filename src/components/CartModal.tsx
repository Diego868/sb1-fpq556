import React from 'react'
import { X, Plus, Minus } from 'lucide-react'
import { Product } from '../types'

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
  cartItems: Product[]
  removeFromCart: (productId: number) => void
  updateCartItemQuantity: (productId: number, quantity: number) => void
  proceedToCheckout: () => void
}

const CartModal: React.FC<CartModalProps> = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  removeFromCart, 
  updateCartItemQuantity,
  proceedToCheckout 
}) => {
  if (!isOpen) return null

  const total = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4 border-b pb-2">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
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
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 ml-4"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-4">
              <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
              <button
                onClick={proceedToCheckout}
                className="mt-4 w-full bg-yellow-400 text-gray-900 py-2 rounded-md hover:bg-yellow-500 transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CartModal