import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "task",
    initialState:{
        tasks:[]
    },
reducers:{
addTask:(state,action)=>{
state.tasks.push(action.payload);
},
removeTask:(state,action)=>{
state.tasks = state.tasks.filter((item,id)=> id !== action.payload)
},
editTask:(state,action)=>{
    const {editedTask,id}= action.payload;
    console.log(editedTask,id)
    state.tasks.filter((item,i)=>((i===id) ? state.tasks[i] = editedTask : null))
   
}
}
})
export const {addTask, removeTask, editTask} = taskSlice.actions;
export default taskSlice.reducer;