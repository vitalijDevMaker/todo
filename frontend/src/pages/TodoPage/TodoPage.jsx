import { useReducer } from "react"
import { TodoAdd } from "../../components/TodoAdd/TodoAdd"
import { TodoList } from "../../components/TodoList/TodoList"

const initialState = {
    list: []
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return {...state, list: [...state.list, {id: crypto.randomUUID(), text: action.payload}]};
        case 'DELETE_TASK':
            return {...state, list: state.list.filter((item) => (item.id !== action.payload))}
            default:
                return state

    }
}


export const TodoPage = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <>
        <h1>TODO Page</h1>
        <TodoAdd onAdd={(text) => {dispatch({type: 'ADD_TASK', payload: text})}} />
        <TodoList 
            list={state?.list} 
            onRemove={(id) => {dispatch({type: 'DELETE_TASK', payload: id})}} 
        />
    </>
}