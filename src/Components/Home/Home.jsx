import useDocumentTitle from "../../CustomHooks/useDocumentTitle";
import Footer from "../Footer/Footer";
import StatusBar from "../StatusBar/StatusBar";
import NavBar from "../NavBar/NavBar";
import AllTasks from "../AllTasks/AllTasks";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home = () => {
  useDocumentTitle("Home");
  

  return (
    <div className="relative h-full flex flex-col justify-between bg-[#D6D7EF]">
      <header>
        <StatusBar/>
        <NavBar previousIcon={false} dateIcon={true}/>
      </header>
      
      <div className=" w-full h-full overflow-auto">

        <AllTasks/>

        <div className="absolute bottom-20 right-8 w-20 h-20 flex justify-center items-center bg-[#9395D3] rounded-full overflow-hidden">
            <Link to='/addtask' className=" text-3xl text-white"><FaPlus/></Link>
        </div>

      </div>
      <Footer/>
    </div>
  );
};

export default Home;
