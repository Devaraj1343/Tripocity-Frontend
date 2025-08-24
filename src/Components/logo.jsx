import { PlaneTakeoff } from "lucide-react";

export default function Logo() {
  return (
    <div
      className="
        font-rouge text-[#9333ea] md:text-4xl font-extrabold tracking-wide
        px-2 py-1 rounded-sm cursor-pointer
        transition-all duration-300
        hover:bg-[#9333ea] hover:text-purple-50 hover:scale-110 hover:shadow-lg hover:rotate-1 hover:rounded-md
      "
    >
      Tripo City
      <PlaneTakeoff className="inline size-7" />
    </div>
  );
}
