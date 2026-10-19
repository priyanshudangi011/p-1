// import React from 'react'
// import Navbar from '../../components/Navbar'

// const AnimeList = () => {
//   return (
//     <div >
//                 <Navbar/>
//        <div className='flex '>
//          <div className='h-screen w-[30%] bg-gradient-to-bl  from-orange-400 to-white  '> 
//           {/* from-orange-400 to-white */}
//           <h1 className=' p-7  text-2xl  font-semibold'>MOST <br /> POPULAR</h1>
//             <img src="https://imgs.search.brave.com/rJ1UBw_UEBP8982RYnaJmsv1H7-kRiEKeif9USvOuO0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjMvQXN0/YS1QTkctSEQucG5n" alt="" />
//         </div>
//         <div className='side flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4'> 

//               {/* <div className='bg-rose-300 rounded-xl overflow-hidden'> */}
//           <div className='flex-shrink-0 h-[350px] w-[250px] bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300'>
//                 <img className='h-[90%] w-full object-cover' src="https://images.unsplash.com/photo-1768142206945-35402ab4dc6c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//                 <h2 className='p-2 pb-3 text-center text-lg font-semibold'>one piece</h2>
//               </div>
//         </div>
//        </div>
//     </div>
//   )
// }

// export default AnimeList


import React from 'react';
import Navbar from '../../components/Navbar';
import "./animeList.css";
const animeList = [
  {
    id: 1,
    title: 'One Piece',
    image:
      'https://images.unsplash.com/photo-1768142206945-35402ab4dc6c?q=80&w=687&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Naruto',
    image:
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=687&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Demon Slayer',
    image:
      'https://images.unsplash.com/photo-1614583225154-5fcdda07019e?q=80&w=687&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Attack on Titan',
    image:
      'https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?q=80&w=687&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Jujutsu Kaisen',
    image:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=687&auto=format&fit=crop',
  },
];

const AnimeList = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="flex flex-col md:flex-row gap-5 p-4 md:p-6">
        {/* Sidebar */}
        <aside className="w-full md:w-[30%] md:min-h-[calc(100vh-100px)] shrink-0 overflow-hidden rounded-2xl bg-gradient-to-bl from-orange-400 to-white p-6">
          <h1 className="text-2xl md:text-3xl font-bold">
            MOST <br /> POPULAR
          </h1>

          <img
            className="mx-auto mt-6 max-h-[300px] w-full object-contain"
            src="https://imgs.search.brave.com/rJ1UBw_UEBP8982RYnaJmsv1H7-kRiEKeif9USvOuO0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjMvQXN0/YS1QTkctSEQucG5n"
            alt="Asta from Black Clover"
          />
        </aside>

        {/* Anime cards */}
        <section className="min-w-0 flex-1 p-4 ">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            Trending Anime
          </h2>

          {/* <div className="flex p-7 gap-5 overflow-x-auto scroll-smooth pb-5 "> */}
          <div className="flex gap-5 p- overflow-x-auto scroll-smooth pb-5 scrollbar-hide">
            {animeList.map((anime) => (
              <article
                key={anime.id}
                className="w-[200px] sm:w-[230px] md:w-[220px] lg:w-[250px] shrink-0 overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img    
                  className="h-[280px] w-full object-cover"
                  src={anime.image}
                  alt={anime.title}
                  loading="lazy"
                />

                <h3 className="truncate p-3 text-center text-lg font-semibold capitalize">
                  {anime.title}
                </h3>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AnimeList;