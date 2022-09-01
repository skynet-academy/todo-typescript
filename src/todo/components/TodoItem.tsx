import { Todo } from "../interfaces/interfaces"
import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import { useTodos } from "../hooks/useTodos"


interface TodoProps{
    todo: Todo
}

export const TodoItem = ({todo}: TodoProps) => {
    //const { toggleTodo } = useContext( TodoContext )

    //const handleDoubleClick = () => {
    //    toggleTodo(todo.id) 
    //}
    const { toggleTodo } = useTodos()
    return(
        <li style={{
                cursor: 'pointer',
                textDecoration: todo.completed? 'line-through': ''
            }}
            onDoubleClick={ () => toggleTodo(todo.id) }>
            {todo.desc}
        </li>
    )
}
