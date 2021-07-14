import { Increase , Decrease } from "../actions";

let  initState = 0;

export const changeNumber = (state = initState , action)=>{
       switch(action.type){
           case "INCREASE":{
             return  state + 1;
           }
           case "DECREASE":{
             return state - 1;
           }
           default: return state;
       }
}