
import { useState, type Dispatch, type SetStateAction } from "react";
import type { Itechnologies } from "../../types/technologiesType";


interface ITechnologyCardProps {
    technology: Itechnologies;
    selectedCards: Itechnologies[];
      setSelectedCards: Dispatch<SetStateAction<Itechnologies[]>>;
}

const TechnologyCard = ({ technology,selectedCards,setSelectedCards }: ITechnologyCardProps) => {

    const [isAdded, setIsAdded] = useState(false);


    return (
         <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <span className="badge badge-xs badge-warning">Most Popular</span>
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold"> {technology.name} </h2>
                    <span className="badge badge-xs badge-warning">Most Popular</span>
                </div>
                      <p>{technology.description}</p>
                  <div className="mt-6">
                        <button onClick={() => {setIsAdded(true); setSelectedCards([...selectedCards, technology])}}
                        className="btn btn-primary btn-block" 
                        disabled ={isAdded === true ? true : false}>Add to Stack</button>
                  </div>
              </div>
            </div>
        
    );
};

export default TechnologyCard;

