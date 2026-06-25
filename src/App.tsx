import { createHashRouter, RouterProvider } from "react-router-dom"

import { Layout } from "@/components/layout/Layout"
import { Home } from "@/pages/Home"
import { Project } from "@/pages/Project"
import { Framework } from "@/pages/Framework"
import { Dashboard } from "@/pages/Dashboard"
import { Team } from "@/pages/Team"
import { Progress } from "@/pages/Progress"
import { Contact } from "@/pages/Contact"

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "project", element: <Project /> },
      { path: "framework", element: <Framework /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "team", element: <Team /> },
      { path: "progress", element: <Progress /> },
      { path: "contact", element: <Contact /> },
      {
        path: "*",
        element: (
          <div className="mx-auto max-w-6xl px-4 py-32 text-center sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl font-semibold">404</h1>
            <p className="mt-2 text-muted-foreground">Page not found.</p>
          </div>
        ),
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
