"user server";

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

export async function getAllTodolist(): Promise<TodoResponseDTO[]> {
    return axios
    .get<TodoResponseDTO[]>(`${todoUrl}/todolists`)
    .then((response)=> response.data)
    .catch((error) => {
        console.error("Error fetching todo lists:", error);
        return [];
    });
}
