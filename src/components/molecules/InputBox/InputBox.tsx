import React, {FC, memo} from "react";
import "./styles.scss"
import { useForm } from "react-hook-form";
import {Input} from "../../atoms/Input/Input";
import {Button} from "../../atoms/Button/Button";

type PropsT = {
   addTask: (text: string) => void
}
type FormDataT = {
   text: string
}

/*
* Про произвожительность и перерисовки
* По умолчанию в React, изменение пропсов или состояния у компонента приводит к перерисовке
* всех его дочерних компонентов. В некоторых случаях, это не требуется. Тогда мы оборачиваем
* дочерний компонент в HOC React.memo() для того, чтобы перед рендернигом React делал поверхностное
* сравнение предыдущих и текущих пропсов и в случае равенства не выполнял перерисовку.
* */

let InputBox: FC<PropsT> = React.memo(({addTask}) => {

   const { register, handleSubmit, reset} = useForm<FormDataT>();

   const onSubmit = handleSubmit(({text}) => {
      addTask(text)
      reset()
   })

   return (
      <form className={"input-box"} onSubmit={onSubmit}>
         <div className="input-box__input" >
            <Input name={"text"} inputRef={register({
               required: true,
            })}/>
         </div>
         <div className="input-box__button">
            <Button type={"submit"}>
               Create
            </Button>
         </div>
      </form>
   )
})

export {
   InputBox
}