// import React from 'react'
// import Navbar from '../../components/Navbar'
// const manga = [
//   {
// id: 1,
// title: 'One Piece',
// image:
//   'https://images.unsplash.com/photo-1768142206945-35402ab4dc6c?q=80&w=687&auto=format&fit=crop',
// },
// {
// id: 2,
// title: 'Naruto',
// image:
//   'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=687&auto=format&fit=crop',
// },
// {
// id: 3,
// title: 'Demon Slayer',
// image:
//   'https://images.unsplash.com/photo-1614583225154-5fcdda07019e?q=80&w=687&auto=format&fit=crop',
// },
// {
// id: 4,
// title: 'Attack on Titan',
// image:
//   'https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?q=80&w=687&auto=format&fit=crop',
// },
// {
// id: 5,
// title: 'Jujutsu Kaisen',
// image:
//   'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=687&auto=format&fit=crop',
// },
// ];

// const Manga = () => {
  

//   return (
//     <div>
//       <Navbar/>
//          <div className='pt-4 flex flex-col items-center text-center'>
//             <h1 className='text-4xl font-extrabold text-orange-600 mb-2 uppercase'>
//                 Manga collection 
//             </h1>
//             <p className='text-gray-700 mb-10 text-lg max-w-2xl'>Explore legendary manga stories and stunning artwork loved by millions.</p>
// <div className='grid grid-cols-3 gap-8 px-10 max-w-6xl'>
//     {animeList.map((anime) => (
//     <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300'>
//        <img src='https://images.unsplash.com/photo-1627672360124-4ed09583e14c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className="h-[400px] w-full object-cover" alt="" />
//         <h2 className='bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300'></h2> </div>
// </div>}
//         </div>
    



//     </div>
//   )
// }

// export default Manga

import React from "react";
import Navbar from "../../components/Navbar";

const manga = [
  {
    id: 1,
    title: "One Piece",
    image:
      "https://images.unsplash.com/photo-1768142206945-35402ab4dc6c?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Naruto",
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Demon Slayer",
    image:
      "https://images.unsplash.com/photo-1614583225154-5fcdda07019e?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Attack on Titan",
    image:
      "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Jujutsu Kaisen",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=687&auto=format&fit=crop",
  },
];

const Manga = () => {
  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar />

      <div className="pt-8 flex flex-col items-center text-center">
        <h1 className="text-4xl font-extrabold text-orange-600 mb-2 uppercase">
          Manga Collection
        </h1>

        <p className="text-gray-700 mb-10 text-lg max-w-2xl px-4">
          Explore legendary manga stories and stunning artwork loved by
          millions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-10 max-w-6xl w-full">
          {manga.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[400px] w-full object-cover"
              />

              <h2 className="text-xl font-bold text-gray-800 py-4">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manga;