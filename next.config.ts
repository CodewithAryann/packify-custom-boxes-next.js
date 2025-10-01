/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['upload.wikimedia.org', 'img.icons8.com'],
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig