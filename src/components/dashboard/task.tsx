"use client";
import { ChevronDown, Pencil, Plus, Search, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { TodoResponseDTO } from "@/lib/dotolist/models/todolist.models";
import { getAllTodolist } from "@/lib/dotolist/services/todolists.services";
import { dayjsLocale } from "@/shared/index-shared";

export default function Task() {
  const tabs = [
    { label: "active task", className: "text-black" },
    { label: "completed", className: "text-gray-500" },
  ];

  const tasks = [
    {
      title: "Team Meeting",
      description:
        "Lorem ipsum dolor sit amet, consectetur elit lddv nlorem idfsrfi.",
      time: "10:30 AM - 12:00 PM",
      className: "bg-blue-200",
    },
    {
      title: "Work on Branding",
      description:
        "Lorem ipsum dolor sit amet, consectetur elit lddv nlorem idfsrfi.",
      time: "10:30 AM - 12:00 PM",
      className: "bg-purple-200",
    },
    {
      title: "Make a Report for client",
      description:
        "Lorem ipsum dolor sit amet, consectetur elit lddv nlorem idfsrfi.",
      time: "10:30 AM - 12:00 PM",
      className: "bg-yellow-100",
    },
    {
      title: "Create a planer",
      description:
        "Lorem ipsum dolor sit amet, consectetur elit lddv nlorem idfsrfi.",
      time: "10:30 AM - 12:00 PM",
      className: "bg-pink-200",
    },
    {
      title: "Create Treatment Plan",
      description:
        "Lorem ipsum dolor sit amet, consectetur elit lddv nlorem idfsrfi.",
      time: "10:30 AM - 12:00 PM",
      className: "bg-green-200",
    },
  ];

  const [data, setData] = useState<TodoResponseDTO[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const todolists = await getAllTodolist();
      setData(todolists);
    };

    fetchData();
  }, []);

  return (
    <div className="px-5 space-y-6">
      <div className="flex items-center justify-between  py-5 border-b border-t">
        <div className="flex items-center gap-2">
          <p className="font-bold text-lg">21 novembre 2026</p>
          <ChevronDown />
        </div>
        <div className="flex items-center gap-3">
          <InputGroup>
            <InputGroupInput className="capitalize" placeholder="search list" />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
          </InputGroup>
          <Button className="bg-blue-700">
            <Plus />
            <span className="capitalize">add new list</span>
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-3 ">
        {tabs.map((tab, id) => (
          <Button
            key={id}
            className={`capitalize bg-gray-50 hover:bg-gray-100 ${tab.className}`}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {data.map((todolist) => (
          <Card key={todolist.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox className="bg-white" />
                  <p>{todolist.title}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Pencil size={18} color="blue"/>
                  <Trash size={18} color="red"/>
                </div>
              </CardTitle>
              <CardDescription>{todolist.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <p>{dayjsLocale(todolist.createdAt)}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
