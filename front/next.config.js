const nextConfig = {
  images: {
    domains: [],
    path: '/_next/image',
    loader: 'default'
  },
  async rewrites() {
    return [
      {
        source: '/products/:id',
        destination: '/product/:id', // 올바른 목적지 설정
      },
    ];
  }
};

module.exports = {
  output: 'standalone',
};
