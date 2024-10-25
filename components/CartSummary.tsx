'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CartSummary() {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    // In a real app, you'd calculate this based on the actual cart items
    setTotal(69.97)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full lg:w-1/3 bg-gray-900 p-6 rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal:</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping:</span>
        <span>$5.00</span>
      </div>
      <div className="flex justify-between font-bold text-lg mt-4">
        <span>Total:</span>
        <span>${(total + 5).toFixed(2)}</span>
      </div>
      <button className="w-full bg-blue-600 text-white py-2 rounded mt-6 hover:bg-blue-700 transition-colors">
        Proceed to Checkout
      </button>
    </motion.div>
  )
}