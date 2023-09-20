"use client";
import React, { useState, createContext } from "react";
import PlusIcon from "@/public/assets/icons/PlusIcon";
import { getTasks, postTask } from "@/api";
import Dropdowns from "./dropdown";

export const AppContext = createContext(null);
function TaskAdd() {
  const [taskName, setTaskname] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [response, setResponse] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (taskName != null && taskName.length > 0) {
      setResponse(true);
      const { data, status } = await postTask({ taskName });
      console.log(status);
      setTaskname("");
      setRefresh(!refresh);
      setResponse(false);
    }
  };

  return (
    <AppContext.Provider value={{ refresh, setRefresh }}>
      <div class='flex flex-col'>
        <div class=' py-[1vh] px-[0.7vw] border-2 border-transparent w-[24vw] flex flex-row bg-white rounded-md focus:outline-0'>
          <input
            className='form-control mr-2 w-[90%] text-black border-none '
            type='text'
            placeholder='Add new task'
            value={taskName}
            onChange={(e) => setTaskname(e.target.value)}
          />
          {!response ? (
            <button
              class='bg-[#cfb995] rounded-md p-[0.7%]'
              onClick={handleSubmit}
            >
              <PlusIcon />
            </button>
          ) : (
            <svg
              aria-hidden='true'
              class='inline w-8 h-8 text-gray-200 animate-spin bg-[#cfb995] rounded-md p-[0.7%]'
              viewBox='0 0 100 101'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            ></svg>
          )}
        </div>
        <Dropdowns trigger={refresh} setTrigger={setRefresh} />
      </div>
    </AppContext.Provider>
  );
}

export default TaskAdd;
