import { MdCheck } from "react-icons/md";
import { CgClose } from "react-icons/cg";

interface notifyProps {
  name: string
  class:string
}

export function Notification(props : notifyProps) {

  return (
    <div className={props.class+"flex w-full p-5 items-center justify-between shadow-2xl border-gray-600/10 dark:border-gray-100/10 border-[1px] bg-gray-100 dark:bg-slate-800 dark:text-zinc-100 transition-all duration-500"} >
      <label className="flex items-center justify-between w-full cursor-pointer group">
        <div className="flex items-center">
          <input
            id="checked-checkbox"
            className="peer appearance-none text-transparent w-5 h-5 rounded-full checked:bg-gradient-to-tl from-fuchsia-500 to-cyan-300 checked:border-0 checked:text-white border-[1px] border-gray-300 hover:border-fuchsia-500/50 hover:transition-all hover:duration-300 ease-in-out duration-300"
            type="checkbox"
            name=""
          />
          <MdCheck className="absolute m-[.1rem] opacity-0 peer-checked:opacity-100 text-white" />
          <p className="peer-checked:line-through peer-checked:opacity-25 mx-4">{props.name}</p>
        </div>

        <button className="opacity-0 group-hover:opacity-100 transition-all duration-500 text-white">
          <CgClose className="text-sm mx-5 hover:scale-105 hover:duration-300 ease-in-out duration-300" />
        </button>
      </label>
    </div>
  );
}
