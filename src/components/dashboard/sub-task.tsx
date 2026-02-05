import React from "react";
import { Button } from "../ui/button";
import { ChevronDown, Plus, Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import dayjs from "dayjs";
import { AlertDialogForm } from "./alert-dialog-form";

export default function SubTask() {
  return (
    <div className="flex items-center justify-between  py-5 border-b border-t">
      <div className="flex items-center gap-2">
        <p className="font-bold text-lg">{dayjs().format("DD/MM/YYYY")}</p>
        <ChevronDown />
      </div>
      <div className="flex items-center gap-3">
        <InputGroup>
          <InputGroupInput className="capitalize" placeholder="search list" />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
        <AlertDialogForm
          mode="create"
          trigger={
            <Button className="bg-blue-700 hover:bg-blue-800 cursor-pointer">
              <Plus />
              <p>Ajouter une tache</p>
            </Button>
          }
        />
      </div>
    </div>
  );
}
