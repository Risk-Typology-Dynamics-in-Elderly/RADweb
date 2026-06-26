import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { useTranslation } from "react-i18next"

import { cn } from "@/lib/utils"
import { NAV_ITEMS } from "@/lib/nav"
import { Button } from "@/components/ui/button"
import { LanguageToggle } from "@/components/LanguageToggle"

export function SiteHeader() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 ml-50 mr-20 items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-1"
          onClick={() => setOpen(false)}
        >
          <img
            src="./rad.jpg"
            alt="RAD Research Group logo"
            className="h-9 mix-blend-multiply rounded"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-base font-semibold text-foreground">
              {t("brand.name")}
            </span>
            <span className="text-[11px] text-muted-foreground">
              {t("brand.tagline")}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:ml-auto md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              {t(item.labelKey)}
            </NavLink>
          ))}
          <LanguageToggle className="ml-2" />
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={t("header.toggleMenu")}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )
                }
              >
                {t(item.labelKey)}
              </NavLink>
            ))}
            <div className="px-3 py-2">
              <LanguageToggle />
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
