/** @type {import('next').NextConfig} */
const isGHPages = process.env.GITHUB_PAGES === "true"
const isStaging = process.env.STAGING === "true"

const basePath = isStaging ? "/zarin-portfolio/staging" : "/zarin-portfolio"

const nextConfig = {
  ...(isGHPages && {
    output: "export",
    basePath,
    trailingSlash: true,
  }),
  images: { unoptimized: true },
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGHPages ? basePath : "",
  },
}

module.exports = nextConfig
