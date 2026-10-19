// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='flex'>
//       <div ><h1>Pini</h1><br /><h1>Gimi</h1></div>
//       <div>

//         <a href="">About</a>
//         <a href="">AnimeList</a>
//         <a href="">Manga</a>
//         <a href="">community</a>
       

//       </div>
//     </div>
//   )
// }

// export default Navbar

import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-12 py-10  bg-transparent">
      {/* Logo */}
      <div className="flex items-center text-4xl font-bold tracking-tight">
        <span className="text-orange-500">Pini</span>
        <span className="text-black">Gimi</span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-14 font-bold">
        <a
          href="about"
          className="text-gray-700 text-3xl transition hover:text-orange-500"
        >
          About
        </a>

        <a
          href="anime"
          className="text-gray-700 text-3xl transition hover:text-orange-500"
        >
          AnimeList
        </a>

        <a
          href="manga"
          className="text-gray-700 text-3xl transition hover:text-orange-500"
        >
          Manga
        </a>

        <a
          href="community"
          className="text-gray-700 text-3xl transition hover:text-orange-500"
        >
          Community
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

