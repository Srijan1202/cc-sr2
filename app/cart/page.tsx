import CartItems from '@/components/CartItems'
import CartSummary from '@/components/CartSummary'

export default function CartPage() {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <CartItems />
        <CartSummary />
      </div>
    </div>
  )
}