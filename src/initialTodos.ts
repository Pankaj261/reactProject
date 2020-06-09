type Todo = {
  text: string;
  complete: boolean;
};

type AddTodo = (newTodo: string) => void; export const initialTodos: Array<Todo> = [
  {
    text: "Walk the dog",
    complete: true
  },
  {
    text: "Make app",
    complete: false
  }
];
