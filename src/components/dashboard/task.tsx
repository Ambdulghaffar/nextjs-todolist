"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { TodoResponseDTO } from "@/lib/dotolist/models/todolist.models";
import {
  deleteTodoList,
  getAllTodolist,
} from "@/lib/dotolist/services/todolists.services";
import { dayjsLocale, truncateStr } from "@/shared/index-shared";
import { AlertDialogDestructive } from "../alert-dialog-desctructive";
import SubTask from "./sub-task";
import { toast } from "react-toastify";
import { AlertDialogForm } from "./alert-dialog-form";
import { Pencil } from "lucide-react";

export default function Task() {
  const tabs = [
    { label: "tâches actives", className: "text-black" },
    { label: "terminées", className: "text-gray-500" },
  ];

  const [data, setData] = useState<TodoResponseDTO[]>([]);
  const [refreshKey, setRefreshKey] = useState(0);

  const refetch = () => setRefreshKey(prev => prev + 1);

  useEffect(() => {
    const fetchData = async () => {
      const todolists = await getAllTodolist("desc");
      setData(todolists);
    };

    fetchData();
  }, [refreshKey]);

  const handleDelete = async (todoId: number) => {
    await deleteTodoList(todoId);
    setData((prevData) => prevData.filter((todo) => todo.id !== todoId));
    toast.success(`Tache supprimée avec succès !`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="px-5 space-y-6">
      <SubTask onCreateSuccess={refetch} />
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
                  <AlertDialogForm
                    mode="edit"
                    initialData={todolist}
                    onSuccess={refetch}
                    trigger={
                      <Pencil
                        className="cursor-pointer"
                        size={18}
                        color="blue"
                      />
                    }
                  />
                  <AlertDialogDestructive
                    onConfirm={() => handleDelete(todolist.id)}
                  />
                </div>
              </CardTitle>
              <CardDescription>
                {truncateStr(todolist.description)}
              </CardDescription>
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
