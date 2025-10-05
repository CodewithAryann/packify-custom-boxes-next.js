import Link from 'next/link'
import Image from 'next/image'

export default function FeaturesHighlight() {
  const features = [
    {
      title: 'Over 3,000 happy clients',
      icon: '/images/client-icon.svg',
      description: 'Join thousands of satisfied customers'
    },
    {
      title: 'Eco-friendly materials',
      icon: '/images/eco-icon.svg',
      description: 'Sustainable packaging solutions'
    },
    {
      title: 'Price Match Guarantee',
      icon: '/images/price-icon.svg',
      description: 'Well match any competitors price'
    },
    {
      title: '24/7 design support',
      icon: '/images/support-icon.svg',
      description: 'Expert help whenever you need it'
    },
    {
      title: 'Fast 10-day delivery',
      icon: '/images/delivery-icon.svg',
      description: 'Quick turnaround on all orders'
    },
  ]

  return (
    <section className="relative bg-white py-16 px-6 text-center">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Premium Custom Boxes Designed to Elevate <span className="text-brand-orange-contrast">Your Brand</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Fully printed. Fast turnaround. Eco-conscious. Made to impress — inside and out.
          Free U.S. Shipping. No Minimums. Delivered Worldwide.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 text-gray-700 rounded-2xl shadow transition hover:bg-brand-orange-contrast hover:text-white group cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label={feature.title}
            >
              {/* We'll use a placeholder div for now since we don't know if these icons exist */}
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-gray-100 rounded-full group-hover:bg-white">
                {/* <Image src={feature.icon} alt="" width={24} height={24} /> */}
              </div>
              <p className="font-semibold mb-2">{feature.title}</p>
              <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/get-quote"
            className="inline-block bg-brand-orange-contrast hover:bg-[#5a1e0b] text-white font-semibold text-lg py-4 px-8 rounded-full shadow-lg transition w-full sm:w-auto"
          >
            Start Your Custom Box
          </Link>
          <Link
            href="/how-to-order"
            className="inline-block bg-white border-2 border-brand-orange-contrast text-brand-orange-contrast hover:bg-gray-50 font-semibold text-lg py-3.5 px-8 rounded-full shadow-lg transition w-full sm:w-auto"
          >
            Learn How It Works
          </Link>
        </div>
      </div>
    </section>
  )
}
