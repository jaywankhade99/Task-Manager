import { configureStore} from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

const appStore = configureStore({
    reducer:{
        task: taskReducer
    }
})
export default appStore;