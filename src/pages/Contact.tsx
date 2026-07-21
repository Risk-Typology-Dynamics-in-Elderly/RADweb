import { Mail, MapPin, Globe } from "lucide-react"
import { useTranslation } from "react-i18next"

import { PageHeader } from "@/components/layout/PageHeader"
import { Separator } from "@/components/ui/separator"

type ChannelKey = "email" | "address" | "online"

const channelConfig: {
  key: ChannelKey
  icon: typeof Mail
  href?: string
}[] = [
  {
    key: "email",
    icon: Mail,
    href: "mailto:ianyiwen.zhu@mail.utoronto.ca",
  },
  {
    key: "address",
    icon: MapPin,
  },
  {
    key: "online",
    icon: Globe,
  },
]

export function Contact() {
  const { t } = useTranslation()

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <PageHeader
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
        description={t("contact.description")}
      />

      <div className="mx-auto mt-14 max-w-3xl space-y-6 text-[1.05rem] leading-relaxed text-muted-foreground">
        <p>{t("common.placeholder")}</p>
      </div>

      <Separator className="mx-auto mt-10 max-w-3xl" />

      <div className="mx-auto mt-10 max-w-3xl space-y-8">
        {channelConfig.map(({ key, icon: Icon, href }) => {
          const label = t(`contact.channels.${key}`)
          const value =
            key === "address" ? t("contact.addressValue") : t("common.placeholder")
          return (
            <div key={key} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-muted text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">{label}</p>
                {href ? (
                  <a
                    href={href}
                    className="block whitespace-pre-line text-[1.05rem] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="whitespace-pre-line text-[1.05rem] text-muted-foreground">
                    {value}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
