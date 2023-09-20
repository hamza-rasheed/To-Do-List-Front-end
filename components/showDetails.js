import { deletetask } from "@/api";
import React, { useContext } from "react";
import { AppContext } from "./taskAdd";
import { DropContext } from "./items";

export default function ShowDetails({ id, completed, time }) {
  const { refresh, setRefresh } = useContext(AppContext);
  const { setShow } = useContext(DropContext);
  const handleDelete = async () => {
    const { status } = await deletetask(id);
    if (status == 200) {
      setRefresh(!refresh);
      setShow(false);
    }
  };
  var date = new Date(time);

  return (
    <div class='px-2 py-2 justify-items-end w-full h-[16vh] bg-white flex flex-col'>
      <div class='p-2'>
        <p class='text-black text-[80%] '>
          <b>Completed:</b> {completed ? "Completed" : "Not Completed"}
        </p>
        <p class='text-black text-[80%] mb-2'>
          <b>Created At:</b> {date.toLocaleString().toString()}
        </p>
      </div>

      <button
        class='bg-[#f54e89]/[0.3] text-[#fa0202] border-none rounded-lg px-2 py-2'
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}
