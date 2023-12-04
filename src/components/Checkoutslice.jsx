import { createSlice, current } from "@reduxjs/toolkit";
const Checkslice=createSlice({
    name:"Checkout",
    initialState:{
        checkarray:JSON.parse(localStorage.getItem("checkarray"))?JSON.parse(localStorage.getItem("checkarray")):[],
        
    },
    reducers:{
        add:(state,action)=>{
            state.checkarray.push(action.payload )

            let usearray=JSON.stringify(current(state.checkarray));
            localStorage.setItem("checkarray",usearray)
            


        },
        addall:(state,action)=>{
            state.checkarray=state.checkarray.concat(action.payload )
            let usearray=JSON.stringify((state.checkarray));
            localStorage.setItem("checkarray",usearray)
            
        }
    }
})
export const{add,addall}=Checkslice.actions;
export default Checkslice.reducer;