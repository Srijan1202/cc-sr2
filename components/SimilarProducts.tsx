// components/SimilarProducts.tsx
import { Suspense } from 'react'
import SimilarProductsClient from './SimilarProductsClient'

async function getSimilarProducts(id: string) {
  const res = await fetch('https://fakestoreapi.com/products?limit=4')
  if (!res.ok) throw new Error('Failed to fetch similar products')
  const data = await res.json()
  return data.filter((p: any) => p.id.toString() !== id)
}

export default async function SimilarProducts({ id }: { id: string }) {
  const products = await getSimilarProducts(id)

  return (
    <Suspense fallback={<div>Loading similar products...</div>}>
      <SimilarProductsClient products={products} />
    </Suspense>
  )
}