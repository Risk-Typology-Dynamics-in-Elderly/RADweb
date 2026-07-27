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
    "team.members.Gloria",
    "team.members.Ian",
    "team.members.Lucy",
    "team.members.Teddy",
    "team.members.Eason",
    "team.members.Erin",
    "team.members.Carlos",
]

function initials(name: string) {
  return name
    .replace(/\([^)]*\)/g, "")
    .trim()
    .split(" ")[0]?.[0]
    ?.toUpperCase() ??""
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
         {members.map((m) => {
          const name = t(`${m}.name`)
          return (
            <Card key={m}>
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <Avatar className="h-14 w-14">
                  <AvatarFallback>{initials(name)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{name}</CardTitle>
                  <CardDescription>{t(`${m}.role`)}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(`${m}.background`)}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t(`${m}.responsibility`)}
                </p>
                <div className="mt-3 text-xs text-muted-foreground">
                  <p>{t(`${m}.email`)}</p>
                  {t(`${m}.phone`) && <p>{t(`${m}.phone`)}</p>}
                  <p>{t(`${m}.timezone`)}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
