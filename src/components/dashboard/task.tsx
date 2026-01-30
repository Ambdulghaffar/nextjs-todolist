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
import { dayjsLocale, truncateStr } from "@/shared/index-shared";
import dayjs from "dayjs";

export default function Task() {
  const tabs = [
    { label: "tâches actives", className: "text-black" },
    { label: "terminées", className: "text-gray-500" },
  ];


  const [data, setData] = useState<TodoResponseDTO[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const todolists = await getAllTodolist('desc');
      setData(todolists);
    };

    fetchData();
  }, []);

  return (
    <div className="px-5 space-y-6">
      <div className="flex items-center justify-between  py-5 border-b border-t">
        <div className="flex items-center gap-2">
          <p className="font-bold text-lg">{dayjs().format('DD/MM/YYYY')}</p>
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
            <span className="capitalize">Ajouter une tache</span>
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
              <CardDescription>{truncateStr(todolist.description)}</CardDescription>
            </CardHeader>
            <CardFooter>
              <p>{dayjsLocale(todolist.updatedAt)}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
