import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

import { PageHeader } from "@/components/layout/PageHeader"
import { Avatar, AvatarFallback} from "@/components/ui/avatar"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
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
    ?.toUpperCase() ?? ""
}

export function Team() {
  const { t } = useTranslation()
  const [selectedMember, setSelectedMember] = useState<string | null>(null)

  const openDetail = (key: string) => setSelectedMember(key)
  const closeDetail = () => setSelectedMember(null)

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <PageHeader
        eyebrow={t("team.eyebrow")}
        title={t("team.title")}
        description={t("team.description")}
      />


      <p className="mt-4 text-center text-sm italic text-muted-foreground">
        {t("team.click")}
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {members.map((m) => {
          const name = t(`${m}.name`)
          return (
            <Card
              key={m}
              className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
              onClick={() => openDetail(m)}
            >
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <Avatar className="h-14 w-14">
                    <AvatarFallback>{initials(name)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">{name}</CardTitle>
                  <CardDescription className="text-xs">
                    {t(`${m}.role`)}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          )
        })}
      </div>

      <Dialog open={!!selectedMember} onOpenChange={() => closeDetail()}>
  <DialogContent className="max-w-2xl">
    {selectedMember && (
      <>
        <DialogHeader>
          <DialogTitle>{t(`${selectedMember}.name`)}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <p className="text-sm font-medium text-muted-foreground">
            {t(`${selectedMember}.role`)}
          </p>
          <div className="space-y-2 text-sm leading-relaxed">
            <p>{t(`${selectedMember}.background`)}</p>
            <p>{t(`${selectedMember}.responsibility`)}</p>
          </div>
          <div className="mt-4 text-xs text-muted-foreground space-y-1">
            <p>{t(`${selectedMember}.email`)}</p>
            {t(`${selectedMember}.phone`) && <p>{t(`${selectedMember}.phone`)}</p>}
            <p>{t(`${selectedMember}.timezone`)}</p>
          </div>
        </div>
      </>
    )}
  </DialogContent>
</Dialog>
    </div>
  )
}