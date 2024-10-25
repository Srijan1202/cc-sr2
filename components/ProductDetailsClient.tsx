// components/ProductDetailsClient.tsx
'use client'

import { motion } from 'framer-motion'

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: { rate: number; count: number }
}

export default function ProductDetailsClient({ product }: { product: Product }) {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full md:w-1/2"
      >
        <img src={product.image} alt={product.title} className="w-full h-auto object-contain" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full md:w-1/2"
      >
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-2xl text-blue-400 font-bold mb-4">${product.price.toFixed(2)}</p>
        <div className="flex items-center mb-4">
          <span className="text-yellow-400 mr-1">★</span>
          <span>{product.rating.rate.toFixed(1)} ({product.rating.count} reviews)</span>
        </div>
        <p className="mb-6">{product.description}</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
          Add to Cart
        </button>
      </motion.div>
    </div>
  )
}