import { PageHeader } from "@/components/layout/PageHeader"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const members = [
  {
    name: "Member One",
    role: "Principal Investigator",
    bio: "[Placeholder] Leads the RAD Research Group's direction and research agenda.",
  },
  {
    name: "Member Two",
    role: "Co-Investigator",
    bio: "[Placeholder] Co-leads methodology and data analysis for the project.",
  },
  {
    name: "Member Three",
    role: "Postdoctoral Researcher",
    bio: "[Placeholder] Works on modeling risk trajectories across the life course.",
  },
  {
    name: "Member Four",
    role: "Doctoral Student",
    bio: "[Placeholder] Contributes to data collection and dashboard development.",
  },
]

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

export function Team() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <PageHeader
        eyebrow="The Team"
        title="People behind the RAD Research Group"
        description="Researchers and students working on risk and aging dynamics."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {members.map((m) => (
          <Card key={m.name}>
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <Avatar className="h-14 w-14">
                <AvatarFallback>{initials(m.name)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{m.name}</CardTitle>
                <CardDescription>{m.role}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {m.bio}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
