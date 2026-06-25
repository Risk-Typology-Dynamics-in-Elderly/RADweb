import { Separator } from "@/components/ui/separator"
import { PageHeader } from "@/components/layout/PageHeader"

const meta = [
  { label: "Posted", value: "June 2026" },
  { label: "Author", value: "RAD Research Group" },
  { label: "Read time", value: "5 min" },
]

export function Framework() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <PageHeader
        eyebrow="Research Framework"
        title="A Framework for Risk and Aging Dynamics"
        description="An introductory, essay-style account of the conceptual framework guiding our research."
      />

      <article className="mx-auto mt-12 max-w-3xl">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-muted-foreground">
          {meta.map((m, i) => (
            <span key={m.label} className="flex items-center gap-x-6">
              <span>
                <span className="font-medium text-foreground">{m.label}:</span>{" "}
                {m.value}
              </span>
              {i < meta.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="hidden h-3 sm:block"
                />
              )}
            </span>
          ))}
        </div>
        <Separator className="my-8" />

        <div className="space-y-6 text-[1.05rem] leading-relaxed text-muted-foreground">
          <p>
            [Placeholder] Aging is not merely the passage of time. It is a
            dynamic process in which biological, cognitive, and social
            trajectories unfold together — and in which risk is ever-present.
          </p>

          <h2 className="pt-4 font-serif text-2xl font-medium text-foreground">
            1. Risk as a trajectory
          </h2>
          <p>
            [Placeholder] We begin from the premise that risk is not a static
            attribute but a trajectory. A person's exposure to, perception of,
            and resilience against risk all evolve across the life course.
          </p>

          <h2 className="pt-4 font-serif text-2xl font-medium text-foreground">
            2. Dynamics and feedback
          </h2>
          <p>
            [Placeholder] Risk and aging are coupled through feedback. Changes
            in health alter risk exposure; shifts in risk, in turn, shape
            downstream aging outcomes. Mapping these loops is central to our
            framework.
          </p>

          <h2 className="pt-4 font-serif text-2xl font-medium text-foreground">
            3. From framework to measurement
          </h2>
          <p>
            [Placeholder] The framework is not an end in itself. Its purpose is
            to guide what we measure and how — producing reproducible,
            interpretable indicators of risk dynamics in aging populations.
          </p>

          <p className="pt-4 italic">
            This introduction outlines the conceptual scaffolding of our work.
            Detailed methods and findings will be added as the project
            progresses.
          </p>
        </div>
      </article>
    </div>
  )
}
