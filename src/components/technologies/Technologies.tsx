import {use} from "react";
import type { Itechnologies } from "../../types/technologiesType";
import TechCards from "./TechCards";

export interface TechnologiesProps {
    technologiesPromise: Promise<Itechnologies[]>;
}

const Technologies = ({technologiesPromise}: TechnologiesProps) => {

    const technologies = use (technologiesPromise);
    return (
        <div className="container mx-auto max-w-7xl">

            <p className="font-bold text-[38px]">Explore the <span className="bg-gradient-to-r from-pink-400 to-pink-600 text-transparent bg-clip-text">Technologies</span></p>
            <p className="font-jakarta text-slate-500 text-[17px] py-1 ">Pick one technology per category to build your ideal stack. </p>

            <TechCards technologies={technologies}></TechCards>

        </div>
    )
        
};

export default Technologies;