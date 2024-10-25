import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import CategoryHighlights from '@/components/CategoryHighlights'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Hero />
      <FeaturedProducts />
      <CategoryHighlights />
    </main>
  )
}