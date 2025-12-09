"use client"

import * as React from "react"
import {
  GalleryVerticalEnd,
  LifeBuoy,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavSecondary } from "./nav-secondary"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "HealDocs",
      logo: GalleryVerticalEnd,
    }
  ],
  navMain: [
    {
      title: "Todo List",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Team Meeting",
          url: "#",
        },
        {
          title: "Work on Branding",
          url: "#",
        },
        {
          title: "Make a Report for Client",
          url: "#",
        },
        {
          title: "Create a planer",
          url: "#",
        },
      ],
    }
  ],
   navSecondary: [
    {
      title: "OverView",
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
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
