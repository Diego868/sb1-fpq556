import React from 'react'
import { Link } from 'react-router-dom'
import { Search, ShoppingCart, User, Menu } from 'lucide-react'

interface HeaderProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void
  cartItemsCount: number
  toggleSidebar: () => void
  openCart: () => void
}

const Header: React.FC<HeaderProps> = ({
  searchTerm,
  setSearchTerm,
  handleSearch,
  cartItemsCount,
  toggleSidebar,
  openCart,
}) => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={toggleSidebar} className="mr-4 md:hidden">
            <Menu size={24} />
          </button>
          <Link to="/" className="text-2xl font-bold">AmazingMarket</Link>
        </div>
        <form onSubmit={handleSearch} className="flex-grow mx-4 hidden md:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full p-2 rounded-md text-gray-900"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="absolute right-2 top-2">
              <Search className="text-gray-500" />
            </button>
          </div>
        </form>
        <div className="flex items-center">
          <Link to="/seller" className="mr-4 hover:text-gray-300 hidden md:block">Sell</Link>
          <button className="mr-4">
            <User size={24} />
          </button>
          <button className="relative" onClick={openCart}>
            <ShoppingCart size={24} />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>
      <form onSubmit={handleSearch} className="mt-4 md:hidden">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 rounded-md text-gray-900"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="absolute right-2 top-2">
            <Search className="text-gray-500" />
          </button>
        </div>
      </form>
    </header>
  )
}

export default Header