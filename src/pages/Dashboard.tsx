import { useTranslation } from "react-i18next"

import { PageHeader } from "@/components/layout/PageHeader"

export function Dashboard() {
  const { t } = useTranslation()

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <PageHeader
        eyebrow={t("dashboard.eyebrow")}
        title={t("dashboard.title")}
        description={t("dashboard.description")}
      />

      <div className="mt-16 flex min-h-[40vh] items-center justify-center">
        <div className="flex h-48 w-full max-w-md flex-col items-center justify-center rounded-lg border border-dashed border-border bg-muted/40 text-center">
          <p className="font-serif text-lg text-muted-foreground">
            {t("dashboard.blankTitle")}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {t("dashboard.blankBody")}
          </p>
        </div>
      </div>
    </div>
  )
}
