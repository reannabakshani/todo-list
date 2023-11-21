import { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: "800",
  subsets: ["latin"],
});

export default function List() {
  const [tasks, setTasks] = useState([]);

  type TaskType = {
    name: string;
    priority: string;
    list: string;
    due: string | null | Dayjs;
    status: string;
    dateMade: string;
  };

  useEffect(() => {
    const storage = localStorage.getItem("localTasks");
    if (storage) {
      setTasks(JSON.parse(storage));
      console.log(tasks);
    }
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-start justify-start flex-grow border-red-500 border-2 border-solid">
      <div>
        <div className={`${raleway.className}`}>your lists</div>
      </div>

      <div className={`${raleway.className}`}>all tasks</div>
      <div className=" flex flex-wrap gap-x-5 gap-y-5 w-full h-auto">
        {tasks.map((task: TaskType) => (
          <div
            className="h-auto w-3/12 bg-white border-red-500 border-2 border-solid"
            key={task.dateMade}
          >
            {task.name}
          </div>
        ))}
      </div>
    </div>
  );
}
