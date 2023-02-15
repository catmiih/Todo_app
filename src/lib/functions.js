import { Notification } from "../components/notification";

export function addTask(nameTask, index) {
  return (
    <li key={index} id={index}>
      {
        index === 0 ? <Notification name={nameTask} class={"rounded-t-xl lg:rounded-none "} />
         : 
         <Notification name={nameTask} />
      }
    </li>
  );
}
