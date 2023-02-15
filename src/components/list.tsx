import { addTask } from "../lib/functions.js";

interface listProps {
    list: Array<string>
}

export function List({ list }: listProps) {
    return (
        <div className="w-screen px-8 lg:px-0 lg:w-2/4 h-full pb-14 rounded-t-xl lg:rounded-none">
            <ul id="taskList">
                {list.map((item, i) => {
                    return addTask(item,i)
                })}
            </ul>

            <div className="flex w-full rounded-b-xl lg:rounded-none p-5 items-center justify-between shadow-2xl border-gray-600/10 dark:border-gray-100/10 border-[1px] bg-gray-100 dark:bg-slate-800 dark:text-zinc-100 transition-all duration-500">
                <label className="flex items-center justify-between w-full group">
                    <div className="flex items-center justify-between w-full font-bold mx-5">
                        <p className="opacity-40">0 items left</p>

                        <div className="justify-between hidden lg:flex">

                            <button>
                                <p className="opacity-40 hover:opacity-80 mx-3">All</p>
                            </button>

                            <button>
                                <p className="opacity-40 hover:opacity-80 mx-3">Active</p>
                            </button>
                            <button>
                                <p className="opacity-40 hover:opacity-80 mx-3">Completed</p>
                            </button>
                        </div>

                        <button className="opacity-40 hover:opacity-80">
                            <p>Clear Completed</p>
                        </button>
                    </div>
                </label>
            </div>
        </div>
    )
}

function AddTask(arg0: string) {
    throw new Error("Function not implemented.");
}
