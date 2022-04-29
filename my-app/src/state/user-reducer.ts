type StateType = {
    age: number
    childrenCount: number
    name: string
}
type ActionType = {
    type: string
    [key: string]: any
}


// согласно прописаному type в этом action (инструкции) я поменяю state
export const userReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT-AGE':
            let newState={...state};
            newState.age = state.age + 1;
            return newState;
        case 'INCREMENT-CHILDREN-COUNT':
            // state.childrenCount = state.childrenCount + 1;
            // return state;
            return {...state,childrenCount:state.childrenCount + 1}
        case 'CHANGE-NAME':{
            return {...state,name:action.newName}
        }
        default:
            throw new Error("I don't understand this type")
    }
}

export const incrementAgeAC=()=>{
    return{
        type: 'INCREMENT-AGE'
    }
}

export const incrementChildrenAC=()=>{
    return{
        type: 'INCREMENT-CHILDREN-COUNT'
    }
}

export const changeNameAC=(newName:string)=>{
    return{
        type:'CHANGE-NAME',
        newName
    }
}