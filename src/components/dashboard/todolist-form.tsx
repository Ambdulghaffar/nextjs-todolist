"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { useEffect } from "react";
import { createTodoList, updateTodoList } from "@/lib/dotolist/services/todolists.services";
import { toast } from "react-toastify";
import { TodoResponseDTO } from "@/lib/dotolist/models/todolist.models";

const formSchema = z.object({
  title: z.string().min(2, "Le titre doit faire entre 3 et 100 caractères"),
  description: z
    .string()
    .max(500, "La description ne doit pas dépasser 500 caractères"),
});

type TodolistFormProps = {
  mode: "create" | "edit";
  initialData?: TodoResponseDTO;
  onSuccess?: () => void;
};

export function TodolistForm({
  mode,
  initialData,
  onSuccess,
}: TodolistFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  /* pré-remplissage en modification */
  useEffect(() => {
    if (mode === "edit" && initialData) {
      form.reset({
        title: initialData.title,
        description: initialData.description,
      });
    }
    if (mode === "create") {
      form.reset({
        title: "",
        description: "",
      });
    }
  }, [mode, initialData, form]);

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      if (mode === "create") {
        const todo = await createTodoList(data);
        if (todo) {
          toast.success("Tache ajoutée avec succès !", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          form.reset(); 
          onSuccess?.(); // Signaler le succès à AlertDialogForm pour rafraîchir la liste
        }
      }
      if (mode === "edit" && initialData) {
        const updatedTodo = await updateTodoList(initialData.id, data);
        if (updatedTodo) {
          toast.success("Tache modifiée avec succès !", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,  
          });
          form.reset(); 
          onSuccess?.(); 
        }
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(`Erreur: ${error}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  return (
    <div className="flex w-full items-center justify-center px-2">
      <Card className="w-full max-w-lg shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            {mode === "edit" ? "Modifier la tache" : "Ajouter une tache"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='after:content-["*"] after:ml-0.5 after:text-red-500'>
                      Nom de la tache
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Entrez le nom de la tache"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='after:content-["*"] after:ml-0.5 after:text-red-500'>
                      Description
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Saisissez la description"
                        rows={6}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full rounded-full bg-purple-700 hover:bg-purple-800 cursor-pointer"
              >
                {mode === "edit" ? "Modifier" : "Ajouter"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
