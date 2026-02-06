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

type AlertDialogFormProps = {
  trigger: React.ReactNode;
  mode: "create" | "edit";
  onSuccess?: () => void;
};
export function AlertDialogForm({ trigger, mode, onSuccess }: AlertDialogFormProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

   const handleSuccess = () => {
     setIsOpen(false); // Fermer le dialog
     onSuccess?.(); // Rafraîchir les données
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
