'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface CartItem {
  id: number
  title: string
  price: number
  quantity: number
  image: string
}

export default function CartItems() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    // In a real app, you'd fetch this from an API or local storage
    setCartItems([
      { id: 1, title: 'Product 1', price: 19.99, quantity: 2, image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' },
      { id: 2, title: 'Product 2', price: 29.99, quantity: 1, image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' },
    ])
  }, [])

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
    ))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  return (
    <div className="w-full lg:w-2/3">
      {cartItems.map(item => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="flex items-center border-b border-gray-700 py-4"
        >
          <img src={item.image} alt={item.title} className="w-24 h-24 object-cover mr-4" />
          <div className="flex-grow">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-blue-400">${item.price.toFixed(2)}</p>
            <div className="flex items-center mt-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="bg-gray-800 text-white px-2 py-1 rounded"
              >
                -
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="bg-gray-800 text-white px-2 py-1 rounded"
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={() => removeItem(item.id)}
            className="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </motion.div>
      ))}
    </div>
  )
}