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
            [Placeholder]
          </p>

          <h2 className="pt-4 font-serif text-2xl font-medium text-foreground">
            1.
          </h2>
          <p>
            [Placeholder]
          </p>

          <h2 className="pt-4 font-serif text-2xl font-medium text-foreground">
            2.
          </h2>
          <p>
            [Placeholder]
          </p>

          <h2 className="pt-4 font-serif text-2xl font-medium text-foreground">
            3.
          </h2>
          <p>
            [Placeholder]
          </p>

          <p className="pt-4 italic">
            [Placeholder]
          </p>
        </div>
      </article>
    </div>
  )
}
