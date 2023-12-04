import React, { useState } from "react";
import "./App.css";
import Home from "./Home";

function App() {
  const [isNavOpen, setNavOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);

  const handleNavItemClick = (itemName: string) => {
    setActiveNavItem(itemName);
    setNavOpen(false); // Close the mobile navigation after clicking
  };

  return (
    // <div className="w-full">
    //   <div className="w-full">
    //     <nav className=" p-4">
    //       <div className="container mx-auto flex justify-center items-center">
    //         <div className="hidden lg:flex space-x-4 text-neutral-700 text-base font-medium">
    //           <a href="#home" className="hover:text-gray-300">
    //             Home
    //           </a>
    //           <a href="#skills" className="hover:text-gray-300">
    //             Skills
    //           </a>
    //           <a href="#projects" className="hover:text-gray-300">
    //             Projects
    //           </a>
    //           <a href="#contact" className="hover:text-gray-300">
    //             Contact
    //           </a>
    //         </div>
    //         <div className="lg:hidden items-end flex w-full justify-end">
    //           <button
    //             className="text-2xl focus:outline-none"
    //             onClick={() => setNavOpen(!isNavOpen)}
    //           >
    //             &#9776;
    //           </button>
    //         </div>
    //       </div>
    //     </nav>

    //     {/* Mobile Navigation */}
    //     {isNavOpen && (
    //       <div className="lg:hidden bg-blue-500 text-white p-4">
    //         <a href="#home" className="block py-2">
    //           Home
    //         </a>
    //         <a href="#skills" className="block py-2">
    //           Skills
    //         </a>
    //         <a href="#projects" className="block py-2">
    //           Projects
    //         </a>
    //         <a href="#contact" className="block py-2">
    //           Contact
    //         </a>
    //       </div>
    //     )}

    //     {/* Header */}
    //     <header className="container p-4 sm:py-24 w-full">
    //       <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 w-full">
    //         {/* Header Image */}
    //         <div className="flex w-full sm:w-1/2  items-center justify-center">
    //           <img
    //             src="../images/Group 1.png"
    //             alt="Header Image"
    //             className=""
    //           />
    //         </div>
    //         {/* Header Text */}
    //         <div className="flex w-full sm:w-1/2 flex-col">
    //           <h2 className="text-gray-900 text-xl font-semibold sm:text-2xl pb-1">
    //             Hello 👋
    //           </h2>
    //           <h1 className="text-gray-900 text-3xl sm:text-[40px] font-semibold pb-2 w-full">
    //             I’m <span className="text-violet-400">Dilhara Abeysekera</span>
    //           </h1>
    //           <p className="text-gray-500 text-lg sm:text-xl font-normal pb-6 w-full">
    //             “ Transforming a passion for technology into a career, I
    //             specialize in front-end development. Currently navigating the IT
    //             industry through an internship, I am on a journey of continuous
    //             learning and growth. My blend of creativity and technical
    //             skills, especially in UI/UX design, defines my commitment to
    //             innovation in the dynamic field of IT. “
    //           </p>
    //           <div className="flex space-x-4">
    //             <button className=" text-white text-base font-semibold  bg-violet-600 rounded-lg justify-center items-center gap-3 flex flex-row-reverse px-3 py-2">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 strokeWidth={1.5}
    //                 stroke="currentColor"
    //                 className="w-6 h-6"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
    //                 />
    //               </svg>
    //               Resume
    //             </button>
    //             <button className="rounded-lg justify-center items-center px-3 py-2 border-2 border-gray-400 text-gray-600">
    //               Contact
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </header>
    //   </div>



    // </div>
    <Home/>
  );
}

export default App;
