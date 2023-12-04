import { createSlice,current } from "@reduxjs/toolkit";
const Userslice=createSlice({
    name:"user",
    initialState:{
        Userarray:JSON.parse(localStorage.getItem("userarray"))?JSON.parse(localStorage.getItem("userarray")):[],
        Islogedin:JSON.parse(localStorage.getItem("Islogedin"))?JSON.parse(localStorage.getItem("Islogedin")):true,
        
    },
    reducers:{
        adduser:(state,action)=>{
            state.Userarray.push(action.payload)
                
            let userdata=JSON.stringify(current(state.Userarray));
            localStorage.setItem("userarray",userdata)
            console.log(current(state.Userarray))
        },
        removeuser:(state,action)=>{
            state.Userarray.splice(state.Userarray.indexOf(action.payload),1)
            let userdata=JSON.stringify(current(state.Userarray));
            localStorage.setItem("userarray",userdata)
        },
        userlogin:(state,action)=>{
            state.Islogedin=action.payload
            
           /* let userlog=JSON.stringify(current(state.Islogedin));
            localStorage.setItem("Islogedin",userlog)*/
        }
    }
}

)
export const {adduser,removeuser,userlogin}=Userslice.actions;
export default Userslice.reducer;