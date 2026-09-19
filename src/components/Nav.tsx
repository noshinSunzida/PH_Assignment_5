import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/logo-text.png";

const nav = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white">
            <div className=" hidden lg:flex justify-between max-w-7xl mx-auto p-4 my-1.5">
                <img src={Logo} alt="" />
            <ul className="flex items-center gap-5">
                <li><a href="" className="text-pink-600 font-jakarta">Home</a></li>
                <li><a href="" className="text-slate-600 font-jakarta">Technologies</a></li>
                <li><a href="" className="text-slate-600 font-jakarta">Projects</a></li>
                <li><a href="" className="text-slate-600 font-jakarta">About</a></li>
                <li><a href="" className="text-slate-600 font-jakarta">Contact</a></li>
                
            </ul>
            <div className="flex gap-3">
                <button className="text-slate-600 px-4 font-jakarta font-semibold text-[14px] cursor-pointer">Sign In</button>
                <button className="text-white bg-pink-600 rounded-3xl cursor-pointer px-5 py-2 font-jakarta font-semibold text-[14px]">Sign Up</button>
            </div>
            </div>

            <div className="flex lg:hidden justify-between items-center p-4">
                <span className="text-pink-600"><GiHamburgerMenu /></span>
                <img src={Logo} alt="" className="h-7"/>
                <div className="flex gap-2">
                    <button className="text-slate-600 px-4 font-jakarta font-semibold text-[11px]">Sign In</button>
                    <button className="text-white bg-pink-600 rounded-3xl px-3 py-2 font-jakarta font-semibold text-[11px]">Sign Up</button>
                </div>
            </div>
            <hr className="border-gray-200"></hr>
            
        </nav>
        
    );
};

export default nav;
