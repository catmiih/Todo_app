import { Notification } from "../components/notification";

export function addTask(nameTask, index, checked) {
  return (
    <li key={index} id={index}>
      {
        index === 0 ? <Notification id={index} name={nameTask} class={"rounded-t-xl lg:rounded-none "} completed={false} />
         : 
         <Notification name={nameTask} completed={false}/>
      }
    </li>
  );
}

export function deleteTask(list,id) {
  //list.splice(0, id);
}
