'use client'

import { useState, useEffect } from 'react'

export default function FilterSection() {
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  return (
    <div className="w-full md:w-64 mb-6 md:mb-0 mr-0 md:mr-6">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Categories</h3>
        {categories.map(category => (
          <label key={category} className="flex items-center mb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            {category}
          </label>
        ))}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Price Range</h3>
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          value={priceRange[1]}
          onChange={e => setPriceRange([priceRange[0], parseInt(e.target.value)])}
          className="w-full"
        />
        <div className="flex justify-between mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  )
}