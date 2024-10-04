import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Get to Know Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Careers</a></li>
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Investor Relations</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Make Money with Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Sell products on AmazingMarket</a></li>
              <li><a href="#" className="hover:text-gray-300">Become an Affiliate</a></li>
              <li><a href="#" className="hover:text-gray-300">Advertise Your Products</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">AmazingMarket Payment Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">AmazingMarket Rewards Visa Signature Cards</a></li>
              <li><a href="#" className="hover:text-gray-300">AmazingMarket.com Store Card</a></li>
              <li><a href="#" className="hover:text-gray-300">AmazingMarket Business Card</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Let Us Help You</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Your Account</a></li>
              <li><a href="#" className="hover:text-gray-300">Your Orders</a></li>
              <li><a href="#" className="hover:text-gray-300">Shipping Rates & Policies</a></li>
              <li><a href="#" className="hover:text-gray-300">Returns & Replacements</a></li>
              <li><a href="#" className="hover:text-gray-300">Help</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 AmazingMarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer