import { productsData } from '@/lib/products-data'

export async function generateStaticParams() {
  const params: { slug: string; variant: string }[] = []
  
  Object.keys(productsData).forEach((slug) => {
    const product = productsData[slug]
    if (product.variants) {
      product.variants.forEach((variant) => {
        params.push({
          slug: slug,
          variant: variant.name.toLowerCase().replace(/\s+/g, '-')
        })
      })
    }
  })
  
  return params
}

export default function ProductVariantLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return <>{children}</>
}