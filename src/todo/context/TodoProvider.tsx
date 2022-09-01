import { TodoContext } from "./TodoContext"
import { TodoState } from "../interfaces/interfaces"
import { todoReducer } from "../context/todoReducer"
import { useReducer } from "react"


const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [{
        id: '1',
        desc: "make my homework",
        completed: false
    }],
    completed: 0,
    pending: 2
}


interface TodoProviderProps{
    children: JSX.Element | JSX.Element[] // the second parameter is in case we receive more elements
}


export const TodoProvider = ({ children }: TodoProviderProps) => {
    const [ todoState, dispatch ] = useReducer( todoReducer, INITIAL_STATE)
    
    return (
        <TodoContext.Provider value={{todoState}}>
            { children }
        </TodoContext.Provider>
    )
}
