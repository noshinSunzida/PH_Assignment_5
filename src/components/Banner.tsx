import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <div className="flex justify-between  max-w-7xl mx-auto m-6 items-center " >
            <section>
                <p className=" font-bold text-6xl">Build Your Ideal</p>
                <p className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent text-6xl font-bold">Development Stack</p>
                <p className=" font-sans text-lg text-slate-500 py-8 ">Explore frontend, backend, database, and tooling options, <br />compare them side by side and put together the stack that fits your <br />next project.</p>
                <div className="flex gap-3 my-5">
                    <button className="rounded-[10px] px-3 py-2 text-white font-sans bg-gradient-to-r from-orange-500 to-pink-500">Explore Technologies</button>
                    <button className="border border-gray-300 font-sans text-gray-600 rounded-[10px] px-11 py-2">Learn More</button>
                </div>
                
            </section>
            <img src= {BannerImg} alt="" />
            
        </div>
    );
};

export default Banner;