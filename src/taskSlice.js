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
state.tasks.pop();
}
}
})
export const {addTask, removeTask} = taskSlice.actions;
export default taskSlice.reducer;