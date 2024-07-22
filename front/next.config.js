const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: [],
    path: '/_next/image',
    loader: 'default',
  },
  async rewrites() {
    return [
      {
        source: '/products/:id',
        destination: '/product/:id', // 올바른 목적지 설정
      },
    ];
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/cart': { page: '/cart' },
      '/products': { page: '/products' },
      // 필요한 다른 경로들도 여기에 추가
    }
  },
};

module.exports = nextConfig;
