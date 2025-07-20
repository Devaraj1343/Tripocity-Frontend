import Itenaries from "../Components/itenaries/itenaries"
import { useParams } from "react-router-dom";

export default function Package() {
  const { region, place } = useParams();
  // console.log("region",region, place);
  
  return (
    <div>
      <Itenaries  region={region} place={place} />
    </div>
  );
} 