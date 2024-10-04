import React from 'react'
import { X } from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  toggleSidebar: () => void
  categories: string[]
  filterByCategory: (category: string) => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, categories, filterByCategory }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
    >
      <div className="p-4">
        <button onClick={toggleSidebar} className="absolute top-4 right-4 md:hidden">
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => filterByCategory(category)}
                className="hover:text-blue-600 w-full text-left"
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar