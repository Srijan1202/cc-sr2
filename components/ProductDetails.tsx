'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'

interface ProductWithoutQuantity {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: { rate: number; count: number }
}

interface ProductWithQuantity extends ProductWithoutQuantity {
  quantity: number
}

export default function ProductDetails({ product }: { product: ProductWithoutQuantity }) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    const productWithQuantity: ProductWithQuantity = {
      ...product,
      quantity: quantity
    }
    addToCart(productWithQuantity)
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white rounded-lg shadow-lg overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full md:w-1/2 p-8"
      >
        <img src={product.image} alt={product.title} className="w-full h-auto object-contain" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full md:w-1/2 p-8"
      >
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.title}</h1>
        <p className="text-2xl text-blue-600 font-bold mb-4">${product.price.toFixed(2)}</p>
        <div className="flex items-center mb-4">
          <span className="text-yellow-400 mr-1">★</span>
          <span className="text-gray-600">{product.rating.rate.toFixed(1)} ({product.rating.count} reviews)</span>
        </div>
        <p className="mb-6 text-gray-600">{product.description}</p>
        <div className="flex items-center mb-4">
          <label htmlFor="quantity" className="mr-2 text-gray-700">Quantity:</label>
          <input
            type="number"
            id="quantity"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="border rounded p-2 w-16 text-center text-gray-800"
          />
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold"
        >
          Add to Cart
        </button>
      </motion.div>
    </div>
  )
}