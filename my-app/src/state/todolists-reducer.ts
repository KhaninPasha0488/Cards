import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

export const todolistsReducer = (state: Array<TodolistType>, action: todolistsReducerACtype) => {
    switch (action.type) {
        // case 'CHANGE-FILTER': {
        //     return state
        // }
        case "REMOVE-TODOLIST":{
            return state.filter(el=>el.id!==action.payload.id)
        }
        case 'ADD_TODOLIST':{
          
            return [...state,{id:v1,title:actio.payload.title}]
        }
        default:
            return state
    }
}

type todolistsReducerACtype = RemoveTodolistACType

type RemoveTodolistACType=ReturnType<typeof RemoveTodolistAC>
export const RemoveTodolistAC = (todolistId1:string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            id: todolistId1
        }
    }as const
}
type addTodoListACType=ReturnType<typeof addTodoListAC>

const  addTodoListACType=(title:string)=>{
    return{
        type:'ADD-TODOLIST',
        payload:{id,}

    }as const
}
type changeFilterACType ={  type: 'CHANGE-TODOLIST-FILTER',
    id:string,
    filter:FilterValuesType}
export const changeFilterAC=(id:string,filter:FilterValuesType)=>{
    return {
        type:'CHANGE-TODOLIST-FILTER',
        id,filter
    }as const
}