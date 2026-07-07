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
              Design meets engineering. Curiosity meets craft.
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

        <div className="mt-8 pt-8 border-t border-subtle dark:border-darkSubtle text-center">
          <p className="font-sans text-xs text-warmGray dark:text-darkWarmGray">
            Built with ♥ by Z + opencode
          </p>
        </div>
      </div>
    </footer>
  )
}
