module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination:
          'https://do-not-drink-beer-marianzburlea.vercel.app/api/:path*',
      },
    ]
  },
}
