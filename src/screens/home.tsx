import { useState } from "react";

import { Banner } from "../components/banner";
import { List } from "../components/list";

export function Home() {

  const [task, setTask] = useState("");
  const [list, setList] = useState<string[]>([]);

  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.trim() !== "") {
      setList([...list, task.trim()]);
      setTask("");
    }
  };

  return (
    <div className="overflow-hidden">
      <Banner onTaskChange={handleTaskChange} onTaskSubmit={handleTaskSubmit}/>

      <div className="flex w-full justify-center lg:mt-[-4rem] mt-[-1rem]">
        <List list={list}/>
      </div>
      <p className="text-center text-gray-700 dark:text-gray-400 transition-all duration-150">Drag and drop to reorder list</p>
    </div>
  );
}
