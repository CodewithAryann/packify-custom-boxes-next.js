// lib/products-data.ts
export interface ProductVariant {
  name: string
  image: string
  description?: string
}

export interface Product {
  title: string
  slug: string
  metaDescription: string
  keywords: string[]
  mainImage: string
  hoverImage: string
  description: string
  features: string[]
  overviewTitle: string
  overviewContent: string
  overviewImage: string
  overviewHoverImage: string
  variants?: ProductVariant[]
}

export const productsData: Record<string, Product> = {
  'tuck-boxes': {
    title: 'Tuck Boxes',
    slug: 'tuck-boxes',
    metaDescription: 'Get premium custom tuck boxes from PackifyCustomBoxes. Perfect for retail, product packaging, and gifts. Fully customizable, eco-friendly, and high-quality. Free US shipping and worldwide delivery.',
    keywords: [
      'custom tuck boxes',
      'tuck top boxes',
      'retail packaging',
      'gift boxes',
      'product packaging boxes',
      'printed tuck boxes',
      'eco-friendly packaging',
      'PackifyCustomBoxes',
      'personalized tuck boxes',
      'wholesale tuck boxes'
    ],
    mainImage: '/images/WhatsApp_Image_2025-08-05_at_3.24.40_AM-removebg-preview.webp',
    hoverImage: '/images/WhatsApp_Image_2025-08-05_at_3.24.39_AM-removebg-preview.webp',
    description: 'Compact and sturdy, small tuck boxes are ideal for packaging lightweight items like cosmetics, jewelry, or gifts. Their easy-to-close tuck flap ensures secure storage with a neat, professional look.',
    features: [
      'Fast Turnaround',
      'Full Color Printing',
      'Design Support',
      'Free Shipping'
    ],
    overviewTitle: 'Tuck Box Packaging for Stability, Strength, And Usability',
    overviewContent: `Picture-perfect, insta-savvy tuck boxes are flawless for displaying or shipping cosmetics, small electrical items, medicines, jewelry, and more. They are perfect for any product you want to pack with care, grace, and awesomeness. Apart from attractiveness, they offer many other benefits. Here are some key features of our tuck packaging boxes.

• Durable Cardboard, rigid paperboard, or kraft material ensuring protection and security.
• Highly printable to add your logo and other branding elements easily.
• Style variations such as tuck-end, tuck-top, and auto-lock boxes to fit your needs.
• Custom sizes to offer a perfect fit for your products.
• Sustainable materials and inks for a positive environmental impact.

These boxes are designed to give you a competitive advantage in the market. Plus, they are cost-effective due to our bulk discounts and wholesale prices.`,
    overviewImage: '/images/Tuck-boxes.webp',
    overviewHoverImage: '/images/Tuck-boxes-1.webp',
    variants: [
      {
        name: 'Tuck Top Boxes',
        image: '/images/Tuck Top Box.webp',
      },
      {
        name: 'Auto Lock Boxes',
        image: '/images/Auto Lock Bottom Box.webp',
      },
      {
        name: 'Tuck Mailer Boxes',
        image: '/images/Tuck Mailer Box.webp',
      },
      {
        name: 'Straight Tuck End Boxes',
        image: '/images/Straight end tuck box.webp',
      },
      {
        name: 'Kraft Tuck Top Boxes',
        image: '/images/Kraft TUCK BOX.webp',
      },
      {
        name: 'Snap Lock Bottom Boxes',
        image: '/images/Snap lock tuck box.webp',
      },
      {
        name: 'Double Wall Tuck Top Boxes',
        image: '/images/Double Wall tuck Box.webp',
      },
      {
        name: 'CBD Tuck Boxes',
        image: '/images/customized-cbd-tuck-boxes.webp',
      },
      {
        name: 'Roll End Tuck Boxes',
        image: '/images/Roll End Tuck box.webp',
      },
      {
        name: 'Reverse Tuck End Boxes',
        image: '/images/Reverse Tuck End Box.webp',
      },
      {
        name: '1-2-3 Bottom Boxes',
        image: '/images/1-2-3 Bottom Box.webp',
      },
    ]
  },

  'dispenser-boxes': {
    title: 'Dispenser Boxes',
    slug: 'dispenser-boxes',
    metaDescription: 'Order premium custom dispenser boxes from PackifyCustomBoxes. Perfect for retail products, cosmetics, and small items. Fully customizable, durable, and eco-friendly. Free US shipping and worldwide delivery.',
    keywords: [
      'custom dispenser boxes',
      'product dispenser packaging',
      'retail packaging',
      'cosmetic dispenser boxes',
      'printed dispenser boxes',
      'eco-friendly packaging',
      'PackifyCustomBoxes',
      'personalized dispenser boxes',
      'wholesale dispenser boxes'
    ],
    mainImage: '/images/Dispenser-1.webp',
    hoverImage: '/images/Dispenser-2.webp',
    description: 'Custom dispenser boxes are specially designed cardboard packages that provide convenient, controlled access to their contents through easy-to-tear perforated openings, often called "flip-out dispenser" openings.',
    features: [
      'Fast Turnaround',
      'Full Color Printing',
      'Design Support',
      'Free Shipping'
    ],
    overviewTitle: 'Product Overview',
    overviewContent: `Styles are constantly evolving, and the packaging industry is progressing in this direction. A fresh appearance for display packaging is the custom dispenser boxes. The product is not kept completely open with only a base to support it; instead, it is packaged in a box with an outlet that allows buyers easy access. The packaging in this design, on the whole, makes people pay attention or want to get their hands on it.

Dispenser boxes are used for a wide range of products, including candy, hygiene products, and other small items. Images of the visual look can be found on the Half Price Packaging Website. The professionals of HPP only can we change the colors and sizes of the box, but we can also change the dispensing techniques.

You can design this box in any size, shape, and style at wholesale prices as per your preferences. We provide all of the options that the consumer requests.`,
    overviewImage: '/images/CBD Mailer Box.webp',
    overviewHoverImage: '/images/Pink Mailer Box.webp',
  },

  'mailer-boxes': {
    title: 'Mailer Boxes',
    slug: 'mailer-boxes',
    metaDescription: 'Premium custom mailer boxes for e-commerce and subscription products. Designed for durability and brand impact. Free US shipping and worldwide delivery.',
    keywords: [
      'custom mailer boxes',
      'e-commerce packaging',
      'subscription boxes',
      'shipping boxes',
      'branded mailer boxes'
    ],
    mainImage: '/images/WhatsApp_Image_2025-08-05_at_3.48.16_AM-removebg-preview.webp',
    hoverImage: '/images/WhatsApp_Image_2025-08-05_at_3.48.17_AM-removebg-preview.webp',
    description: 'Offer secure, stylish packaging for e-commerce and subscription products. Designed for durability and brand impact, they enhance presentation and protect contents during transit.',
    features: [
      'Fast Turnaround',
      'Full Color Printing',
      'Design Support',
      'Free Shipping'
    ],
    overviewTitle: 'Professional E-Commerce Packaging',
    overviewContent: 'Our mailer boxes are designed specifically for e-commerce businesses looking to create memorable unboxing experiences. Made from durable corrugated cardboard, they protect your products during shipping while showcasing your brand beautifully.',
    overviewImage: '/images/WhatsApp Image 2025-08-05 at 11.11.00 PM.webp',
    overviewHoverImage: '/images/WhatsApp Image 2025-08-05 at 11.14.19 PM.webp',
  },

  'rigid-boxes': {
    title: 'Rigid Boxes',
    slug: 'rigid-boxes',
    metaDescription: 'Premium rigid boxes ideal for luxury products. High-end finish and solid structure for exceptional unboxing experience.',
    keywords: [
      'custom rigid boxes',
      'luxury packaging',
      'premium boxes',
      'gift boxes',
      'high-end packaging'
    ],
    mainImage: '/images/WhatsApp_Image_2025-08-05_at_3.57.58_AM-removebg-preview.webp',
    hoverImage: '/images/WhatsApp_Image_2025-08-05_at_3.57.58_AM__1_-removebg-preview.webp',
    description: 'Premium, sturdy packaging solutions ideal for luxury products. With a high-end finish and solid structure, they deliver an exceptional unboxing experience and strong brand presence.',
    features: [
      'Fast Turnaround',
      'Full Color Printing',
      'Design Support',
      'Free Shipping'
    ],
    overviewTitle: 'Luxury Rigid Box Packaging',
    overviewContent: 'Our rigid boxes represent the pinnacle of luxury packaging. Constructed from thick, high-quality paperboard, these boxes maintain their shape and provide superior product protection while delivering an unforgettable premium unboxing experience.',
    overviewImage: '/images/WhatsApp Image 2025-08-05 at 11.11.34 PM.webp',
    overviewHoverImage: '/images/WhatsApp Image 2025-08-05 at 11.11.34 PM (1).webp',
  },

  'cigarette-boxes': {
    title: 'Cigarette Boxes',
    slug: 'cigarette-boxes',
    metaDescription: 'Stylish and protective cigarette boxes with customizable finishes and secure closures.',
    keywords: [
      'custom cigarette boxes',
      'tobacco packaging',
      'printed cigarette boxes'
    ],
    mainImage: '/images/Cigarette-1.webp',
    hoverImage: '/images/Cigarette-2.webp',
    description: 'Stylish and protective, cigarette boxes are designed to preserve freshness and enhance brand appeal with customizable finishes, sizes, and secure closures.',
    features: [
      'Fast Turnaround',
      'Full Color Printing',
      'Design Support',
      'Free Shipping'
    ],
    overviewTitle: 'Premium Cigarette Packaging',
    overviewContent: 'Our cigarette boxes combine style with functionality, offering superior protection while maintaining product freshness. Fully customizable to meet regulatory requirements and brand standards.',
    overviewImage: '/images/Tuck-boxes.webp',
    overviewHoverImage: '/images/Tuck-boxes-1.webp',
  },

  'burger-boxes': {
    title: 'Burger Boxes',
    slug: 'burger-boxes',
    metaDescription: 'Custom burger boxes for dine-in, takeout, or delivery. Durable, insulated, with custom branding options.',
    keywords: [
      'custom burger boxes',
      'food packaging',
      'takeout boxes',
      'restaurant packaging'
    ],
    mainImage: '/images/WhatsApp_Image_2025-08-05_at_4.12.26_AM-removebg-preview.webp',
    hoverImage: '/images/WhatsApp_Image_2025-08-05_at_4.12.27_AM-removebg-preview.webp',
    description: 'Designed to keep your burgers fresh, secure, and visually appealing. Perfect for dine-in, takeout, or delivery, they offer durability, insulation, and custom branding options.',
    features: [
      'Fast Turnaround',
      'Full Color Printing',
      'Design Support',
      'Free Shipping'
    ],
    overviewTitle: 'Professional Food Service Packaging',
    overviewContent: 'Our burger boxes are specifically engineered for food service, keeping meals hot and fresh while preventing grease leaks and maintaining structural integrity during delivery.',
    overviewImage: '/images/CBD Mailer Box.webp',
    overviewHoverImage: '/images/Pink Mailer Box.webp',
  },

  'magnetic-closure': {
    title: 'Magnetic Closure Boxes',
    slug: 'magnetic-closure',
    metaDescription: 'Premium magnetic closure boxes for luxury products and gifts. Elegant design with secure magnetic flap.',
    keywords: [
      'magnetic closure boxes',
      'luxury gift boxes',
      'premium packaging'
    ],
    mainImage: '/images/WhatsApp_Image_2025-08-05_at_3.37.56_AM-removebg-preview.webp',
    hoverImage: '/images/WhatsApp_Image_2025-08-05_at_3.37.56_AM__1_-removebg-preview.webp',
    description: 'Premium unboxing experience with their sleek design and secure magnetic flap. Ideal for luxury products and gifts, they combine elegance with functionality.',
    features: [
      'Fast Turnaround',
      'Full Color Printing',
      'Design Support',
      'Free Shipping'
    ],
    overviewTitle: 'Luxury Magnetic Closure Packaging',
    overviewContent: 'Experience the perfect blend of elegance and functionality with our magnetic closure boxes. The secure magnetic mechanism provides a satisfying close while maintaining a sleek, premium appearance.',
    overviewImage: '/images/Tuck-boxes.webp',
    overviewHoverImage: '/images/Tuck-boxes-1.webp',
  },

  'cosmetic-boxes': {
    title: 'Cosmetic Boxes',
    slug: 'cosmetic-boxes',
    metaDescription: 'Custom cosmetic boxes for skincare and beauty products. Sleek, durable, and fully customizable.',
    keywords: [
      'custom cosmetic boxes',
      'beauty packaging',
      'skincare boxes',
      'makeup packaging'
    ],
    mainImage: '/images/WhatsApp_Image_2025-08-05_at_3.43.00_AM-removebg-preview.webp',
    hoverImage: '/images/WhatsApp_Image_2025-08-05_at_3.43.00_AM__1_-removebg-preview.webp',
    description: 'Enhance your brand\'s image while securely packaging skincare and beauty products. Sleek, durable, and fully customizable, they\'re perfect for both retail display and gifting.',
    features: [
      'Fast Turnaround',
      'Full Color Printing',
      'Design Support',
      'Free Shipping'
    ],
    overviewTitle: 'Professional Cosmetic Packaging',
    overviewContent: 'Our cosmetic boxes are designed to protect delicate beauty products while showcasing them beautifully. Perfect for skincare, makeup, and beauty accessories with endless customization options.',
    overviewImage: '/images/WhatsApp Image 2025-08-05 at 11.11.34 PM.webp',
    overviewHoverImage: '/images/WhatsApp Image 2025-08-05 at 11.11.34 PM (1).webp',
  },
}