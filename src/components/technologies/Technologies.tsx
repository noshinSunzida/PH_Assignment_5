import {use} from "react";
import type { Itechnologies } from "../../types/technologiesType";
import TechCards from "./TechCards";

export interface TechnologiesProps {
    technologiesPromise: Promise<Itechnologies[]>;
}

const Technologies = ({technologiesPromise}: TechnologiesProps) => {

    const technologies = use (technologiesPromise);
    return <div>
        <TechCards technologies={technologies}></TechCards>
    </div>;
};

export default Technologies;