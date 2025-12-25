import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Banner() {
  return (
    <div className="flex flex-col justify-center items-center my-20 space-y-4">
      <p className="text-8xl capitalize font-bold">to do list</p>
      <p className="border rounded-full px-4 pt-4 pb-7 bg-orange-500 text-6xl text-white font-bold capitalize">
        optimizer
      </p>
      <p className="text-stone-500 text-center">
        This platform can determine the importance of your tasks, allowing you
        to be <br /> more efficient in your daily operations.
      </p>
      <div className="relative w-1/3">
        <Input
          className="py-6 rounded-full"
          placeholder="Entrer your email"
        ></Input>
        <Button className="absolute right-0.5 bg-orange-500 border rounded-full px-7 py-6 capitalize text-sm text-gray-200">
          get started
        </Button>
      </div>
    </div>
  );
}