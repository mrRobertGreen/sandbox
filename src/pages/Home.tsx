import React, {FC, useCallback, useEffect, useState} from "react";
import {Page} from "../components/templates/Page/Page";
import {InputBox} from "../components/molecules/InputBox/InputBox";
import {TaskList} from "../components/organisms/TaskList/TaskList";

type PropsT = {}

export type TaskT = {
   isCompleted: boolean
   text: string
   id: number
}

const createFakeTasks = () => {
   let res: TaskT[] = []
   for (let i = 0; i < 10; i++) {
      res = [...res, {
         text: "task " + (i + 1),
         isCompleted: false,
         id: i,
      }]
   }
   return res
}


/*
* Большие списки? Не беда! Пошли вон либы типа react-virtualized!
* Мы используем более современные решения, а именно INFINITY SCROLL!!!
* Отсутствие костылей, отличная производительность, модное и современное решение!
* */

const Home: FC<PropsT> = ({}) => {

   const [tasks, setTasks] = useState<TaskT[]>(createFakeTasks())

   const addTask = useCallback((text: string) => {
      const task: TaskT = {
         text: text,
         isCompleted: false,
         id: Date.now(),
      }
      setTasks(tasks => [...tasks, task])
   }, [])

   const changeTaskStatus = useCallback((id: number, isCompleted: boolean) => {
      setTasks(tasks => tasks.map(t => {
         if (t.id === id) {
            return {...t, isCompleted: isCompleted}
         }
         else return t
      }))
   }, [tasks])

   return (
      <Page>
         <InputBox addTask={addTask}/>
         <TaskList tasks={tasks} changeTaskStatus={changeTaskStatus}/>
      </Page>
   )
}

export {
   Home
}
