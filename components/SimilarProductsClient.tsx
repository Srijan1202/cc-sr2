// components/SimilarProductsClient.tsx
'use client'

import ProductCard from './ProductCard'

interface Product {
  id: number
  title: string
  price: number
  image: string
}

export default function SimilarProductsClient({ products }: { products: Product[] }) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Similar Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}