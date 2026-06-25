import { PageHeader } from "@/components/layout/PageHeader"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Reach out to the RAD Research Group with questions, ideas, or collaboration inquiries."
      />

      <div className="mx-auto mt-14 grid max-w-4xl gap-10 md:grid-cols-2">
        <div className="space-y-6 text-[1.05rem] leading-relaxed text-muted-foreground">
          <p>
            [Placeholder]
          </p>
          <div className="space-y-1">
            <p className="text-sm font-medium text-foreground">Email</p>
            <p className="text-sm">contact@[placeholder]</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-foreground">Address</p>
            <p className="text-sm">
              [Placeholder]
              <br />
              Risk and Aging Dynamics Research Group
            </p>
          </div>
        </div>

        <Card>
          <CardContent>
            <form
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help?"
                  className="min-h-[120px]"
                />
              </div>
              <Button type="submit" className="w-full">
                Send message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
