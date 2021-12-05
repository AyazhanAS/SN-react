import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCSES = "INITIALIZED_SUCSES"

let initialState = {
    initialized:false,
}

export const appReduser = (state = initialState, action)=>{
    switch(action.type){
        case INITIALIZED_SUCSES:
            return {
                ...state,
                initialized:true
            }
        default:
            return state;
    }
    
}

export const initializedSucses = ()=>({type:INITIALIZED_SUCSES})

export const initializeApp = ()=>(dispatch)=>{
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
    .then(()=>{
        dispatch(initializedSucses());
    })
    

}