import { FaArrowLeft } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavBar = ({previousIcon,dateIcon}) => {

    return (
        <div className="w-full h-[68px] px-2 flex justify-between items-center bg-[#9395d3] text-white font-bold text-xl">
             <div className="flex gap-6 items-center">
                {
                    (previousIcon)?
                    <Link to='/'><FaArrowLeft/></Link>
                    :
                    ''
                }
                <div>TODO APP</div>
             </div>
             {
                (dateIcon)?
                <div className="text-3xl"><BsCalendar2Date/></div>
                :
                ''
             }
        </div>
    );
};

export default NavBar;