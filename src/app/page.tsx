import Image from "next/image";
import Cabecalho from "./components/Cabecalho";
import Footer from "./components/Footer";
import Inicial from "./components/Inicial";


export default function Home() {
  return (
    <div className="flex flex-col items-center p-5 w-full bg-gradient-to-r from-[#061f2c] to-[#0c3a4a]">
  
  
  <Cabecalho/>

<Inicial/>



<Footer/>
</div>

    
    
    
  );
}
