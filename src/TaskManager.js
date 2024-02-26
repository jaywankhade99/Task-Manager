import { useDispatch, useSelector } from "react-redux";
import { useState} from "react";
import { addTask } from "./taskSlice";

const TastManager = ()=>{
    const[addTaskflag, setAddTask]= useState(false);
    const [taskDetails, setTaskDetails]= useState({
        taskName:"",
        isActive:true,
        description:"",
    })
    const dispatch = useDispatch();


    const handleAddTask=(task)=>{
      dispatch(addTask(task));
      setAddTask(false);
      setTaskDetails({taskName:"",isActive:null,description:""})
    }

    const tasks = useSelector(state=>state.task.tasks);

    const addTaskForm =()=> {
      const {taskName, isActive, description}= taskDetails;
        return (<div className="grid">
             <div className="border-b border-gray-900/10">
              {/* //line 1 */}
              <div className="mt-10 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="tadk-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                   Task Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="task-name"
                      id="task-name"
                      required={true}
                      value={taskName}
                      onChange={(e)=>setTaskDetails({
                        ...taskDetails,taskName:e.target.value
                      })}
                      className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="task-description"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Task Description
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="task-description"
                      id="task-description"
                      value={description}
                      onChange={(e) =>
                      setTaskDetails({
                        ...taskDetails,description:e.target.value
                      })
                      }
                      className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="status"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Status
                  </label>
                  <div className="mt-2">
                    <input
                      name="status"
                      id="status"
                      type="checkbox"
                      required
                      checked={isActive}
                      onChange={(e) =>
                        setTaskDetails({
                          ...taskDetails,
                          isActive: !isActive,
                        })
                      }
                      className=""
                    >
                    </input>
                  </div>
                  
                </div>
                {/* <div className="sm:col-span-1">
                  <label
                    htmlFor="api-type"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Api Type
                  </label>
                  <div className="mt-2">
                    <select
                      id="api-type"
                      name="api-type"
                      value={apiType}
                      required
                      onChange={(e) =>
                        setApiDetails({
                          ...apiDetails,
                          apiType: e.target.value,
                        })
                      }
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Other</option>
                      <option>Recharge</option>
                      <option>BBPS</option>
                      <option>SMS</option>
                    </select>
                  </div>
                </div> */}
               </div>
              </div>
              <div className="mt-6 grid grid-cols-1 items-center gap-x-6">
          <div className="flex px-16 justify-between">
            <button
              type="button"
              onClick={() => setAddTask(false)}
              className="text-sm font-semibold leading-6 rounded-md hover:bg-slate-400 bg-slate-300 text-gray-900 w-full max-w-60"
            >
              Cancel
            </button>
            <button
              onClick={() => handleAddTask(taskDetails)}
              disabled={!(taskName && isActive)}
              className=" w-full max-w-60 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
            >
              Save
            </button>
          </div>
        </div>
        </div>
    )}

    return(
        <div className="m-2 bg-slate-200  h-screen">
            <button 
            className="px-4 py-2 border border-black m-4 bg-lime-300 shadow-lg"
            onClick={()=>setAddTask(!addTaskflag)}>Add Task</button>

          {addTaskflag && 
            <div className="m-4">
              {addTaskForm()}
            </div>}

            {tasks && tasks.map((item,i)=><div key={i} className="row flex justify-between mx-5 my-3">
              <div className="p-2 text-lg text-teal-600">{item.taskName}</div>
              <div className="p-2">{item.description}</div>
              <button className="px-3 py-2 bg-blue-500" >Delete</button>
            </div>)}
        </div>
    )
}
export default TastManager;