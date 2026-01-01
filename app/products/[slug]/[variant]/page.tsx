'use client'

import { useState } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ProductQuoteForm from '@/components/ProductQuoteForm'
import { productsData } from '@/lib/products-data'

type Props = {
  params: { slug: string; variant: string }
}

export default function ProductVariantPage({ params }: Props) {
  const product = productsData[params.slug]
  if (!product || !product.variants) notFound()

  const variant = product.variants.find(
    v => v.name.toLowerCase().replace(/\s+/g, '-') === params.variant
  )
  if (!variant) notFound()

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 pt-[6rem] pb-4">
        <nav className="text-sm text-gray-600">
          <Link href="/" className="hover:text-orange-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href={`/products/${params.slug}`} className="hover:text-orange-600">{product.title}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{variant.name}</span>
        </nav>
      </div>

      {/* Main Product Section (2-column) */}
      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-lg shadow-lg">

        {/* Left Column */}
        <section className="col-span-1">
          <h1 className="text-4xl font-extrabold mb-6 text-orange-600">{variant.name}</h1>

          <div className="relative w-full h-[400px] overflow-hidden rounded-xl mb-6 bg-[#f7f4ef]">
            <Image src={variant.image} alt={variant.name} fill className="object-contain" />
          </div>

          {/* Product Description */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Product Description</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{variant.description || product.description}</p>
          </div>

          {/* Key Features */}
          {product.features?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Key Features</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
                {product.features.map((feature, index) => (
                  <div key={index}>
                    <Image
                      src={`/images/${getFeatureIcon(feature)}.webp`}
                      alt={feature}
                      width={32}
                      height={32}
                      className="mx-auto"
                    />
                    <p className="mt-2 text-gray-600">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Back Button */}
          <Link
            href={`/products/${params.slug}`}
            className="inline-block mt-6 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-md transition"
          >
            ← View All {product.title}
          </Link>
        </section>

        {/* Right Column: Quote Form */}
        <section className="col-span-1">
          <ProductQuoteForm productName={`${product.title} - ${variant.name}`} />
        </section>
      </main>

      {/* ==============================
          Custom Bubble Mailers Full Width
      =============================== */}
      <CustomBubbleMailersFullWidth />

      {/* Related Variants */}
      {product.variants.length > 1 && (
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-10">More {product.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {product.variants
              .filter(v => v.name !== variant.name)
              .slice(0, 8)
              .map((relatedVariant, index) => (
                <Link
                  key={index}
                  href={`/products/${params.slug}/${relatedVariant.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block group"
                >
                  <div className="bg-white rounded-[20px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="relative w-full h-48 bg-[#efefef]">
                      <Image
                        src={relatedVariant.image}
                        alt={relatedVariant.name}
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-semibold text-gray-800 mb-1">{relatedVariant.name}</h3>
                      <span className="text-sm text-gray-600">View Details →</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      )}
    </div>
  )
}

/* =====================
   Custom Bubble Mailers Full Width Section
===================== */
function CustomBubbleMailersFullWidth() {
  const faqData = [
    { question: 'Can I customize the size of the custom bubble mailers?', answer: 'Yes, we provide custom sizes according to your product dimensions.' },
    { question: 'What options are available for customization?', answer: 'You can add full-color printing, logos, and interior messaging.' },
    { question: 'Can I request a sample before bulk orders?', answer: 'Yes, samples are available upon request.' },
    { question: 'What are the minimum order quantities?', answer: 'Minimum orders start at 100 pieces, depending on size and printing options.' },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggleFaq = (idx: number) => setOpenIndex(openIndex === idx ? null : idx)

  return (
    <section className="bg-[#fef8f0] mt-12 py-12">
      <div className="max-w-7xl mx-auto px-6 space-y-12">

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl font-extrabold text-orange-600">Premium Protective Packaging</h2>
          <p className="text-gray-700 text-lg">
            Custom Bubble Mailers for Secure & Professional Shipping. Shock-absorbing, puncture-resistant, and fully customizable to protect fragile and premium products.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard icon="/icons/shield.svg" title="Protection" description="Bubble lining absorbs shocks and prevents breakage during transit." />
          <FeatureCard icon="/icons/branding.svg" title="Branding" description="Full-color printing, logos, and interior messaging to boost your brand." />
          <FeatureCard icon="/icons/eco.svg" title="Eco-friendly" description="Recyclable and sustainable materials for environmentally conscious brands." />
        </div>

        {/* Construction / Printing / Sustainability */}
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard title="High-Quality Construction" description={
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Shock-absorbing bubble lining</li>
              <li>Puncture and waterproof protection</li>
              <li>Thermal insulation for sensitive products</li>
            </ul>
          } />
          <FeatureCard title="Custom Branding & Printing" description={
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Full-color or spot-color printing</li>
              <li>Luxury or minimal design finishes</li>
              <li>Tear notches, gussets, and tamper-evident seals</li>
            </ul>
          } />
          <FeatureCard title="Sustainable & Eco-Friendly Options" description={
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Recyclable cardboard</li>
              <li>Paper-based bubble cushioning</li>
              <li>Reduced plastic content & sustainable inks</li>
            </ul>
          } />
        </div>

        {/* Materials */}
        <div className="bg-white p-6 rounded-lg shadow-md text-gray-700">
          <h3 className="text-2xl font-semibold mb-3">Materials & Specifications</h3>
          <p><span className="font-semibold">Outer Layer:</span> Polyethylene, Kraft Paper, or combination.</p>
          <p><span className="font-semibold">Bubble Lining:</span> Air-filled bubbles provide cushioning against shocks and impacts.</p>
          <p><span className="font-semibold">Special Features:</span> Thermal insulation, tamper-proof seals, eco-friendly options.</p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white p-6 rounded-lg shadow-md text-gray-700">
          <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>
          <div className="space-y-2">
            {faqData.map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-md overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition"
                >
                  <span className="font-semibold">{item.question}</span>
                  <span>{openIndex === idx ? '−' : '+'}</span>
                </button>
                {openIndex === idx && (
                  <div className="p-4 bg-white text-gray-700">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }: { icon?: string; title: string; description: string | JSX.Element }) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
      {icon && (
        <div className="mx-auto mb-4 w-12 h-12 relative">
          <Image src={icon} alt={title} fill className="object-contain" />
        </div>
      )}
      <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  )
}

function getFeatureIcon(feature: string): string {
  const iconMap: Record<string, string> = {
    'Fast Turnaround': 'clock',
    'Full Color Printing': 'paint-swatch',
    'Design Support': 'paint-palette',
    'Free Shipping': 'delivery',
  }
  return iconMap[feature] || 'clock'
}
