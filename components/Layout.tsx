'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingCartIcon, MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { CartProvider, useCart } from '@/context/CartContext'
import CartPopup from './CartPopup'

function LayoutContent({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(true)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cart } = useCart()

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <header className="bg-gray-900 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <span className="text-2xl font-bold">ShopKaro by Srijan</span>
          </Link>
          <nav>
            <ul className="flex space-x-4 items-center">
              <li>
                <Link href="/">
                  <span className="hover:text-blue-400 transition-colors">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <span className="hover:text-blue-400 transition-colors">Products</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="relative hover:text-blue-400 transition-colors"
                >
                  <ShoppingCartIcon className="h-6 w-6" />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {cart.length}
                    </span>
                  )}
                </button>
              </li>
              <li>
                <button onClick={toggleDarkMode} className="focus:outline-none">
                  {darkMode ? (
                    <SunIcon className="h-6 w-6" />
                  ) : (
                    <MoonIcon className="h-6 w-6" />
                  )}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>
      <footer className="bg-gray-900 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          &copy; 2023 ShopKaro by Srijan. All rights reserved.
        </div>
      </footer>
      <CartPopup isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  )
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <LayoutContent>{children}</LayoutContent>
    
    </CartProvider>
  )
}