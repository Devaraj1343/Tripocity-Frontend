import SuggestionCard from "./SuggestionCard";

const SuggestionCards = () => {
  const data = {
    imageUrl:
      "https://holidaysdna.com/wp-content/uploads/where-is-switzerland-location-on-world-map.jpg",
    location: "Zurich, Switzerland",
    title: "Switzerland Peaks",
    days: 5,
  };
  return (
    <div className="flex flex-wrap gap-6 justify-center items-center w-[100%] mx-auto my-8">
      {[...Array(10)].map((_, idx) => (
        <SuggestionCard key={idx} data={data} />
      ))}
    </div>
  );
};

export default SuggestionCards;
