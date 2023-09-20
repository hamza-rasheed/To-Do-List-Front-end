import React from "react";
import ListItems from "@/components/items";

export default function ViewTodos({ data }) {
  console.log("Data is", data);
  return (
    <>
      <div class='w-[24vw] border-gray-200  border-2 rounded-lg bg-gray-200/[0.75] overflow-auto max-h-[45vh]'>
        {data.map((item, index) => (
          <ListItems
            taskId={item._id}
            title={item.taskName}
            completed={item.completed}
            time={item.timestamp}
            key={index}
          />
        ))}
      </div>
    </>
  );
}
