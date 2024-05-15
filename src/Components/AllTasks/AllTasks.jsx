import { useEffect, useState } from "react";
import { getTodoList } from "../Utility/localStorage";
import TodoCard from "../TodoCard/TodoCard";
import {useContext} from "react";
import {AuthContext} from "../AuthProvider/AuthProvider"

const AllTasks = () => {

    const [tasks,setTasks] = useState([]);
    const {triggerEffect} = useContext(AuthContext);

    useEffect(()=>{
        const tasks = getTodoList();
        setTasks(tasks);
    },[triggerEffect])

    return (
        <div className="flex flex-col">
            {
                tasks?.map(task => 
                <TodoCard key={task.id} task={task} button = {true} 
                />)
            }
        </div>
    );
};

export default AllTasks;