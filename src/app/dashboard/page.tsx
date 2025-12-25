import { AppSidebar } from "@/components/app-sidebar"
import Task from "@/components/dashboard/task"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { BellDot } from "lucide-react"
import Image from "next/image"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="mb-5">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4 w-full">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <div className="flex items-center justify-between flex-1">
              <h1 className="font-bold text-2xl">TodoList</h1>
              <div className="flex items-center gap-6">
                <BellDot/>
                <Image src={'/profile.jpg'} width={30} height={30} alt={"image profile"} />
              </div>
            </div>
          </div>
        </header>
        <Task/>
      </SidebarInset>
    </SidebarProvider>
  )
}
