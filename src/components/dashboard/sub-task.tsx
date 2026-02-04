import React from "react";
import { Button } from "../ui/button";
import { ChevronDown, Plus, Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import dayjs from "dayjs";
import Link from "next/link";
import { ROUTES } from "@/utils/routes";

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
        <Button className="bg-blue-700 hover:bg-blue-800">
          <Plus />
          <Link href={ROUTES.CREATE_TASK} className="capitalize">Ajouter une tache</Link>
        </Button>
      </div>
    </div>
  );
}
