'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '../ui/textarea';
import { useEffect } from 'react';

const formSchema = z.object({
  title: z
    .string()
    .min(2, 'Le titre doit faire entre 3 et 100 caractères'),
  description: z
    .string()
    .max(500, 'La description ne doit pas dépasser 500 caractères'),
updatedAt: z.string().optional(),
});

type TodolistFormProps = {
  mode?: 'create' | 'edit';
  initialData?: z.infer<typeof formSchema>;
}

export function TodolistForm({ mode, initialData }: TodolistFormProps) {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      updatedAt: '',
    },
  });

  /* pré-remplissage en modification */
  useEffect(()=>{
    if(mode === "edit" && initialData){
      form.reset(initialData);
    }
    if(mode === "create"){
      form.reset({
        title: '',
        description: '',
        updatedAt: '',
      });
    }
  },[mode, initialData,form])

  async function onSubmit(data: z.infer<typeof formSchema>) {
  
  }
  return (
    <div className='flex w-full items-center justify-center px-2'>
      <Card className='w-full max-w-lg shadow-md'>
        <CardHeader>
            <CardTitle className='text-2xl font-bold text-center'>
              {mode === "edit" ? "Modifier la tache" : "Ajouter une tache"}
            </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
              <FormField
                control={form.control}
                name='title'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='after:content-["*"] after:ml-0.5 after:text-red-500'>Nom de la tache</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Entrez le nom de la tache'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='description'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='after:content-["*"] after:ml-0.5 after:text-red-500'>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Saisissez la description'
                        rows={6}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='updatedAt'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='after:content-["*"] after:ml-0.5 after:text-red-500'>Date de mise à jour</FormLabel>
                    <FormControl>
                      <Input placeholder="Entrez la date de mise à jour" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type='submit'
                className='w-full rounded-full bg-purple-700 hover:bg-purple-800'
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