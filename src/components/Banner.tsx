import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <div className="flex justify-between  max-w-7xl mx-auto m-6 items-center " >
            <section>
                <p className=" font-extrabold text-6xl font-inter">Build Your Ideal</p>
                <p className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent text-6xl font-extrabold font-inter">Development Stack</p>
                <p className=" font-jakarta text-[20px] text-slate-600 py-8 ">Explore frontend, backend, database, and tooling options, <br />compare them side by side and put together the stack that fits your <br />next project.</p>
                <div className="flex gap-3 my-5">
                    <button className=" text-[14px] cursor-pointer rounded-[10px] px-3 py-2 text-white font-jakarta bg-gradient-to-r from-orange-500 to-pink-500 font-semibold">Explore Technologies</button>
                    <button className=" text-[14px] cursor-pointer border border-gray-300 font-jakarta text-gray-600 rounded-[10px] px-11 py-2 font-semibold">Learn More</button>
                </div>
                
            </section>
            <img src= {BannerImg} alt="" />
            
        </div>
    );
};

export default Banner;