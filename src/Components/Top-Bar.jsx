import ToggleTheme from "./Toggle-Theme";

export default function Topbar(){
    return (
      <>
        <div className="hidden min1000:flex flex-wrap items-center justify-between p-4 sm:p-6 md:p-8 text-base sm:text-lg font-medium dark:text-text-dark text-text-light shadow-bottom-only">
          {/* Logo */}
          <div className="font-rouge text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">
            Tourism
          </div>

          {/* Menu */}
          <div>
            <ul className="flex flex-wrap items-center justify-between gap-4 sm:gap-6 text-sm sm:text-base md:text-lg">
              <li className="hover:text-primary cursor-pointer">HOME</li>
              <li className="hover:text-primary cursor-pointer">GROUP TOURS</li>
              <li className="hover:text-primary cursor-pointer">PACKAGES</li>
              <li className="hover:text-primary cursor-pointer">INDIA</li>
              <li className="hover:text-primary cursor-pointer">HONEYMOON</li>
              <li className="hover:text-primary cursor-pointer">WEDDING</li>
              <li className="hover:text-primary cursor-pointer">CONTACT</li>
            </ul>
          </div>

          {/* Toggle + Avatar */}
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <ToggleTheme className="hover:text-primary cursor-pointer"/>
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </>
    );
}