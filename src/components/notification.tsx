import { MdCheck } from "react-icons/md";

export function Notification() {
  return (
    <div className="flex w-full p-5 items-center rounded-lg shadow-2xl bg-gray-100 text-black">
      <label className="flex items-center">
        <input
          id="checked-checkbox"
          className="appearance-none text-transparent border-gray-800 border-2 w-8 h-8 rounded-full checked:bg-gradient-to-r from-violet-500 to-fuchsia-500 checked:border-0 checked:text-white"
          type="checkbox"
          name=""
        />
        <MdCheck className="absolute m-2 text-white"/>
      </label>
      <p className="text-bold mx-5">Nome da tarefa</p>
    </div>
  );
}
