"use server";

import environment from "@/config/environment.config";
import { TodoRequestDTO, TodoResponseDTO } from "../models/todolist.models";
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

export const createTodoList = async (
  taskData: Partial<TodoRequestDTO>,
): Promise<TodoResponseDTO> => {
  return axios
    .post<TodoResponseDTO>(`${todoUrl}`, taskData)
    .then((response) => response.data)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .catch((error:any) => {
      const errorMessage = error.response?.data?.message;
      throw error;
    });
};



export const deleteTodoList = async (id: number): Promise<void> => {
  return axios
    .delete<void>(`${todoUrl}/${id}`)
    .then((response) => response.data);
};
