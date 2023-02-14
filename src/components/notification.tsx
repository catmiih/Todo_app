import { MdCheck } from "react-icons/md";
import { CgClose } from "react-icons/cg";

export function Notification() {
  return (
    <div className="flex w-full p-5 items-center justify-between shadow-2xl border-gray-600/10 dark:border-gray-100/10 border-2 bg-gray-100 dark:bg-slate-800 dark:text-zinc-100 transition-all duration-500">
      <label className="flex items-center justify-between w-full cursor-pointer group">
        <div className="flex items-center">
          <input
            id="checked-checkbox"
            className="peer appearance-none text-transparent w-8 h-8 rounded-full checked:bg-gradient-to-tl from-fuchsia-500 to-cyan-300 checked:border-0 checked:text-white border-2 border-gray-300 hover:border-fuchsia-500/50 hover:transition-all hover:duration-300 ease-in-out duration-300"
            type="checkbox"
            name=""
          />
          <MdCheck className="absolute m-2 opacity-0 peer-checked:opacity-100 text-white" />
          <p className="peer-checked:line-through peer-checked:opacity-25 mx-5">Nome da tarefa</p>
        </div>

        <button className="opacity-0 group-hover:opacity-100 transition-all duration-500 text-white">
          <CgClose className="text-sm mx-5 hover:scale-105 hover:duration-300 ease-in-out duration-300" />
        </button>
      </label>
    </div>
  );
}
