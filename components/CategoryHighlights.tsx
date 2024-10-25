'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CategoryHighlights() {
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-6">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
          >
            <Link href={`/products?category=${category}`}>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{category}</h3>
                <p className="text-gray-400">Explore {category}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}