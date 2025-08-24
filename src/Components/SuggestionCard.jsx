import { MapPin, Clock3 } from "lucide-react";

const SuggestionCard = ({ data }) => {
  return (
    <div className="w-80 h-[22rem] space-y-4 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out shadow-lg dark:shadow-slate-700 font-Playfair cursor-pointer overflow-hidden dark:bg-gray-800">
      <img
        src={data?.imageUrl}
        alt="image"
        className="w-full h-48 object-cover rounded-t-xl transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:opacity-90"
      />
      <div className="px-7 py-4 space-y-4 dark:text-text-dark text-text-light">
        <p className="flex items-center gap-2 text-xs text-gray-400 font-normal">
          <MapPin className="size-3" /> {data?.title}
        </p>
        <h3 className="text-lg font-semibold">{data?.location}</h3>
        <p className="flex items-center gap-2 text-xs text-primary font-bold">
          <Clock3 className="size-4 dark:text-white" />{" "}
          {`${data?.days - 1} Nights ${data?.days} Days`}
        </p>
      </div>
    </div>
  );
};
export default SuggestionCard;
