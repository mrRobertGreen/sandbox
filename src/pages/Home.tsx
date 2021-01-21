import React, {FC, useCallback, useEffect, useState} from "react";
import axios from 'axios'
import {Page} from "../components/templates/Page/Page";
import {InputBox} from "../components/molecules/InputBox/InputBox";
import {TaskList, TaskListPropsT} from "../components/organisms/TaskList/TaskList";
import Loadable from 'react-loadable';
import {Loader} from "../components/atoms/Loader/Loader";
import {TaskT} from "../../server/types";

type PropsT = {}

const loadableTaskListOptions: LoadableExport.OptionsWithRender<TaskListPropsT, any> = {
   loader: () => import("../components/organisms/TaskList/TaskList"),
   loading: Loader,
   render(loaded: any, props: TaskListPropsT): React.ReactNode {
      const TaskList = loaded.TaskList
      return <TaskList {...props}/>
   }
}

const LoadableTaskList = Loadable(loadableTaskListOptions)

/*
* Большие списки? Не беда! Пошли вон либы типа react-virtualized!
* Мы используем более современные решения, а именно INFINITY SCROLL!!!
* Отсутствие костылей, отличная производительность, модное и современное решение!
* */

const Home: FC<PropsT> = ({}) => {

   const [tasks, setTasks] = useState<TaskT[]>([])

   useEffect(() => {
      axios.get('/api/tasks/get')
          .then(res => {
             if (res.data.success) {
                setTasks(res.data.data)
             }
          })
   }, [])

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
         <LoadableTaskList tasks={tasks} changeTaskStatus={changeTaskStatus}/>
      </Page>
   )
}

const createFakeTasks = () => {
   let res: TaskT[] = []
   for (let i = 0; i < 100; i++) {
      res = [...res, {
         text: "task " + (i + 1),
         isCompleted: false,
         id: i,
      }]
   }
   return res
}

export {
   Home,
}
