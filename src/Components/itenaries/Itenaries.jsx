import { useState } from "react";
import img from "../../assets/cam.jpg";
import Description from "./Description";
import Title from "./title";
import ItenariesCost from "./ItenariesCost";

export default function Itenaries(props) {
  const { region, place } = props;
  const [activeComponent, setActiveComponent] = useState("title");

  return (
    <>
      <div className="relative w-full max-h-[30rem] ">
        {/* Image */}
        <img src={img} alt="tour" className="w-full h-[30rem] object-cover" />

        {/* Overlay Description */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white text-lg bg-opacity-90 p-10 rounded shadow-md text-center max-w-6xl h-48 mx-auto translate-y-64">
            <Description />
          </div>
        </div>
      </div>
      <div className="h-52"> </div>
      <div className="max-w-6xl mx-auto dark:text-white">
        {/* Tab headers */}
        <div className="flex gap-5 border-b-2 mb-4">
          <h2
            className={`cursor-pointer pb-2 ${
              activeComponent === "title" ? "border-b-2 border-red-700" : ""
            }`}
            onClick={() => setActiveComponent("title")}
          >
            Tamilnadu Tour
          </h2>
          <h2
            className={`cursor-pointer pb-2 ${
              activeComponent === "cost" ? "border-b-2 border-red-700" : ""
            }`}
            onClick={() => setActiveComponent("cost")}
          >
            Tamilnadu Tour Cost
          </h2>
        </div>

        {/* Dynamic content render */}
        {activeComponent === "title" && (
          <Title region={region} place={place} />
        )}
        {activeComponent === "cost" && (
          <ItenariesCost region={region} place={place} />
        )}
      </div>
    </>
  );
}
