export type NavItem = {
  labelKey: string
  to: string
}

export const NAV_ITEMS: NavItem[] = [
  { labelKey: "nav.home", to: "/" },
  { labelKey: "nav.project", to: "/project" },
  { labelKey: "nav.framework", to: "/framework" },
  { labelKey: "nav.dashboard", to: "/dashboard" },
  { labelKey: "nav.team", to: "/team" },
  { labelKey: "nav.progress", to: "/progress" },
  { labelKey: "nav.contact", to: "/contact" },
]
