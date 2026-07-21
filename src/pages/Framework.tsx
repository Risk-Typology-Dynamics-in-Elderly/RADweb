import { useTranslation } from "react-i18next"

import { Separator } from "@/components/ui/separator"
import { PageHeader } from "@/components/layout/PageHeader"

const metaKeys = [
  { labelKey: "framework.posted", valueKey: "framework.postedValue" },
  { labelKey: "framework.author", valueKey: "framework.authorValue" },
  { labelKey: "framework.readTime", valueKey: "framework.readTimeValue" },
]

export function Framework() {
  const { t } = useTranslation()

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <PageHeader
        eyebrow={t("framework.eyebrow")}
        title={t("framework.title")}
        description={t("framework.description")}
      />

      <article className="mx-auto mt-12 max-w-3xl">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-muted-foreground">
          {metaKeys.map((m, i) => (
            <span key={m.labelKey} className="flex items-center gap-x-6">
              <span>
                <span className="font-medium text-foreground">
                  {t(m.labelKey)}:
                </span>{" "}
                {t(m.valueKey)}
              </span>
              {i < metaKeys.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="hidden h-3 sm:block"
                />
              )}
            </span>
          ))}
        </div>
        <Separator className="my-8" />

        <div className="space-y-6 text-[1.05rem] leading-relaxed text-muted-foreground">
          <p className="pt-4 italic">{t("framework.conclusion")}</p>

          <h2 className="pt-4 font-serif text-2xl font-medium text-foreground">
            1. {t("framework.title1")}
          </h2>
          <p>{t("framework.desc1")}</p>

          <h2 className="pt-4 font-serif text-2xl font-medium text-foreground">
            2. {t("framework.title2")}
          </h2>
          <p>{t("framework.desc2")}</p>

          <h2 className="pt-4 font-serif text-2xl font-medium text-foreground">
            3. {t("framework.title3")}
          </h2>
          <p>{t("framework.desc3")}</p>


        </div>
      </article>
    </div>
  )
}
