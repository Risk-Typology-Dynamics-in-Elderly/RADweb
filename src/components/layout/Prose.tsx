import { cn } from "@/lib/utils"

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl space-y-6 text-[1.05rem] leading-relaxed text-muted-foreground",
        className
      )}
    >
      {children}
    </div>
  )
}
