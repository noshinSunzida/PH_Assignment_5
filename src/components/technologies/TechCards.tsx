import type { Dispatch, SetStateAction } from "react";
import type { Itechnologies } from "../../types/technologiesType";
import TechnologyCard from "./TechnologyCards";
import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";

interface ITechCardsProps {
  technologies:Itechnologies[];
  selectedCards: Itechnologies[];
  setSelectedCards: Dispatch<SetStateAction<Itechnologies[]>>;
}




const TechCards = ({ technologies , selectedCards, setSelectedCards} : ITechCardsProps ) => {

  const handleRemoveCard = (technology:Itechnologies) => {

    const restCards = selectedCards.filter(selectedCards => selectedCards.id != technology.id)

    setSelectedCards(restCards);
  }

  const handleRemoveAll = () => {
    setSelectedCards([]);
    toast.error("All technologies removed from Stack!", {position:"bottom-right"});
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-3 grid grid-cols-3 gap-6">
          {technologies.map((technology : Itechnologies) => (
           <TechnologyCard key={technology.id} technology={technology} selectedCards={selectedCards} setSelectedCards={setSelectedCards}></TechnologyCard>
      ))}
      </div>
      
      <div className="col-span-1">
        <div className="card bg-base-100 border border-slate-200 shadow-2xs rounded-2xl">
            <div className="card-body">
                <p className="font-jakarta font-bold text-[16px]">Your Stack</p>



                { selectedCards.length === 0 ? (<div>
                  <p className="text-slate-500 font-jakarta">No technologies selected yet.</p>
                    <div className="border border-dashed border-slate-300 rounded-xl h-18 flex items-center justify-center mt-2">
                      <p className="text-[12px] text-slate-400 font-jakarta text-center">Your stack is empty.</p></div>
                  </div>)   : 
                  
                  
                      <div> <p className="text-slate-500 font-jakarta pb-3">{selectedCards.length} Technology Selected</p>
                      {selectedCards.map((technology) => (
                <div key={technology.id} className="border border-slate-200 rounded-lg p-3 flex items-center justify-between mt-2">
                    <div className="flex items-center gap-3">

                      <img src={technology.icon} alt="" className="w-7 h-7"/>

                        <div>
                          <h2 className="text-[15px] font-bold font-jakarta text-[#0F172A]"> {technology.name} </h2>
                           <span className="text-slate-600 px-2 py-1 rounded-sm text-[11px] font-jakarta font-semibold">
                        {technology.category}</span>
                        </div>
                    </div> 
                        
                        <div className="cursor-pointer"> <span onClick={()=> {handleRemoveCard(technology); 
                          toast.info(`${technology.name} removed from stack!`, {position:"bottom-right"})}}><RxCross1 /></span></div>
                        
                    
                </div>
            ))}

             {selectedCards.length > 0 && (
                        <button
                            onClick={handleRemoveAll}
                            className="btn font-bold text-[15px] w-full mt-4 rounded-lg bg-white text-red-600 border border-red-400 
                            hover:bg-white hover:text-red-600 hover:border-red-400" >Remove All </button>
            
             
                        
                    )}
                </div>

        }
                
            </div>
        </div>
        
        
      </div>

      
    </div>
  );
};

export default TechCards;

                    
                  
                
              
                 
          

         
