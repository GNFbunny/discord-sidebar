import React, { useState, useEffect } from "react";
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

function Navbar() {
  const [ darkMode, setDarkMode ] = useState(false)

  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-neutral-100 shadow-lg text-white
     dark:bg-gray-800 dark:text-black">
      
        
        <SidebarIcon icon={<FaFire size="28" />} />
        <SidebarIcon icon={<BsPlus size="32" />} />
        <SidebarIcon icon={<BsFillLightningFill size="20" />} />
        <SidebarIcon icon={<FaPoo size="20" />} />

        <button
  onClick={toggleDarkMode}
  className="h-12 w-12 mt-2 mb-2 mx-auto rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer
   bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
>
  🌙
</button>

    </div>
  );
};
const SidebarIcon = ({ icon, text = 'tooltip 💕' }) => (
  <div className="sidebar-icon group bg-amber-100 dark:bg-gray-600 text-black dark:text-white">
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100 bg-amber-100 dark:bg-black text-black dark:text-white">
      {text}
    </span>
  </div>
  
)

export default Navbar;