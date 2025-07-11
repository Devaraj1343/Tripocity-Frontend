import camera from "../../assets/cam.jpg";
import { MapPinned } from "lucide-react";
import AccordionList from "./AccordionList";

export default function Title(props) {
  const { place } = props;
  if (!place) return null;
  const cleaned = place
    .replace("-tour-packages", "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return (
    <div className="space-y-4">
      <div className="flex flex-row gap-3 mt-10">
        <div className="size-56">
          <img src={camera} alt="camera" className="rounded-xl" />
        </div>
        <div className="p-5">
          <h2 className="font-extrabold text-xl text-primary">{cleaned}</h2>
          <h2 className="font-semibold">4 Nights / 5 Days</h2>
          <div className="flex flex-row gap-6">
            <p className="flex flex-row">
              <MapPinned className="text-yellow-500" />
              abc
            </p>
            <p className="flex flex-row">
              <MapPinned className="text-yellow-500" />
              acd
            </p>
            <p className="flex flex-row">
              <MapPinned className="text-yellow-500" />
              kluash
            </p>
          </div>
        </div>
      </div>
      <div>
        <AccordionList />
      </div>
    </div>
  );
}
