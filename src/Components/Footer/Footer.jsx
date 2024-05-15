import { FaList } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="w-full h-[68px] flex justify-between items-center bg-white">
            <div className="w-1/2 flex flex-col items-center justify-center text-[#D6D7EF]">
                <Link to='/' className="text-xl"><FaList /></Link>
                <h1 className="text-sm">All</h1>
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center opacity-50">
                <Link to='/completedtast' className="text-2xl"><MdOutlineDone /></Link>
                <h1 className="text-sm">Completed</h1>
            </div>
        </div>
    );
};

export default Footer;