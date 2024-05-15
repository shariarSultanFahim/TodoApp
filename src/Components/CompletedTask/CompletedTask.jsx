import { useEffect, useState } from "react";
import useDocumentTitle from "../../CustomHooks/useDocumentTitle";
import { getCompletedTodos } from "../Utility/localStorage";
import StatusBar from "../StatusBar/StatusBar";
import NavBar from "../NavBar/NavBar";
import TodoCard from "../TodoCard/TodoCard";
import {useContext} from "react";
import {AuthContext} from "../AuthProvider/AuthProvider"

const CompletedTask = () => {
    useDocumentTitle('Completed Tasks')
    const {triggerEffect} = useContext(AuthContext);
    const [completed, setCompleted] = useState([]);
    
    useEffect(()=>{
        const completed = getCompletedTodos();
        setCompleted(completed);
    },[triggerEffect])

    return (
        <div className="w-full h-full bg-[#D6D7EF]">
            <StatusBar/>
            <NavBar previousIcon={true} dateIcon={false} />

            <div className="w-full h-full overflow-auto">
                {
                    completed?.map(task => <TodoCard key={task.id} task={task} button = {false}/>)
                }
            </div>
        </div>
    );
};

export default CompletedTask;