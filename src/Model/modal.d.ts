export interface ITodoList {
    id: number,
    name: string,
    isCompleted: boolean
}

interface TodoState {
    todoList: ITodoList[];
  }