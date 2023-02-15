import { Notification } from "../components/notification";

export function addTask(nameTask, index) {
  return (
    <li key={index} id={index}>
      {
        index === 0 ? <Notification name={nameTask} class={"rounded-xl"} />
         : 
         <Notification name={nameTask} class={"rounded-xl"} />
      }
    </li>
  );
}
