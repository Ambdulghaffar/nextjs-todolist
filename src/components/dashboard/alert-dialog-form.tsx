import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { TodolistForm } from "./todolist-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

type AlertDialogFormProps = {
  trigger: React.ReactNode;
  mode: "create" | "edit";
};
export function AlertDialogForm({ trigger, mode }: AlertDialogFormProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const router =useRouter();

   const handleSuccess = () => {
     setIsOpen(false); // Fermer le dialog
     router.refresh(); // Rafraîchir la page pour afficher les changements
   }
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle></AlertDialogTitle>
          <TodolistForm mode={mode} onSuccess={handleSuccess} />
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
