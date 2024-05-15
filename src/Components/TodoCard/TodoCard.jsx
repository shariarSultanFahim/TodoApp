import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { addCompletedTodo, deleteTodo } from "../Utility/localStorage";
import { Link } from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../AuthProvider/AuthProvider"

const TodoCard = ({task, button}) => {
    const {id,title,subTitle} = task;
    const {triggerAllEffects} = useContext(AuthContext);

    const handleCompleteTask = () =>{
        addCompletedTodo(task);
        deleteTodo(id);
        triggerAllEffects();
    }
    const handleDelete = () =>{
        deleteTodo(id);
        triggerAllEffects();
    }
    return (
        <div className="mx-auto w-[96%] h-[82px] mt-4 p-4 rounded-lg shadow-xl bg-white text-[#9395d3] font-semibold flex justify-between items-center">
            <div>
                <div><h1 className="text-lg">{title}</h1></div>
                <div><h1 className="text-sm text-black font-normal">{subTitle}</h1></div>
            </div>
            {(button)?
                <div className="flex gap-4 text-2xl">
                    <Link to={`/edittask/${id}`}><FiEdit2/></Link>
                    <button onClick={handleDelete}><RiDeleteBin6Line /></button>
                    <button onClick={handleCompleteTask}><IoCheckmarkDoneCircleOutline /></button>
                </div> :''
            }
        </div>
    );
};


export default TodoCard;