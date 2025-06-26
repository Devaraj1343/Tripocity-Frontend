import home from '../assets/home.jpg'; 
import home1 from '../assets/Home-1.jpg'; 
import Footer from '../Components/Footer';
import indiaPackage from '../assets/Tajmahal.jpg';
import internationalPackage from "../assets/international-Package.jpg"; 
import honeyMoonPackage from '../assets/Couples-travel.jpg';
import europePackage from '../assets/Europe.jpg';
import groupPackage from '../assets/Group-Package.jpg';
import TajmahalMobile from '../assets/Tajmahal-Mobile.jpg';
import { useState } from "react";


export default function Home() {

  const [images, setImages] = useState([
    indiaPackage,
    internationalPackage,
    honeyMoonPackage,
    europePackage,
    groupPackage,
  ]);
  return (
    <div className="flex flex-col gap-11">
      <div className="lg:h-[calc(100vh-112px)]  sm:h-[60vh] ">
        <img src={home1} alt="Fruit" className="w-full h-full object-cover" />
      </div>

      <div>
      <div className='my-8 text-2xl font-bold w-[90%] mx-auto dark:text-text-dark'>Popular Packages</div>
      <div className="w-[90%] mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`break-inside-avoid overflow-hidden rounded ${
              index === 0
                ? "sm:h-auto h-[350px] w-full object-cover object-top"
                : ""
            }`}
          >
            {index === 0 ? (
              <picture>
                {/* Mobile version */}
                <source media="(max-width: 639px)" srcSet={TajmahalMobile} />
                {/* Default (desktop/tablet) */}
                <img
                  src={image}
                  alt="Responsive Image"
                  className="w-full h-auto object-cover transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:opacity-90"
                />
              </picture>
            ) : (
              <img
                src={image}
                alt={`Image ${index}`}
                className="w-full h-auto object-cover transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:opacity-90"
              />
            )}
          </div>
        ))}
      </div>
      </div>

      <Footer />
    </div>
  );
}
