import { type Dispatch, type SetStateAction } from "react";
import type { Itechnologies } from "../../types/technologiesType";
import { FaStar } from "react-icons/fa";
import { PiCheckBold } from "react-icons/pi";
import { toast } from "react-toastify";


interface ITechnologyCardProps {
    technology: Itechnologies;
    selectedCards: Itechnologies[];
      setSelectedCards: Dispatch<SetStateAction<Itechnologies[]>>;
}

const TechnologyCard = ({ technology,selectedCards,setSelectedCards }: ITechnologyCardProps) => {

    const isSelected = selectedCards.some(selectedCards => selectedCards.id === technology.id);


    return (
         <div className="card bg-base-100 shadow-2xs border border-slate-100 rounded-2xl">
            <div className="card-body">

              <div className="flex justify-between">
                  <img src={technology.icon} alt="" className="w-7 h-7"/>
                    <span className="badge font-jakarta font-semibold text-[12px] bg-pink-100 text-pink-600">{technology.badge}</span>
                </div>
              
              
                
                  <h2 className="text-[20px] font-bold font-jakarta text-[#0F172A]"> {technology.name} </h2>
                    
                
                      <p className="font-jakarta text-slate-500 text-[12px]">{technology.description}</p>
                      <hr className="border-slate-200"/>

                <div className="flex justify-between items-center mt-1">
                     <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-sm text-[11px] font-jakarta font-semibold">
                        {technology.category}</span>

                <span className="text-slate-500 text-[11px] font-jakarta">{technology.difficulty}</span>

                <span className="flex items-center gap-1 text-slate-700 text-sm font-jakarta font-semibold text-[11px]">
            <span className="text-yellow-400"><FaStar /></span>{technology.rating}</span>
          
          
                </div>
                      
                  <div>
                        <button onClick={() => {setSelectedCards([...selectedCards, technology])
                                toast.success(`${technology.name} added to stack`, {position:"bottom-right"});
                        }} disabled ={isSelected}
                        className={`btn btn-block rounded-[10px] font-jakarta ${isSelected ? "bg-pink-100 text-pink-600 font-bold border-none" : "bg-black text-white border-none"}`}
                        >{isSelected ? (<div className="flex items-center justify-center gap-1"><PiCheckBold /><p>Added to Stack</p></div>) : "Add to Stack"}</button>
                  </div>
              </div>
            </div>
        
    );
};

export default TechnologyCard;

