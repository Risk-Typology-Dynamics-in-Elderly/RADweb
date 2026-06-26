const en = {
  common: {
    placeholder: "[Placeholder]",
  },
  nav: {
    home: "Home",
    project: "Project",
    framework: "Research Framework",
    dashboard: "Dashboard Demo",
    team: "Team",
    progress: "Progress",
    contact: "Contact",
  },
  brand: {
    name: "RAD Research Group",
    tagline: "Risk and Aging Dynamics",
    footerName: "Risk and Aging Dynamics Research Group",
    footerTagline: "RAD — Risk and Aging Dynamics",
  },
  header: {
    toggleMenu: "Toggle menu",
    languageLabel: "Language",
    switchTo: "Switch to Chinese",
  },
  home: {
    hero: {
      eyebrow: "Risk and Aging Dynamics Research Group",
      title: "Understanding risk through the lens of aging.",
      body: "The RAD Research Group investigates the dynamics of risk as they unfold across the aging process — bridging theory, data, and applied analysis.",
      ctaPrimary: "Explore the project",
      ctaSecondary: "Get in touch",
    },
    feature: {
      project: {
        eyebrow: "The Project",
        title: "[placeholder]",
        body: "[placeholder]",
        link: "Read about the project",
      },
      framework: {
        eyebrow: "The Framework",
        title: "[placeholder]",
        body: "[placeholder]",
        link: "Explore the framework",
      },
      dashboard: {
        eyebrow: "The Dashboard",
        title: "[placeholder]",
        body: "[placeholder]",
        link: "View the dashboard demo",
      },
    },
    stats: {
      researchers: "Researchers",
      ongoingProject: "Ongoing project",
      established: "Established",
    },
    explore: {
      title: "Explore the group",
      team: "Meet the people",
      progress: "See milestones",
      contact: "Reach out",
    },
    figure: "fig. {{n}}",
  },
  project: {
    eyebrow: "The Project",
    title: "Research Background & Aim",
    description:
      "The motivation, scope, and objective behind the RAD Research Group's work.",
    background: "Background",
    aim: "Aim",
  },
  framework: {
    eyebrow: "Research Framework",
    title: "A Framework for Risk and Aging Dynamics",
    description:
      "An introductory, essay-style account of the conceptual framework guiding our research.",
    posted: "Posted",
    author: "Author",
    readTime: "Read time",
    postedValue: "June 2026",
    authorValue: "RAD Research Group",
    readTimeValue: "5 min",
  },
  dashboard: {
    eyebrow: "Dashboard Demo",
    title: "Coming soon",
    description:
      "Our interactive dashboard is currently in preparation. Please check back later.",
    blankTitle: "Dashboard content will appear here.",
    blankBody: "Intentionally left blank for now.",
  },
  team: {
    eyebrow: "The Team",
    title: "People behind the RAD Research Group",
    description:
      "Researchers and students working on risk and aging dynamics.",
  },
  progress: {
    eyebrow: "Progress",
    title: "What the team has done",
    description:
      "A timeline of milestones and activities accomplished by the RAD Research Group.",
    status: {
      completed: "Completed",
      inProgress: "In progress",
      planned: "Planned",
    },
    milestones: {
      kickoff: { title: "Project kickoff" },
      literature: { title: "Literature review" },
      formulation: { title: "Framework formulation" },
      collection: { title: "Data collection" },
      release: { title: "Dashboard release" },
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Get in touch",
    description:
      "Reach out to the RAD Research Group with questions, ideas, or collaboration inquiries.",
    channels: {
      email: "Email",
      address: "Address",
      online: "Online",
    },
    addressValue:
      "[Placeholder]\nRisk and Aging Dynamics Research Group",
  },
  footer: {
    contact: "Contact",
    copyright: "© {{year}} RAD Research Group. All rights reserved.",
  },
}

export default en
export type Translation = typeof en
