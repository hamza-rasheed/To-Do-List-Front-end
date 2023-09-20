"use client";
import React, { useState, useEffect } from "react";
import TaskAdd from "@/components/taskAdd";
function Dashboard() {
  return (
    <div class='flex h-screen flex-col'>
      <div class="bg-scroll w-[100vw] h-[100vh] bg-[url('../public/assets/images/image.webp')] bg-cover bg-center">
        <div class='w-full h-full  flex flex-col justify-center items-center backdrop-blur-sm space-y-2'>
          <div class=" w-full h-full sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 my-6  bg-[url('../public/assets/images/profile.jpg')] bg-cover bg-start rounded-full ring-4 ring-gray-300"></div>
          <TaskAdd />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
