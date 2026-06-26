import { useTranslation } from "react-i18next"

import {
  LANGUAGES,
  LANGUAGE_LABELS,
  type Language,
} from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function LanguageToggle({ className }: { className?: string }) {
  const { i18n } = useTranslation()
  const current = i18n.resolvedLanguage as Language

  return (
    <div
      className={cn(
        "flex items-center rounded-md border border-border text-xs",
        className
      )}
      role="group"
      aria-label={i18n.t("header.languageLabel") as string}
    >
      {LANGUAGES.map((lng) => {
        const active = lng === current
        return (
          <button
            key={lng}
            type="button"
            onClick={() => void i18n.changeLanguage(lng)}
            aria-pressed={active}
            className={cn(
              "px-2 py-1 transition-colors",
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {LANGUAGE_LABELS[lng]}
          </button>
        )
      })}
    </div>
  )
}
