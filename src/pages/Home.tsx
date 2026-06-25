import { Link } from "react-router-dom"
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

type Feature = {
  eyebrow: string
  title: string
  body: string
  to: string
  linkLabel: string
  icon: typeof Activity
  accent: string
}

const features: Feature[] = [
  {
    eyebrow: "The Project",
    title: "Understanding risk across the life course.",
    body: "Risk is not static — it evolves as we age. The RAD Research Group studies how exposure to, perception of, and resilience against risk shift across adulthood, bridging cognitive science, public health, and data analysis.",
    to: "/project",
    linkLabel: "Read about the project",
    icon: Activity,
    accent: "from-sky-100 to-indigo-50",
  },
  {
    eyebrow: "The Framework",
    title: "A framework for dynamics and feedback.",
    body: "Risk and aging are coupled through feedback loops. Our conceptual framework maps how changes in health alter risk exposure — and how those shifts, in turn, shape downstream aging outcomes.",
    to: "/framework",
    linkLabel: "Explore the framework",
    icon: Network,
    accent: "from-rose-100 to-amber-50",
  },
  {
    eyebrow: "The Dashboard",
    title: "Data-driven insights, in progress.",
    body: "We are building reproducible methods for measuring risk trajectories in aging populations. An interactive dashboard will make these indicators accessible to researchers, clinicians, and policymakers.",
    to: "/dashboard",
    linkLabel: "View the dashboard demo",
    icon: BarChart3,
    accent: "from-emerald-100 to-teal-50",
  },
]

const stats = [
  { value: "4+", label: "Researchers" },
  { value: "1", label: "Ongoing project" },
  { value: "2026", label: "Established" },
]

const explore = [
  { label: "Team", to: "/team", icon: Users, desc: "Meet the people" },
  { label: "Progress", to: "/progress", icon: GitCommitVertical, desc: "See milestones" },
  { label: "Contact", to: "/contact", icon: Mail, desc: "Reach out" },
]

function VisualPanel({
  icon: Icon,
  accent,
  index,
}: {
  icon: typeof Activity
  accent: string
  index: number
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
        src="./radicon.png"
        alt=""
        aria-hidden
        className="absolute bottom-4 right-4 h-8 w-8 opacity-70"
      />
      <span className="absolute left-4 top-3 font-serif text-xs italic text-foreground/40">
        fig. {index + 1}
      </span>
    </div>
  )
}

function FeatureRow({ feature, index }: { feature: Feature; index: number }) {
  const reversed = index % 2 === 1
  return (
    <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
      <div className={cn(reversed && "md:order-2")}>
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {feature.eyebrow}
        </p>
        <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          {feature.title}
        </h2>
        <p className="mt-4 text-[1.05rem] leading-relaxed text-muted-foreground">
          {feature.body}
        </p>
        <Link
          to={feature.to}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-accent"
        >
          {feature.linkLabel} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className={cn(reversed && "md:order-1")}>
        <VisualPanel
          icon={feature.icon}
          accent={feature.accent}
          index={index}
        />
      </div>
    </div>
  )
}

export function Home() {
  return (
    <div>
      {/* Title */}
      <section className="border-b border-border bg-gradient-to-b from-muted/40 to-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
          <img
            src="./radicon.png"
            alt="RAD Research Group logo"
            className="mb-8 h-20 w-20 rounded-lg shadow-sm"
          />
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Risk and Aging Dynamics Research Group
          </p>
          <h1 className="max-w-3xl font-serif text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Understanding risk through the lens of aging.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            The RAD Research Group investigates the dynamics of risk as they
            unfold across the aging process — bridging theory, data, and
            applied analysis.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/project">
                Explore the project <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Get in touch</Link>
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
            <div key={s.label} className="px-6 py-10 text-center">
              <p className="font-serif text-4xl font-semibold text-foreground">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Explore more */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-center font-serif text-2xl font-medium text-foreground sm:text-3xl">
          Explore the group
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
                <span className="font-medium text-foreground">{e.label}</span>
                <span className="text-sm text-muted-foreground">
                  {e.desc}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
