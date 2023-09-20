"use client";
import React, { useState, useEffect } from "react";
import ChevronIcon from "@/public/assets/icons/ChevronIcon";
import ListIcon from "@/public/assets/icons/ListIcon";
import ViewTodos from "@/components/viewTodos";
import Todos from "@/components/todos";
import { getTasks } from "@/api";

export default function Dropdowns(trigger) {
  console.log("Trigger is", trigger);
  const [data, setData] = useState();
  const [show, setShow] = useState();
  const fetchTodos = async () => {
    const { data } = await getTasks();
    setData(data);
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  useEffect(() => {
    fetchTodos();
  }, [trigger]);
  return (
    <div class='flex flex-col'>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        <div class='my-2 py-[0.8vh] border-gray-300 px-[0.5vw] w-[24vw] border-2 rounded-lg sm:filter bg-[#cfb995]/[0.4]'>
          <div class='p-[0.3vw] flex flex-row space-x-2 '>
            <ListIcon class='grow-0 flex-none' />
            <p class='grow w-14'>Your todos</p>
            <ChevronIcon class='grow-0 flex-none w-6 h-6' />
          </div>
        </div>
      </button>
      {show ? (
        data != null && data.length > 0 ? (
          <ViewTodos data={data} />
        ) : (
          <Todos />
        )
      ) : null}
    </div>
  );
}
