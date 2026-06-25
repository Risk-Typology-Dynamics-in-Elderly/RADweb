import { PageHeader } from "@/components/layout/PageHeader"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const milestones = [
  {
    date: "2026-01",
    status: "Completed",
    title: "Project kickoff",
    description:
      "[Placeholder] The RAD Research Group was established and the project scope defined.",
  },
  {
    date: "2026-03",
    status: "Completed",
    title: "Literature review",
    description:
      "[Placeholder] Completed a systematic review of risk and aging research.",
  },
  {
    date: "2026-06",
    status: "In progress",
    title: "Framework formulation",
    description:
      "[Placeholder] Developing the conceptual framework that guides our empirical work.",
  },
  {
    date: "2026-09",
    status: "Planned",
    title: "Data collection",
    description:
      "[Placeholder] Begin collecting data for the first analysis wave.",
  },
  {
    date: "2026-12",
    status: "Planned",
    title: "Dashboard release",
    description:
      "[Placeholder] Release the first public version of the analysis dashboard.",
  },
]

function statusVariant(status: string) {
  if (status === "Completed") return "default" as const
  if (status === "In progress") return "secondary" as const
  return "outline" as const
}

export function Progress() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <PageHeader
        eyebrow="Progress"
        title="What the team has done"
        description="A timeline of milestones and activities accomplished by the RAD Research Group."
      />

      <div className="mx-auto mt-14 max-w-3xl">
        <ol className="relative border-l border-border pl-8">
          {milestones.map((m) => (
            <li key={m.title} className="mb-10 last:mb-0">
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-background bg-primary" />
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                  <time className="text-sm font-medium text-muted-foreground">
                    {m.date}
                  </time>
                  <Badge variant={statusVariant(m.status)}>{m.status}</Badge>
                </CardHeader>
                <CardContent>
                  <h3 className="font-serif text-lg font-medium text-foreground">
                    {m.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {m.description}
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
