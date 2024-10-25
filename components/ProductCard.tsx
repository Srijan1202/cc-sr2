'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useCart } from '../context/CartContext'

interface Product {
  id: number
  title: string
  price: number
  image: string
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg"
    >
      <Link href={`/products/${product.id}`}>
        <div className="h-64 overflow-hidden">
          <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold mb-2 text-gray-800 truncate">{product.title}</h3>
        </Link>
        <p className="text-blue-600 font-bold mb-2">${product.price.toFixed(2)}</p>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  )
}