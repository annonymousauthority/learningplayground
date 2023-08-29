import NavBar from "@/components/NavBar";
import LeftHero from "@/components/LeftHero";
import RightHero from "@/components/RightHero";

export default function Home() {
 return (
 <div> 
  <NavBar/>
  <div className="flex">
  <LeftHero/>
  { <RightHero/>}
  </div>
 
  
  
   </div>
 )
}
