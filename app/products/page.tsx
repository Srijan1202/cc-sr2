import ProductGrid from '@/components/ProductGrid'
import FilterSection from '@/components/FilterSection'

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="flex flex-col md:flex-row">
        <FilterSection />
        <ProductGrid />
      </div>
    </div>
  )
}