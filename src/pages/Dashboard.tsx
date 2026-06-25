import { PageHeader } from "@/components/layout/PageHeader"

export function Dashboard() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <PageHeader
        eyebrow="Dashboard Demo"
        title="Coming soon"
        description="Our interactive dashboard is currently in preparation. Please check back later."
      />

      <div className="mt-16 flex min-h-[40vh] items-center justify-center">
        <div className="flex h-48 w-full max-w-md flex-col items-center justify-center rounded-lg border border-dashed border-border bg-muted/40 text-center">
          <p className="font-serif text-lg text-muted-foreground">
            Dashboard content will appear here.
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Intentionally left blank for now.
          </p>
        </div>
      </div>
    </div>
  )
}
