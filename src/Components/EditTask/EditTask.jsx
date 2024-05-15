import { Link, useNavigate, useParams } from "react-router-dom";
import useDocumentTitle from "../../CustomHooks/useDocumentTitle";
import StatusBar from "../StatusBar/StatusBar";
import NavBar from "../NavBar/NavBar";
import { editTodo } from "../Utility/localStorage";
import {useContext} from "react";
import {AuthContext} from "../AuthProvider/AuthProvider"

const EditTask = () => {
    useDocumentTitle('Edit Tasks')
    const {triggerAllEffects} = useContext(AuthContext);
    const {id} = useParams();
    const navigate = useNavigate();

    const handleEdit = (e) =>{
        e.preventDefault();
        const idInt = parseInt(id);
        const title = e.target.title.value;
        const subTitle = e.target.subTitle.value;
        const updatedTask = {id:idInt,title,subTitle};
        editTodo(id,updatedTask);
        triggerAllEffects();
        e.target.reset();
        navigate('/');
    }
    return (
        <div>
            <StatusBar/>
            <NavBar previousIcon={true} dateIcon={false}/>
            <form onSubmit={handleEdit} className="p-2 space-y-12">
                <div className="my-6 px-2 flex flex-col gap-8">
                    <input className="border-b border-black outline-none" type="text" name="title" placeholder="Title"/>
                    <input className="border-b border-black outline-none" type="text" name="subTitle" placeholder="Detail"/>
                </div>
                <div className="flex justify-between gap-8 text-white">
                    <button className="w-full py-6 bg-[#9395D3] rounded-2xl">Update</button>
                    <Link to='/' className="w-full py-6 bg-[#9395D3] rounded-2xl text-center">Cancle</Link>
                </div>
            </form>
        </div>
    );
};

export default EditTask;