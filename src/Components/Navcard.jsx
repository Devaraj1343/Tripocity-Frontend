import Logo from "./logo"
import { X } from 'lucide-react';
import { MenuItems } from "../common/constants";
import ToggleTheme from "./Toggle-Theme";

export default function({onClose,showNavcard}){
    return (
      <div
     className={`w-[300px] h-[calc(100vh)] flex flex-col gap-[25px] fixed top-5 right-0 p-2 bg-bg-light dark:bg-bg-dark z-50 shadow-lg ${showNavcard ? 'animate-slideIn' : 'animate-slideOut'}`}
  >
        <div className="flex justify-between items-center ">
          <Logo />
          <X className="cursor-pointer" onClick={onClose}/>
        </div>

        <div>
          <ul className="flex flex-col gap-5">
            {MenuItems.map((item, index) => (
              <li
                key={index}
                className=" cursor-pointer  px-2 py-1 rounded-sm hover:bg-primary hover:text-white transition-colors duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>


        <div className="cursor-pointer px-2 py-1 bg-red-500 text-white rounded-[6px] w-[100px]">
            <span className="flex items-center justify-center">LOGIN</span>
        </div>
      </div>
    );
}