import { FaWifi } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { TiBatteryCharge } from "react-icons/ti";

const StatusBar = () => {
    return (
        <div className="w-full h-[44px] px-2 bg-[#9395d3] text-white flex justify-between items-center">
            <div>
                <h1>9:41</h1>
            </div>
            <div className="flex gap-2 justify-between items-center">
                <FaWifi />
                <GiNetworkBars />
                <TiBatteryCharge />
            </div>
        </div>
    );
};

export default StatusBar;