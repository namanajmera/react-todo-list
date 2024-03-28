export interface ITodoList {
  id?: number;
  task: string;
  isComplete?: boolean;
}

interface TodoState {
  todoList: ITodoList[];
}
