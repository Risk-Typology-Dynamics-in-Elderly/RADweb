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
  stageHeader?: boolean,
}

const milestones: Milestone[] = [
    { date: "", statusId: "completed", titleKey: "progress.milestones.stage1.stageTitle", descKey: "", stageHeader: true },
    { date: "", statusId: "completed", titleKey: "progress.milestones.stage1.kickoff.title", descKey: "progress.milestones.stage1.kickoff.desc" },
    { date: "", statusId: "inProgress", titleKey: "progress.milestones.stage1.literature.title", descKey: "progress.milestones.stage1.literature.desc" },
    { date: "", statusId: "inProgress", titleKey: "progress.milestones.stage1.formulation.title", descKey: "progress.milestones.stage1.formulation.desc" },
    { date: "", statusId: "planned", titleKey: "progress.milestones.stage1.collection.title", descKey: "progress.milestones.stage1.collection.desc" },
    { date: "", statusId: "planned", titleKey: "progress.milestones.stage1.pilot.title", descKey: "progress.milestones.stage1.pilot.desc" },
    { date: "", statusId: "completed", titleKey: "progress.milestones.stage2.stageTitle", descKey: "", stageHeader: true },
    { date: "", statusId: "planned", titleKey: "progress.milestones.stage2.validation.title", descKey: "progress.milestones.stage2.validation.desc"},
    { date: "", statusId: "planned", titleKey: "progress.milestones.stage2.modeling.title", descKey: "progress.milestones.stage2.modeling.desc" },
    { date: "", statusId: "completed", titleKey: "progress.milestones.stage3.stageTitle", descKey: "", stageHeader: true },
    { date: "", statusId: "planned", titleKey: "progress.milestones.stage3.release.title", descKey: "progress.milestones.stage3.release.desc" ,},
    { date: "", statusId: "planned", titleKey: "progress.milestones.stage3.deployment.title", descKey: "progress.milestones.stage3.deployment.desc" },
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
          {milestones.map((m) => {
            if (m.stageHeader) {
              return (
                  <li key={m.titleKey} className="mb-6 mt-12 first:mt-0">
                    <h2 className="font-serif text-xl font-medium text-foreground">
                      {t(m.titleKey)}
                    </h2>
                  </li>
              )
            }
            return (
                <li key={m.titleKey} className="mb-10 last:mb-0">
                  <span
                      className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-background bg-primary"/>
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
            )
          })}
        </ol>
      </div>
    </div>
  )
}
