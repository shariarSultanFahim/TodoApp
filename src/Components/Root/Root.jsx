// import { DeviceFrameset } from "react-device-frameset";
// import "react-device-frameset/styles/marvel-devices.min.css";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    // <div className="flex justify-center items-center">
    //   <DeviceFrameset device="iPhone X" color="black">
    //     <Outlet />
    //   </DeviceFrameset>
    // </div>
    <div className="mx-auto w-[414px] h-[896px]  border-2 border-black ">
        <Outlet/>
    </div>
  );
};

export default Root;
