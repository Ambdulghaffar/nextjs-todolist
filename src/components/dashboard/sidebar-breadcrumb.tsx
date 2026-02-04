import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { BellDot, ChevronRight } from "lucide-react";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "../ui/breadcrumb";
import Link from "next/link";
import { ROUTES } from "@/utils/routes";

type PathProps = {
  label?: string;
  url: string;
};

type BreadcrumbProps = {
  label: string;
  paths?: PathProps[];
};

export default function SidebarBreadcrumb({ label, paths }: BreadcrumbProps) {
  return (
    <div>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4 w-full">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <div className="flex justify-between items-center w-full">
            <Breadcrumb >
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link className="font-bold text-lg" href={ROUTES.DASHBOARD}>
                      TodoList
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <ChevronRight size={15} />
                {
                  <>
                    {paths?.map((p, index) => (
                      <React.Fragment key={index}>
                        <BreadcrumbItem>
                          <Link href={p.url} className="">
                            {p.label}
                          </Link>
                        </BreadcrumbItem>
                      </React.Fragment>
                    ))}
                  </>
                }
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-md">{label}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex items-center gap-6">
              <BellDot />
              <Image
                src={"/profile.jpg"}
                width={30}
                height={30}
                alt={"image profile"}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
