export type TodoList = {
    id: number;
    title: string;
    description: string;
    createdAt:  Date;
    updatedAt: Date;
}

export interface TodoRequestDTO {
    title: string;
    description: string;
}

export interface TodoResponseDTO {
    id: number;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
} 