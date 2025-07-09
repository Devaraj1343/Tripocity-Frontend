import home from "../assets/home.jpg";
import home1 from "../assets/Home-1.jpg";
import Footer from "../Components/Footer";
import indiaPackage from "../assets/Tajmahal.jpg";
import internationalPackage from "../assets/international-Package.jpg";
import honeyMoonPackage from "../assets/Couples-travel.jpg";
import europePackage from "../assets/Europe.jpg";
import groupPackage from "../assets/Group-Package.jpg";
import TajmahalMobile from "../assets/Tajmahal-Mobile.jpg";
import worldMap from "../assets/WorldMap.png";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { useState, useEffect } from "react";
import ContactForm from "../Components/contactForm";
import world from '../assets/World-1.jpg'
import "../App.css";
import SuggestionCards from "../Components/SuggestionCards";
import CreatePackage from "../Components/CreatePackage";
import EnquireNow from "../Components/EnquireNow";

export default function Home() {
  const [canCreaetePackage, setCanCreatePackage] = useState(false);
  const [images, setImages] = useState([
    { name: "India Packages", image: indiaPackage },
    { name: "International Packages", image: internationalPackage },
    { name: "Honeymoon Packages", image: honeyMoonPackage },
    { name: "Europe Packages", image: europePackage },
    { name: "Group Packages", image: groupPackage },
  ]);
 
const tourismTexts = [
  { text: "Discover the World’s Hidden Gems", animation: "animate-flyLeft" },
  { text: "Adventure Awaits. Are You Ready?", animation: "animate-fadeScale" },
  { text: "Explore. Dream. Travel.", animation: "animate-rotateFade" },
  { text: "Unforgettable Experiences Await", animation: "animate-slideBounce" },
  { text: "Your Journey Begins Here", animation: "animate-typing" },
];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % tourismTexts.length);
    }, 5000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col gap-11">
      <div className="relative lg:h-[calc(100vh-80px)] sm:h-[60vh]">
        {/* Background Image */}
        <img src={home1} alt="Tourism" className="w-full h-full object-cover" />

       <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-center">
        <h1
          key={currentTextIndex} // Force re-render for animation restart
          className={`text-4xl md:text-6xl font-bold text-white ${tourismTexts[currentTextIndex].animation}`}
        >
          {tourismTexts[currentTextIndex].text}
        </h1>
      </div>
      </div>

      <div className="">
        <div className="my-8 text-2xl font-bold w-[90%] mx-auto dark:text-text-dark">
          Popular Packages
        </div>
        <div className="w-[90%] mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`break-inside-avoid overflow-hidden rounded ${
                index === 0
                  ? "sm:h-auto h-[350px] w-full object-cover object-top relative transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:opacity-90"
                  : "relative transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:opacity-90"
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center z-2 flex-col gap-3">
                <span className="text-white text-3xl font-semibold  px-4 py-2 rounded font-math">
                  {image.name}
                </span>
                <button className="bg-primary text-white px-4 py-2 rounded hover:bg-black font-math text-xl">
                  10 Tours
                </button>
              </div>
              {index === 0 ? (
                <picture>
                  {/* Mobile version */}
                  <source media="(max-width: 639px)" srcSet={TajmahalMobile} />
                  {/* Default (desktop/tablet) */}
                  <img
                    src={image.image}
                    alt="Responsive Image"
                    className="w-full h-auto object-cover "
                  />
                </picture>
              ) : (
                <img
                  src={image.image}
                  alt={`Image ${index}`}
                  className="w-full h-auto object-cover transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:opacity-90"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* <div
        className=""
        style={{
          backgroundImage: `url(${world})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" w-[65%] mx-auto h-full flex gap-10 ">
          <div className="text-2xl w-[50%] font-bold flex flex-col items-center justify-center h-full gap-5">
            <div className="font-math text-4xl">Stay Connected</div>
            <div className="flex flex-col gap-3 items-center ">
              <Phone className="w-8 h-8" />
              <span className="text-gray-500">+91 1234567890 </span>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <Mail className="w-8 h-8" />
              <span className="text-gray-500">tourism@gmail.com</span>
            </div>
          </div>
          <ContactForm className="w-[50%]" />
        </div>
      </div> */}  

       <div>

       <button
        className="flex fixed bottom-0 right-0 m-5 bg-primary p-3 rounded-lg text-white font-semibold hover:bg-black"
        onClick={() => setCanCreatePackage(!canCreaetePackage)}
      >
        Create New Package
      </button>
      {/* Create new tour package by admin */}
      {canCreaetePackage && (
        <CreatePackage setCanCreaetePackage={setCanCreatePackage} />
      )}

      </div>

      <div>
        <SuggestionCards/>
      </div>

      <Footer />
    </div>
  );
}
