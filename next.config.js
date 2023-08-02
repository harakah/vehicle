const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/vehicle/carfax',
        destination: '/',
        permanent: true
      }
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/generate',
        destination: '/api/mailer-background',
      },
      {
        source: '/api/tests',
        destination: '/api/test-background',
      }
    ]
  },
  target: 'serverless'
};

module.exports = withPlugins(
  [
    [
      withOptimizedImages,
      {
        mozjpeg: {
          quality: 90,
        },
        webp: {
          preset: 'default',
          quality: 90,
        },
      },
    ],
    withFonts,
  ],
  nextConfig
);
