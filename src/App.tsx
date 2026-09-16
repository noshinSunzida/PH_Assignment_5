import { Suspense } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Technologies from "./components/technologies/Technologies";
import type { Itechnologies } from "./types/technologiesType";

const technologiesFetch = async (): Promise<Itechnologies[]> => {

    const res = await fetch ("/data.json");
    const data = await res.json();
    return data;
    
  };
const technologiesPromise = technologiesFetch();

function App() {
 
  return (
    <>
    
    <Nav></Nav>
    <Banner></Banner>
    <Suspense fallback = {<h3> Loading Technologies......</h3>}>

        <Technologies technologiesPromise = {technologiesPromise}></Technologies>

    </Suspense>
    
    </>
  )
}

export default App
