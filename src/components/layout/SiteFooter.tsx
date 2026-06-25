import { Link } from "react-router-dom"

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <img
            src="./radicon.png"
            alt="RAD Research Group logo"
            className="h-8 w-8 rounded"
          />
          <div className="leading-tight">
            <p className="font-serif text-sm font-semibold">
              Risk and Aging Dynamics Research Group
            </p>
            <p className="text-xs text-muted-foreground">
              RAD — Risk and Aging Dynamics
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
          <Link to="/contact" className="hover:text-foreground">
            Contact
          </Link>
          <span>
            &copy; {new Date().getFullYear()} RAD Research Group. All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
