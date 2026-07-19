export default function Footer() {
  return (
    <footer className="border-t border-subtle dark:border-darkSubtle">
      <div className="w-full px-6 md:px-10 lg:px-16 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-xl font-semibold tracking-tight text-ink dark:text-darkInk">
              Z.
            </p>
            <p className="font-sans text-sm text-warmGray dark:text-darkWarmGray mt-1">
              © 2026 Zarin Solanki
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/zarin-solanki/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-warmGray dark:text-darkWarmGray hover:text-ink dark:hover:text-darkInk transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:zarinsolanki.work@gmail.com"
              className="font-sans text-sm text-warmGray dark:text-darkWarmGray hover:text-ink dark:hover:text-darkInk transition-colors"
            >
              Email
            </a>
            <a
              href="/resume.pdf"
              className="font-sans text-sm text-warmGray dark:text-darkWarmGray hover:text-ink dark:hover:text-darkInk transition-colors"
            >
              Resume
            </a>
          </div>
        </div>

        <div id="privacy-note" className="mt-8 pt-6 border-t border-subtle/50 dark:border-darkSubtle/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-sans text-xs text-warmGray/60 dark:text-darkWarmGray/60 max-w-md leading-relaxed">
            🔍 There are 10 secrets hidden on the homepage — find them all for a surprise.
            Any email shared via the Easter Egg Hunt is used only to add you to the Wall of Hunters and is never sold or shared.
          </p>
          <p className="font-sans text-xs text-warmGray/40 dark:text-darkWarmGray/40 shrink-0">
            Built with Next.js &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
