import { useTranslation } from "react-i18next"

import { PageHeader } from "@/components/layout/PageHeader"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type StatusId = "completed" | "inProgress" | "planned"

type BadgeVariant = "default" | "secondary" | "outline"

type Milestone = {
  date: string
  statusId: StatusId
  titleKey: string,
  descKey: string
}

const milestones: Milestone[] = [
  { date: "", statusId: "completed", titleKey: "progress.milestones.kickoff.title", descKey: "progress.milestones.kickoff.desc" },
  { date: "", statusId: "completed", titleKey: "progress.milestones.literature.title", descKey: "progress.milestones.literature.desc" },
  { date: "", statusId: "inProgress", titleKey: "progress.milestones.formulation.title", descKey: "progress.milestones.formulation.desc" },
  { date: "", statusId: "inProgress", titleKey: "progress.milestones.collection.title", descKey: "progress.milestones.collection.desc" },
  { date: "", statusId: "planned", titleKey: "progress.milestones.pilot.title", descKey: "progress.milestones.pilot.desc" },
  { date: "", statusId: "planned", titleKey: "progress.milestones.validation.title", descKey: "progress.milestones.validation.desc" },
  { date: "", statusId: "planned", titleKey: "progress.milestones.modeling.title", descKey: "progress.milestones.modeling.desc" },
  { date: "", statusId: "planned", titleKey: "progress.milestones.release.title", descKey: "progress.milestones.release.desc" },
  { date: "", statusId: "planned", titleKey: "progress.milestones.deployment.title", descKey: "progress.milestones.deployment.desc" },
]

const statusVariant: Record<StatusId, BadgeVariant> = {
  completed: "default",
  inProgress: "secondary",
  planned: "outline",
}

export function Progress() {
  const { t } = useTranslation()

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <PageHeader
        eyebrow={t("progress.eyebrow")}
        title={t("progress.title")}
        description={t("progress.description")}
      />

      <div className="mx-auto mt-14 max-w-3xl">
        <ol className="relative border-l border-border pl-8">
          {milestones.map((m) => (
            <li key={m.titleKey} className="mb-10 last:mb-0">
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-background bg-primary" />
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                  <time className="text-sm font-medium text-muted-foreground">
                    {m.date}
                  </time>
                  <Badge variant={statusVariant[m.statusId]}>
                    {t(`progress.status.${m.statusId}`)}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <h3 className="font-serif text-lg font-medium text-foreground">
                    {t(m.titleKey)}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {t(m.descKey)}
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
