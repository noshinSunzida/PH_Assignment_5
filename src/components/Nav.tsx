import Logo from "../assets/logo-text.png";

const nav = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white">
            <div className=" flex justify-between max-w-7xl mx-auto p-4 my-1.5">
                <img src={Logo} alt="" />
            <ul className="flex items-center gap-5">
                <li className="text-pink-600 font-jakarta">Home</li>
                <li className="text-slate-600 font-jakarta">Technologies</li>
                <li className="text-slate-600 font-jakarta">Projects</li>
                <li className="text-slate-600 font-jakarta">About</li>
                <li className="text-slate-600 font-jakarta">Contact</li>
                
            </ul>
            <div className="flex gap-3">
                <button className="text-slate-600 px-4 font-jakarta font-semibold text-[14px] cursor-pointer">Sign In</button>
                <button className="text-white bg-pink-600 rounded-3xl cursor-pointer px-5 py-2 font-jakarta font-semibold text-[14px]">Sign Up</button>
            </div>
            </div>
            <hr className="border-gray-200"></hr>
            
        </nav>
        
    );
};

export default nav;
