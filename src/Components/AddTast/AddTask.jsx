import useDocumentTitle from "../../CustomHooks/useDocumentTitle";
import { addTodo } from "../Utility/localStorage";
import StatusBar from "../StatusBar/StatusBar";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../AuthProvider/AuthProvider"

const AddTask = () => {
  useDocumentTitle("Add Task");
  const {triggerAllEffects} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddTodo = (e) => {
    e.preventDefault();
    const id = Date.now();
    const title = e.target.title.value;
    const subTitle = e.target.subTitle.value;
    const todo = {
      id,
      title,
      subTitle,
    };
    addTodo(todo);
    triggerAllEffects();
    e.target.reset();
    navigate('/');
  };

 

  return (
    <div>
            <StatusBar/>
            <NavBar previousIcon={true} dateIcon={false}/>
            <form onSubmit={handleAddTodo} className="p-2 space-y-12">
                <div className="my-6 px-2 flex flex-col gap-8">
                    <input className="border-b border-black outline-none" type="text" name="title" placeholder="Title"/>
                    <input className="border-b border-black outline-none" type="text" name="subTitle" placeholder="Detail"/>
                </div>
                <div className="flex justify-between gap-8 text-white">
                    <button type="submit" className="w-full py-6 bg-[#9395D3] rounded-2xl font-bold text-xl">ADD</button>
                </div>
            </form>
        </div>
  );
};

export default AddTask;
