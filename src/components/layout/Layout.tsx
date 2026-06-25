import { useRef } from "react"
import { Outlet, ScrollRestoration } from "react-router-dom"

import { SiteHeader } from "./SiteHeader"
import { SiteFooter } from "./SiteFooter"
import { Scrollbar } from "@/components/ui/scrollbar"

export function Layout() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <SiteHeader />
      <div className="relative flex-1 overflow-hidden">
        <div
          ref={scrollRef}
          className="hide-native-scrollbar h-full overflow-y-auto"
        >
          <main className="flex-1">
            <Outlet />
          </main>
          <SiteFooter />
        </div>
        <Scrollbar containerRef={scrollRef} />
      </div>
      <ScrollRestoration />
    </div>
  )
}
