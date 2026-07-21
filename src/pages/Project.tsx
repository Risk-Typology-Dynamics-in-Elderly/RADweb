import { useTranslation } from "react-i18next"

import { PageHeader } from "@/components/layout/PageHeader"
import { Prose } from "@/components/layout/Prose"

export function Project() {
  const { t } = useTranslation()

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <PageHeader
        eyebrow={t("project.eyebrow")}
        title={t("project.title")}
        description={t("project.description")}
      />

      <Prose className="mt-14">
        <h2 className="font-serif text-2xl font-medium text-foreground">
          {t("project.background")}
        </h2>
        <p>{t("project.backgroundDesc")}</p>


        <h2 className="pt-4 font-serif text-2xl font-medium text-foreground">
          {t("project.aim")}
        </h2>
        <p>{t("project.aimDesc")}</p>

      </Prose>
    </div>
  )
}
