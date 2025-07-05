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
import { useState } from "react";
import ContactForm from "../Components/contactForm";
import { Facebook } from "lucide-react";

export default function Home() {
  const [images, setImages] = useState([
    { name: "India Packages", image: indiaPackage },
    { name: "International Packages", image: internationalPackage },
    { name: "Honeymoon Packages", image: honeyMoonPackage },
    { name: "Europe Packages", image: europePackage },
    { name: "Group Packages", image: groupPackage },
  ]);
  return (
    <div className="flex flex-col gap-11">
      <div className="lg:h-[calc(100vh-112px)]  sm:h-[60vh] ">
        <img src={home1} alt="Fruit" className="w-full h-full object-cover" />
      </div>

      <div className="lg:h-[calc(100vh-112px)]  sm:h-[60vh]">
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

      <div
        className="lg:h-[calc(100vh-112px)]  sm:h-[60vh] "
        style={{
          backgroundImage: `url(${worldMap})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" w-[75%] mx-auto h-full flex gap-20">
          <div className="text-2xl font-bold flex flex-col items-center gap-5 ">
            <div className="font-math text-4xl">Stay Connected</div>
            <div className="flex flex-row gap-5">
              <div className="flex flex-col gap-5">
                <Phone className="w-7 h-7" />
                <Mail className="w-7 h-7" />
                <Facebook className="w-7 h-7" />
              </div>
              <div className="flex flex-col gap-5">
                <span className="text-gray-500 text-xl"> +91 1234567890 </span>
                <span className="text-gray-500 text-xl">
                  {" "}
                  tripocity@gmail.com
                </span>
                <span className="text-gray-500 text-xl"> Tripocity.com</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>

      <Footer />
    </div>
  );
}
