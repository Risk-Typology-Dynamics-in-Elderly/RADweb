import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import {
  ArrowRight,
  Activity,
  Network,
  BarChart3,
  Users,
  GitCommitVertical,
  Mail,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type FeatureKey = "project" | "framework" | "dashboard"

type Feature = {
  eyebrowKey: string
  titleKey: string
  bodyKey: string
  linkKey: string
  to: string
  icon: typeof Activity
  accent: string
}

const featureConfig: {
  key: FeatureKey
  to: string
  icon: typeof Activity
  accent: string
}[] = [
  {
    key: "project",
    to: "/project",
    icon: Activity,
    accent: "from-sky-100 to-indigo-50",
  },
  {
    key: "framework",
    to: "/framework",
    icon: Network,
    accent: "from-rose-100 to-amber-50",
  },
  {
    key: "dashboard",
    to: "/dashboard",
    icon: BarChart3,
    accent: "from-emerald-100 to-teal-50",
  },
]

const stats = [
  { value: "7", labelKey: "home.stats.researchers" },
  { value: "1", labelKey: "home.stats.ongoingProject" },
  { value: "2026", labelKey: "home.stats.established" },
]

const explore = [
  { labelKey: "nav.team", descKey: "home.explore.team", to: "/team", icon: Users },
  { labelKey: "nav.progress", descKey: "home.explore.progress", to: "/progress", icon: GitCommitVertical },
  { labelKey: "nav.contact", descKey: "home.explore.contact", to: "/contact", icon: Mail },
]

function VisualPanel({
  icon: Icon,
  accent,
  figureLabel,
}: {
  icon: typeof Activity
  accent: string
  figureLabel: string
}) {
  return (
    <div
      className={cn(
        "relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br",
        accent
      )}
    >
      <Icon
        className="h-20 w-20 text-foreground/20"
        strokeWidth={1.25}
        aria-hidden
      />
      <img
        src="./rad.jpg"
        alt=""
        aria-hidden
        className="absolute mix-blend-multiply bottom-4 right-4 h-8 opacity-70"
      />
      <span className="absolute left-4 top-3 font-serif text-xs italic text-foreground/40">
        {figureLabel}
      </span>
    </div>
  )
}

function FeatureRow({
  feature,
  index,
}: {
  feature: Feature
  index: number
}) {
  const { t } = useTranslation()
  const reversed = index % 2 === 1
  return (
    <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
      <div className={cn(reversed && "md:order-2")}>
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {t(feature.eyebrowKey)}
        </p>
        <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          {t(feature.titleKey)}
        </h2>
        <p className="mt-4 text-[1.05rem] leading-relaxed text-muted-foreground">
          {t(feature.bodyKey)}
        </p>
        <Link
          to={feature.to}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-accent"
        >
          {t(feature.linkKey)} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className={cn(reversed && "md:order-1")}>
        <VisualPanel
          icon={feature.icon}
          accent={feature.accent}
          figureLabel={t("home.figure", { n: index + 1 })}
        />
      </div>
    </div>
  )
}

export function Home() {
  const { t } = useTranslation()

  const features: Feature[] = featureConfig.map(({ key, to, icon, accent }) => ({
    eyebrowKey: `home.feature.${key}.eyebrow`,
    titleKey: `home.feature.${key}.title`,
    bodyKey: `home.feature.${key}.body`,
    linkKey: `home.feature.${key}.link`,
    to,
    icon,
    accent,
  }))

  return (
    <div>
      {/* Title */}
      <section className="border-b border-border bg-gradient-to-b from-muted/40 to-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
          <img
            src="./rad.jpg"
            alt="RAD Research Group logo"
            className="mb-8 h-20 mix-blend-multiply"
          />
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {t("home.hero.eyebrow")}
          </p>
          <h1 className="max-w-3xl font-serif text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
            {t("home.hero.title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t("home.hero.body")}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/project">
                {t("home.hero.ctaPrimary")} <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">{t("home.hero.ctaSecondary")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Alternating text | image rows */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="space-y-24 sm:space-y-32">
          {features.map((f, i) => (
            <FeatureRow key={f.to} feature={f} index={i} />
          ))}
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
          {stats.map((s) => (
            <div key={s.labelKey} className="px-6 py-10 text-center">
              <p className="font-serif text-4xl font-semibold text-foreground">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {t(s.labelKey)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Explore more */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-center font-serif text-2xl font-medium text-foreground sm:text-3xl">
          {t("home.explore.title")}
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {explore.map((e) => (
            <Link
              key={e.to}
              to={e.to}
              className="group flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-shadow hover:shadow-md"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <e.icon className="h-5 w-5" />
              </span>
              <span className="flex flex-col">
                <span className="font-medium text-foreground">
                  {t(e.labelKey)}
                </span>
                <span className="text-sm text-muted-foreground">
                  {t(e.descKey)}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
