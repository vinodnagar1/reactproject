import { createSlice,current } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:JSON.parse(localStorage.getItem("items"))?JSON.parse(localStorage.getItem("items")):[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
            let itemdata=JSON.stringify(current(state.items));
            localStorage.setItem("items",itemdata)
        },
        removeItem:(state,action)=>{
            state.items.splice(state.items.indexOf(action.payload),1)
            let itemdata=JSON.stringify(current(state.items));
            localStorage.setItem("items",itemdata)
        },
        clearAll:(state)=>{
            state.items.length=0;
            let itemdata=JSON.stringify(current(state.items));
            localStorage.setItem("items",itemdata)
        }
        
    }
})
export const {addItem,removeItem,clearAll}=cartSlice.actions
export default cartSlice.reducer;