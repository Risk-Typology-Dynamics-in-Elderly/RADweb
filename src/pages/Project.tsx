import { PageHeader } from "@/components/layout/PageHeader"
import { Prose } from "@/components/layout/Prose"

export function Project() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <PageHeader
        eyebrow="The Project"
        title="Research Background & Aim"
        description="The motivation, scope, and objective behind the RAD Research Group's work."
      />

      <Prose className="mt-14">
        <h2 className="font-serif text-2xl font-medium text-foreground">
          Background
        </h2>
        <p>
          [Placeholder]
        </p>
        <p>
          [Placeholder]
        </p>

        <h2 className="pt-4 font-serif text-2xl font-medium text-foreground">
          Aim
        </h2>
        <p>
          [Placeholder]
        </p>
        <p>
          [Placeholder]
        </p>
      </Prose>
    </div>
  )
}
