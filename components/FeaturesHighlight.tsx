import Link from 'next/link'

export default function FeaturesHighlight() {
  const features = [
    'Over 3,000 happy clients',
    'Eco-friendly materials',
    'Price Match Guarantee',
    '24/7 design support',
    'Fast 10-day delivery',
  ]

  return (
    <section className="relative bg-white py-16 px-6 text-center">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Premium Custom Boxes Designed to Elevate <span className="text-[#f97316]">Your Brand</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Fully printed. Fast turnaround. Eco-conscious. Made to impress — inside and out.
          Free U.S. Shipping. No Minimums. Delivered Worldwide.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 text-gray-700 rounded-2xl shadow transition hover:bg-[#f97316] hover:text-white"
            >
              <p className="font-semibold">{feature}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/get-quote"
            className="inline-block bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-lg py-4 px-8 rounded-full shadow-lg transition"
          >
            Start Your Custom Box
          </Link>
        </div>
      </div>
    </section>
  )
}
