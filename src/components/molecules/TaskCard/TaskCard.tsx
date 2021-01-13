import React, {FC} from "react";
import "./styles.scss"
import {Label} from "../../atoms/Label/Label";
import {Checkbox} from "../../atoms/Checkbox/Checkbox";

type PropsT = {
   isCompleted: boolean
   text: string
   id: number
   changeTaskStatus: (id: number, isCompleted: boolean) => void
}

const TaskCard: FC<PropsT> = ({
                                 isCompleted,
                                 text,
                                 id,
                                 changeTaskStatus,
                              }) => {

   const onCheckboxClick = () => {
      changeTaskStatus(id, !isCompleted)
   }

   return (
      <div className={"task-card"}>
         <div className="task-card__label">
            <Label isCrossedOut={isCompleted}>
               {text}
            </Label>
         </div>
         <Checkbox isChecked={isCompleted} toggle={onCheckboxClick}/>
      </div>
   )
}

export {
   TaskCard
}