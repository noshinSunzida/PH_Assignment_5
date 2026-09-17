import type { Dispatch, SetStateAction } from "react";
import type { Itechnologies } from "../../types/technologiesType";
import TechnologyCard from "./TechnologyCards";
import { RxCross1 } from "react-icons/rx";

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
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-3 grid grid-cols-3 gap-6">
          {technologies.map((technology : Itechnologies) => (
           <TechnologyCard key={technology.id} technology={technology} selectedCards={selectedCards} setSelectedCards={setSelectedCards}></TechnologyCard>
      ))}
      </div>

      <div className="col-span-1">
        <p>Your Stack</p>
        { selectedCards.length === 0 ? (<p>No technologies selected yet.</p>) : <div>
          <p>{selectedCards.length} Technology Selected</p>

          {selectedCards.map((technology) => (
                <div key={technology.id} className="card bg-base-100 shadow-sm mt-4">
                    <div className="card-body">
                        <h2 className="text-xl font-bold">
                            {technology.name}
                        </h2>

                        <p>{technology.description}</p>
                        
                        <div className="cursor-pointer"> <span onClick={()=> handleRemoveCard(technology)}><RxCross1 /></span></div>
                        
                    </div>
                </div>
            ))}

             {selectedCards.length > 0 && (
                        <button
                            onClick={handleRemoveAll}
                            className="btn btn-sm btn-error">

                            Remove All </button>
                        
                    )}
                </div>

        }
        
      </div>

      
    </div>
  );
};

export default TechCards;

