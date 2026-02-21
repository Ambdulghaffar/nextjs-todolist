"use client"

import * as React from "react"
import {
  Activity,
  LifeBuoy,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavSecondary } from "./nav-secondary"

// Ceci sont des données d'exemple.
const data = {
  teams: [
    {
      name: "Gestion des taches",
      logo: Activity,
    }
  ],
  navMain: [
    {
      title: "Liste de Tâches",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Réunion d'Équipe",
          url: "#",
        },
        {
          title: "Travailler sur la Marque",
          url: "#",
        },
        {
          title: "Faire un Rapport pour le Client",
          url: "#",
        },
        {
          title: "Créer un Planificateur",
          url: "#",
        },
      ],
    }
  ],
   navSecondary: [
    {
      title: "Aperçu",
      url: "#",
      icon: LifeBuoy,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavSecondary items={data.navSecondary} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
