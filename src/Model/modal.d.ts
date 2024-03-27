export interface ITodoList {
  id: number;
  task: string;
  isCompleted: boolean;
}

interface TodoState {
  todoList: ITodoList[];
}
