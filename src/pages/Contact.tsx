import { Mail, MapPin, Globe } from "lucide-react"

import { PageHeader } from "@/components/layout/PageHeader"
import { Separator } from "@/components/ui/separator"

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@[placeholder]",
    href: "mailto:contact@[placeholder]",
  },
  {
    icon: MapPin,
    label: "Address",
    value:
      "[Placeholder]\nRisk and Aging Dynamics Research Group",
  },
  {
    icon: Globe,
    label: "Online",
    value: "[Placeholder]",
  },
]

export function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Reach out to the RAD Research Group with questions, ideas, or collaboration inquiries."
      />

      <div className="mx-auto mt-14 max-w-3xl space-y-6 text-[1.05rem] leading-relaxed text-muted-foreground">
        <p>
          [Placeholder]
        </p>
      </div>

      <Separator className="mx-auto mt-10 max-w-3xl" />

      <div className="mx-auto mt-10 max-w-3xl space-y-8">
        {channels.map(({ icon: Icon, label, value, href }) => (
          <div key={label} className="flex items-start gap-4">
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
        ))}
      </div>
    </div>
  )
}
