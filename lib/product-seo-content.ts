// lib/product-seo-content.ts

export const productSeoContent: Record<string, {
  h1: string
  h2: string
  description: string
  whyChoose: {
    title: string
    items: string[]
  }
  industries: {
    title: string
    items: string[]
  }
}> = {
  'mailer-boxes': {
    h1: 'Custom Mailer Boxes',
    h2: 'Premium Mailer Boxes for Secure Shipping',
    description: 'Our custom mailer boxes are designed for strength, protection, and branding. Made from high-quality corrugated and kraft materials, these boxes ensure safe delivery while providing a premium unboxing experience.',
    whyChoose: {
      title: 'Why Choose Our Mailer Boxes',
      items: [
        'Strong corrugated material',
        'Eco-friendly and recyclable',
        'Custom sizes and printing',
        'No minimum order quantity',
        'Fast production and delivery'
      ]
    },
    industries: {
      title: 'Industries We Serve',
      items: [
        'E-commerce brands',
        'Cosmetics & skincare',
        'Clothing & apparel',
        'Electronics',
        'Subscription boxes'
      ]
    }
  },
  'tuck-boxes': {
    h1: 'Custom Tuck Boxes',
    h2: 'Versatile Tuck End Boxes for Retail Packaging',
    description: 'Our custom tuck boxes feature a convenient tuck-in closure design that provides secure product protection while maintaining easy access. Perfect for retail displays, these boxes combine functionality with eye-catching branding opportunities.',
    whyChoose: {
      title: 'Why Choose Our Tuck Boxes',
      items: [
        'Easy-open tuck closure design',
        'Durable paperboard construction',
        'Full-color custom printing',
        'Multiple size configurations',
        'Cost-effective packaging solution'
      ]
    },
    industries: {
      title: 'Perfect For',
      items: [
        'Pharmaceutical products',
        'Food and snacks',
        'Cosmetic items',
        'Small electronics',
        'Toy packaging'
      ]
    }
  },
  'rigid-boxes': {
    h1: 'Luxury Rigid Boxes',
    h2: 'Premium Rigid Boxes for High-End Products',
    description: 'Elevate your brand with our luxury rigid boxes. Crafted with thick chipboard and premium finishing options, these high-end packaging solutions create an unforgettable unboxing experience that reflects your product\'s quality.',
    whyChoose: {
      title: 'Why Choose Our Rigid Boxes',
      items: [
        'Premium thick chipboard construction',
        'Magnetic closure and ribbon options',
        'Luxurious finishing touches',
        'Perfect structural integrity',
        'Fully customizable design'
      ]
    },
    industries: {
      title: 'Ideal For',
      items: [
        'Luxury cosmetics',
        'High-end jewelry',
        'Premium electronics',
        'Designer fashion',
        'Corporate gifts'
      ]
    }
  },
  'dispenser-boxes': {
    h1: 'Custom Dispenser Boxes',
    h2: 'Convenient Dispenser Boxes for Easy Product Access',
    description: 'Our custom dispenser boxes are designed for convenience and functionality. Featuring innovative dispensing mechanisms, these boxes make product access effortless while maintaining organized storage and attractive shelf presentation.',
    whyChoose: {
      title: 'Why Choose Our Dispenser Boxes',
      items: [
        'Easy dispensing mechanism',
        'Organized product storage',
        'Retail-ready display design',
        'Reduces product waste',
        'Custom branding options'
      ]
    },
    industries: {
      title: 'Best Used For',
      items: [
        'Tissue and wipes',
        'Tea bags and sachets',
        'Small packaged goods',
        'Retail countertop displays',
        'Food service products'
      ]
    }
  },
  'cigarette-boxes': {
    h1: 'Custom Cigarette Boxes',
    h2: 'Premium Cigarette Packaging with Custom Designs',
    description: 'Our custom cigarette boxes offer superior protection and branding for tobacco products. Manufactured to industry standards with high-quality materials, these boxes ensure product freshness while delivering impactful shelf presence.',
    whyChoose: {
      title: 'Why Choose Our Cigarette Boxes',
      items: [
        'Industry-standard dimensions',
        'Moisture-resistant materials',
        'High-quality offset printing',
        'Foil stamping available',
        'Tamper-evident features'
      ]
    },
    industries: {
      title: 'Applications',
      items: [
        'Tobacco products',
        'Herbal cigarettes',
        'Vape cartridges',
        'Rolling papers',
        'Specialty tobacco items'
      ]
    }
  },
  'burger-boxes': {
    h1: 'Custom Burger Boxes',
    h2: 'Food-Safe Burger Boxes for Restaurants & Food Trucks',
    description: 'Keep your burgers fresh and presentation perfect with our custom burger boxes. Made from food-grade materials with grease-resistant coating, these boxes maintain quality during delivery while showcasing your brand to hungry customers.',
    whyChoose: {
      title: 'Why Choose Our Burger Boxes',
      items: [
        'Food-grade safe materials',
        'Grease and moisture resistant',
        'Keeps food hot and fresh',
        'Custom printed branding',
        'Eco-friendly options available'
      ]
    },
    industries: {
      title: 'Perfect For',
      items: [
        'Fast food restaurants',
        'Food trucks',
        'Cafes and diners',
        'Catering services',
        'Ghost kitchens'
      ]
    }
  },
  'magnetic-closure': {
    h1: 'Magnetic Closure Boxes',
    h2: 'Elegant Magnetic Closure Boxes for Premium Packaging',
    description: 'Experience luxury packaging with our magnetic closure boxes. Featuring strong embedded magnets for a satisfying closure, these boxes deliver a premium unboxing experience that enhances perceived product value and brand prestige.',
    whyChoose: {
      title: 'Why Choose Magnetic Closure Boxes',
      items: [
        'Premium magnetic closure system',
        'Reusable and durable design',
        'Luxury unboxing experience',
        'High-end finishing options',
        'Perfect for gift packaging'
      ]
    },
    industries: {
      title: 'Ideal For',
      items: [
        'Luxury jewelry',
        'High-end cosmetics',
        'Premium tech accessories',
        'Designer watches',
        'Exclusive gift sets'
      ]
    }
  },
  'cosmetic-boxes': {
    h1: 'Custom Cosmetic Boxes',
    h2: 'Beautiful Cosmetic Packaging for Beauty Brands',
    description: 'Showcase your beauty products with our custom cosmetic boxes. Designed specifically for makeup, skincare, and beauty items, these boxes combine protective packaging with stunning visual appeal to attract customers and build brand loyalty.',
    whyChoose: {
      title: 'Why Choose Our Cosmetic Boxes',
      items: [
        'Beauty-focused design options',
        'UV coating and lamination',
        'Window cutout options',
        'Sustainable material choices',
        'Perfect for retail shelves'
      ]
    },
    industries: {
      title: 'Product Categories',
      items: [
        'Makeup and cosmetics',
        'Skincare products',
        'Perfumes and fragrances',
        'Hair care items',
        'Beauty tools and accessories'
      ]
    }
  }
}