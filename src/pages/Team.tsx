import { useTranslation } from "react-i18next"

import { PageHeader } from "@/components/layout/PageHeader"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const members = [
  { name: "EM" },
  { name: "EM" },
  { name: "EM" },
  { name: "EM" },
  { name: "EM" },
]

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

export function Team() {
  const { t } = useTranslation()

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <PageHeader
        eyebrow={t("team.eyebrow")}
        title={t("team.title")}
        description={t("team.description")}
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {members.map((m, i) => (
          <Card key={`${m.name}-${i}`}>
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <Avatar className="h-14 w-14">
                <AvatarFallback>{initials(m.name)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{m.name}</CardTitle>
                <CardDescription>{t("common.placeholder")}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("common.placeholder")}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
