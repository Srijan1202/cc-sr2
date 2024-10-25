import ProductDetails from '@/components/ProductDetails'
import SimilarProducts from '@/components/SimilarProducts'

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <ProductDetails id={params.id} />
      <SimilarProducts id={params.id} />
    </div>
  )
}