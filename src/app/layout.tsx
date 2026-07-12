import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export const metadata: Metadata = {
  title: "Zarin Solanki — UX Researcher & AI Product Designer",
  description:
    "Design-engineer hybrid with 10+ years of experience spanning UX design, front-end development, and AI product design. Currently at bp.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
        <link rel="stylesheet" href={`${base}/eggHunt.css`} />
      </head>
      <body className="min-h-screen bg-cream dark:bg-darkBg text-ink dark:text-darkInk font-sans antialiased transition-colors duration-300">
        {children}
        <Script id="egg-hunt-config" strategy="beforeInteractive">
          {`window.EGG_HUNT_CONFIG={emailjsServiceId:"${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? ""}",emailjsTemplateId:"${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ""}",emailjsPublicKey:"${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""}"};`}
        </Script>
        <Script src={`${base}/eggHunt.js`} strategy="afterInteractive" />
      </body>
    </html>
  )
}
