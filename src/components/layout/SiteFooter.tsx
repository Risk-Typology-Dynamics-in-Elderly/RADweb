import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export function SiteFooter() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <img
            src="./rad.jpg"
            alt="RAD Research Group logo"
            className="h-8 mix-blend-multiply rounded"
          />
          <div className="leading-tight">
            <p className="font-serif text-sm font-semibold">
              {t("brand.footerName")}
            </p>
            <p className="text-xs text-muted-foreground">
              {t("brand.footerTagline")}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
          <Link to="/contact" className="hover:text-foreground">
            {t("footer.contact")}
          </Link>
          <span>
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </span>
        </div>
      </div>
    </footer>
  )
}
