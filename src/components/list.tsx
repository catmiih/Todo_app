import { useState } from "react";
import { addTask } from "../lib/functions.js";

interface listProps {
    list?: Array<{ name: string; checked: boolean }>;
}

export function List({ list }: listProps) {
    const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

    const filteredList = list?.filter((item) => {
        if (filter === "all") {
            return true;
        } else if (filter === "active") {
            return !item.checked;
        } else if (filter === "completed") {
            return item.checked;
        }
        return false;
    });

    function clearCompletedTasks(currentList: { name: string; checked: boolean }[]): { name: string; checked: boolean }[] {
        return currentList.filter((item) => !item.checked);
    }

    const countItems = filteredList?.filter((item) => !item.checked).length ?? 0;

    return (
        <div className="w-screen px-8 lg:px-0 lg:w-2/4 h-full pb-14 rounded-t-xl lg:rounded-none">
            <ul id="taskList">
                {filteredList?.length ?? 0 > 1 ? (
                    filteredList?.map((item, i) => {
                        return addTask(item.name, i);
                    })
                ) : (
                    <div
                        className={
                            "flex rounded-t-xl lg:rounded-none w-full h-28 p-8 px-5 items-start justify-center shadow-2xl border-gray-600/10 dark:border-gray-100/10 border-[1px] bg-gray-100 dark:bg-slate-800 dark:text-zinc-100 transition-all duration-500 font-light"
                        }
                    >
                        <p>None task to view</p>
                    </div>
                )}
            </ul>

            <div className="flex w-full rounded-b-xl lg:rounded-none py-4 items-center justify-between shadow-2xl border-gray-600/10 dark:border-gray-100/10 border-[1px] bg-gray-100 dark:bg-slate-800 dark:text-zinc-100 transition-all duration-500">
                <label className="flex items-center justify-between w-full group">
                    <div className="flex items-center justify-between w-full text-[.8rem] lg:font-bold mx-5">
                        <p className="opacity-40">{countItems} items left</p>

                        <div className="justify-between hidden lg:flex">
                            <button onClick={() => setFilter("all")}>
                                <p className={`${filter === "all" ? "font-bold" : "opacity-40"} hover:opacity-80 mx-2`}>All</p>
                            </button>
                            <button onClick={() => setFilter("active")}>
                                <p className={`${filter === "active" ? "font-bold" : "opacity-40"} hover:opacity-80 mx-2`}>Active</p>
                            </button>
                            <button onClick={() => setFilter("completed")}>
                                <p className={`${filter === "completed" ? "font-bold" : "opacity-40"} hover:opacity-80 mx-2`}>Completed</p>
                            </button>
                        </div>

                        <button
                            className="opacity-40 hover:opacity-80"
                            onClick={() => {
                                const newList = clearCompletedTasks(list ?? []);
                                console.log(newList);
                            }}
                        >
                            <p>Clear Completed</p>
                        </button>
                    </div>
                </label>
            </div>

            <div className="lg:hidden flex w-full mt-5 rounded-md justify-center lg:rounded-none p-3 items-center shadow-2xl border-gray-600/10 dark:border-gray-100/10 border-[1px] bg-gray-100 dark:bg-slate-800 dark:text-zinc-100 transition-all duration-500">


                <div className="justify-between">

                    <button>
                        <p className="opacity-40 hover:opacity-80 mx-2">All</p>
                    </button>

                    <button>
                        <p className="opacity-40 hover:opacity-80 mx-2">Active</p>
                    </button>
                    <button>
                        <p className="opacity-40 hover:opacity-80 mx-2">Completed</p>
                    </button>
                </div>

            </div>
        </div>
    )
}
