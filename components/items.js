"use client";
import React, { useState, createContext } from "react";
import CheckCircleIcon from "@/public/assets/icons/CheckCircleIcon";
import DotIcon from "@/public/assets/icons/DotIcon";
import { updateTask } from "@/api";
import ShowDetails from "./showDetails";
export const DropContext = createContext(null);

export default function ListItems({ taskId, title, completed, time }) {
  const [show, setShow] = useState(false);
  const [check, setCheck] = useState(completed);
  const handleCheck = async () => {
    var bol = new Boolean(false);
    if (check) {
      bol = false;
      console.log(bol);
      const { data, status } = await updateTask(taskId, bol);
      console.log("STATUS IS", status);
      console.log("DATA IS", data);
      if (status == 200) {
        setCheck(!check);
      }
    } else {
      bol = true;
      console.log(bol);
      const { data, status } = await updateTask(taskId, bol);
      console.log("STATUS IS", status);
      console.log("DATA IS", data);
      if (status == 200) {
        setCheck(!check);
      }
    }
  };
  return (
    <DropContext.Provider value={{ show, setShow }}>
      <div class='flex flex-col'>
        <div class='w-full py-[1.8vh] px-2 flex flex-row space-x-2 border-b-[0.1vh] border-[#A49377]'>
          <button onClick={handleCheck}>
            {check ? (
              <CheckCircleIcon class='grow-0 flex-none w-6 h-6 fill-[#A49377]' />
            ) : (
              <CheckCircleIcon class='grow-0 flex-none w-6 h-6 fill-gray' />
            )}
          </button>
          <p class='text-start text-black grow'>{title}</p>
          <button onClick={() => setShow(!show)}>
            <DotIcon class='grow-0 flex-none w-6 h-6' />
          </button>
        </div>
        {show ? (
          <ShowDetails completed={check} time={time} id={taskId} />
        ) : null}
      </div>
    </DropContext.Provider>
  );
}
