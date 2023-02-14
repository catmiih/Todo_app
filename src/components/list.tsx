import { Notification } from "./notification";

export function List() {
    return (
        <div className="w-screen px-8 lg:px-0 lg:w-2/4 h-full pb-14">
            <ul>
                <li>
                    <Notification />
                </li>
                <li>
                    <Notification />
                </li>
                <li>
                    <Notification />
                </li>
                <li>
                    <Notification />
                </li>
            </ul>

            <div className="flex w-full p-5 items-center justify-between shadow-2xl border-gray-600/10 dark:border-gray-100/10 border-2 bg-gray-100 dark:bg-slate-800 dark:text-zinc-100 transition-all duration-500">
                <label className="flex items-center justify-between w-full group">
                    <div className="flex items-center justify-between w-full font-bold mx-5">
                        <p className="opacity-40">0 items left</p>

                        <div className="justify-between">

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