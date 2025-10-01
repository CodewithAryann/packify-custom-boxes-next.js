'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-orange-500 text-white px-6 py-10 rounded-t-[2rem]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Social */}
        <div>
          <h1 className="text-2xl font-bold mb-2">Packify</h1>
          <h2 className="text-lg font-semibold mb-4">CUSTOM BOXES</h2>
          <div className="flex gap-4 text-xl justify-center">
            <a 
              href="https://www.instagram.com/packifycustomboxes?utm_source=qr&igsh=YjNzdWhtZWl4ZzVu" 
              aria-label="Instagram"
              className="hover:text-gray-200 transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gray-200 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a 
              href="https://wa.me/+12013050858?text=Hi%2C%20I'm%20interested%20in%20custom%20boxes%20and%20would%20like%20to%20know%20more." 
              aria-label="WhatsApp"
              className="hover:text-gray-200 transition"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li><Link href="#type" className="hover:underline">Products</Link></li>
            <li><Link href="#about" className="hover:underline">About</Link></li>
            <li><Link href="#quote" className="hover:underline">Contact</Link></li>
            <li><Link href="/refund-returns" className="hover:underline">Refund and Returns</Link></li>
            <li><Link href="/shipping-policy" className="hover:underline">Shipping Policy</Link></li>
            <li><Link href="/reviews" className="hover:underline">Reviews</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <ul className="space-y-2">
            <li><i className="fas fa-phone mr-2"></i>+1(201)3050858</li>
            <li><i className="fas fa-envelope mr-2"></i>packifycustomboxes@gmail.com</li>
            <li><i className="fas fa-map-marker-alt mr-2"></i>30 N Gould St Ste N, Sheridan, WY 82801 USA</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Help</h3>
          <ul className="space-y-2">
            <li><Link href="/how-to-order" className="hover:underline">How to Order</Link></li>
            <li><Link href="#faqs" className="hover:underline">FAQ</Link></li>
            <li><Link href="/dieline-templates" className="hover:underline">Dieline Templates</Link></li>
            <li><Link href="/artwork-guidelines" className="hover:underline">Artwork Guidelines</Link></li>
            <li><Link href="/how-to-measure" className="hover:underline">How to Measure a Box</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>
      </div>

      {/* Payment and Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-white/30 pt-6 text-center">
        <h4 className="font-semibold text-lg mb-2">Payment Methods</h4>
        <p className="mb-3">Our website is compatible with many popular payment methods. SSL 100% Secure Transactions.</p>
        <div className="flex justify-center gap-4 mb-4">
          <Image src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" width={32} height={32} />
          <Image src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" width={32} height={32} />
          <Image src="https://img.icons8.com/color/48/000000/paypal.png" alt="Paypal" width={32} height={32} />
          <Image src="https://img.icons8.com/color/48/000000/amex.png" alt="American Express" width={32} height={32} />
          <Image src="https://img.icons8.com/color/48/000000/discover.png" alt="Discover" width={32} height={32} />
        </div>
        <div className="flex flex-col md:flex-row justify-between text-sm text-white/90 px-4">
          <p>Copyright © 2025 PackifyCustomBoxes. All Rights Reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="/terms" className="hover:underline">Terms and Conditions</Link>
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}