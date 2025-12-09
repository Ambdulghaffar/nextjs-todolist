import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function NavbarHome() {

  const linkData = [
    { name: "home", href: "#" , className: "text-orange-500"},
    { name: "features", href: "#" },
    { name: "pricing", href: "#" },
    { name: "testimonials", href: "#" },
  ];

  return (
    <>
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
            <p>icon</p>
            <p className="font-bold">ToDo<span className="text-orange-500">lt</span></p>
          </div>
          {linkData.map((link,index)=>(
          <div key={index} className="flex items-center gap-4 font-bold capitalize">
            <Link href={link.href} className={link.className ? link.className : ""}>{link.name}</Link>
          </div>
          ))}
        </div>
          <Button className="bg-orange-500 border rounded-full px-7 py-6 capitalize text-sm text-gray-200">dowanload app</Button>
      </div>
    </>
  );
}
