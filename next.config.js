/** @type {import('next').NextConfig} */
const isGHPages = process.env.GITHUB_PAGES === "true"

const nextConfig = {
  ...(isGHPages && {
    output: "export",
    basePath: "/zarin-portfolio",
    trailingSlash: true,
  }),
  images: { unoptimized: true },
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGHPages ? "/zarin-portfolio" : "",
  },
}

module.exports = nextConfig
