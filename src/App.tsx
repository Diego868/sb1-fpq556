import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import ProductList from './components/ProductList'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import CartModal from './components/CartModal'
import Checkout from './components/Checkout'
import ProductPreview from './components/ProductPreview'
import SellerDashboard from './components/SellerDashboard'
import { Product } from './types'
import { products as initialProducts } from './data/products'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [products, setProducts] = useState(initialProducts)
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    const uniqueCategories = Array.from(new Set(initialProducts.map(p => p.category)))
    setCategories(uniqueCategories)
  }, [])

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const filteredProducts = initialProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setProducts(filteredProducts)
  }

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        )
      }
      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
  }

  const updateCartItemQuantity = (productId: number, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: Math.max(0, quantity) } : item
      ).filter(item => item.quantity > 0)
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const openCart = () => {
    setIsCartOpen(true)
  }

  const closeCart = () => {
    setIsCartOpen(false)
  }

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
  }

  const filterByCategory = (category: string) => {
    const filteredProducts = initialProducts.filter(product => product.category === category)
    setProducts(filteredProducts)
    setIsSidebarOpen(false)
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
          cartItemsCount={cartItems.reduce((total, item) => total + (item.quantity || 1), 0)}
          toggleSidebar={toggleSidebar}
          openCart={openCart}
        />
        <main className="flex-grow container mx-auto py-8 px-4">
          <Routes>
            <Route path="/" element={
              <div className="flex flex-col md:flex-row gap-8">
                <Sidebar 
                  isOpen={isSidebarOpen} 
                  toggleSidebar={toggleSidebar} 
                  categories={categories}
                  filterByCategory={filterByCategory}
                />
                <ProductList 
                  products={products} 
                  addToCart={addToCart} 
                  onProductClick={handleProductClick}
                />
              </div>
            } />
            <Route path="/checkout" element={
              <Checkout 
                cartItems={cartItems} 
                clearCart={clearCart} 
                updateCartItemQuantity={updateCartItemQuantity}
              />
            } />
            <Route path="/seller" element={<SellerDashboard setProducts={setProducts} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <CartModal
          isOpen={isCartOpen}
          onClose={closeCart}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          updateCartItemQuantity={updateCartItemQuantity}
          proceedToCheckout={() => {
            closeCart()
            window.location.href = '/checkout'
          }}
        />
        {selectedProduct && (
          <ProductPreview
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            addToCart={addToCart}
          />
        )}
      </div>
    </Router>
  )
}

export default App