import { cn } from "@/lib/utils"

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <header className={cn("mx-auto max-w-3xl text-center", className)}>
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {eyebrow}
        </p>
      )}
      <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </header>
  )
}
