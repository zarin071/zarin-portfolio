/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/zarin-portfolio",
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: "/zarin-portfolio",
  },
}

module.exports = nextConfig
