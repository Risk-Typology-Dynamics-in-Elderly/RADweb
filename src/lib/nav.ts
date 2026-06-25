export type NavItem = {
  label: string
  to: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Project", to: "/project" },
  { label: "Research Framework", to: "/framework" },
  { label: "Dashboard Demo", to: "/dashboard" },
  { label: "Team", to: "/team" },
  { label: "Progress", to: "/progress" },
  { label: "Contact", to: "/contact" },
]
