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
          Risk is a defining feature of human experience, and its character
          shifts across the life course. As populations age globally,
          understanding how risk is perceived, distributed, and managed in
          later life becomes increasingly urgent.
        </p>
        <p>
          [Placeholder] The Risk and Aging Dynamics Research Group was
          established to address this challenge. We bring together
          perspectives from cognitive science, public health, and data
          analytics to examine how aging shapes — and is shaped by — risk.
        </p>

        <h2 className="pt-4 font-serif text-2xl font-medium text-foreground">
          Aim
        </h2>
        <p>
          [Placeholder] Our aim is to develop a rigorous, evidence-based
          account of risk in aging populations, and to translate that
          understanding into tools and insights that support decision-making
          for individuals, clinicians, and policymakers.
        </p>
        <p>
          Specifically, the project seeks to characterize the trajectories of
          risk across adulthood, identify the factors that alter these
          trajectories, and build reproducible methods for measuring them.
        </p>
      </Prose>
    </div>
  )
}
