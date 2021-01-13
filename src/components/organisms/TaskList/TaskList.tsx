import React, {FC} from "react";
import "./styles.scss"
import {TaskCard} from "../../molecules/TaskCard/TaskCard";
import {TaskT} from "../../../pages/Home";

type PropsT = {
   tasks: TaskT[]
   changeTaskStatus: (id: number, isCompleted: boolean) => void
}


const TaskList: FC<PropsT> = React.memo(({tasks, changeTaskStatus}) => {

   return (
      <div className={"task-list"}>
         {tasks.map((task, idx) => (
            <div className={"task-list__item"} key={"_task" + idx}>
               <TaskCard text={task.text}
                         id={task.id}
                         changeTaskStatus={changeTaskStatus}
                         isCompleted={task.isCompleted}/>
            </div>
         ))}

      </div>
   )
})

export {
   TaskList
}