import { createContext, useContext } from "react";


export type Todo = {
  item: string;
  completed: boolean;
};

export const AppContext = createContext<Todo[] | undefined >(undefined);

export function useAppContext(){
    const todos = useContext(AppContext)
    // if (todos === undefined){
    //   throw new Error("Todos should be always not be undefined")
    // }
    return todos;
} 