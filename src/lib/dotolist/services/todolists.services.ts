"use server";

import environment from "@/config/environment.config";
import { TodoResponseDTO } from "../models/todolist.models";
import axios from "axios";

const {
  api: {
    rest: {
      endpoints: { todolists: todoUrl },
    },
  },
} = environment;

export async function getAllTodolist(
  order?: "asc" | "desc",
): Promise<TodoResponseDTO[]> {
  return axios
    .get<TodoResponseDTO[]>(`${todoUrl}`, { params: { order } })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching todo lists:", error);
      return [];
    });
}

export const deleteTodoList = async (id: number): Promise<void> => {
  return axios
    .delete<void>(`${todoUrl}/${id}`)
    .then((response) => response.data);
};
