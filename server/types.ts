export type BaseResT<DT> = {
    success: boolean
    data?: DT
    message?: string
}
export type TaskT = {
    isCompleted: boolean
    text: string
    id: number
}
export type TasksGetResDataT = TaskT[]