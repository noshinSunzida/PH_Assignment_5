import Logo from "../assets/logo-text.png";

const nav = () => {
    return (
        <nav>
            <div className="flex justify-between max-w-7xl mx-auto p-4 my-2">
                <img src={Logo} alt="" />
            <ul className="flex items-center gap-3">
                <li className="text-pink-600">Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
                
            </ul>
            <div className="flex gap-3">
                <button className="text-gray-800">Sign In</button>
                <button className="text-white bg-pink-600 rounded-3xl px-3 py-1">Sign Up</button>
            </div>
            </div>
            <hr className="border-gray-200"></hr>
            
        </nav>
        
    );
};

export default nav;
