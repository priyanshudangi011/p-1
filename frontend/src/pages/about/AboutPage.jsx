import React from 'react'
import Navbar from '../../components/Navbar'

const AboutPage = () => {
  return (
    <div className='relative min-h-screen  overflow-hidden bg-gradient-to-r
            from-[oklch(0.954_0.038_75.164)]
            to-transparent'>
        <Navbar/>
        <div className='flex justify-center items-center'>
           <div> <div className='max-w-5xl bg-white/70 backdrop-blur-md shadow-2xl rounded-2xl p-10 text-center border border-orange-300 '>
                <h1 className='text-4xl font-extrabold text-orange-600 mb-6 tracking-wide uppercase'>About Our Anime Universe</h1>
                    <p className="text-gray-700 leading-relaxed text-lg mt-6"> welcome to OtakuVerse — a space built for every anime and manga lover. Here, we celebrate the beauty of storytelling, art, and emotion that make anime a way of life. Whether you’re sailing with the Straw Hats, walking the path of a shinobi, or diving into the shadows with Gojo Satoru — this is your world. 🌏✨</p>
                    <p className="text-gray-700 leading-relaxed text-lg mt-6">
                        Our mission is to bring fans together — share recommendations, explore top anime and manga, discuss theories, and relive the moments that defined our favorite characters. Join our community and let’s keep the spirit of anime alive, one frame at a time! 💫
                    </p>
                <div className='mt-10 flex justify-center gap-8'><a className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition" href=''>Join the Community</a>
                <a className='px-6 py-3 border-2 border-orange-500 text-orange-600 font-semibold rounded-lg hover:bg-orange-100 transition' href="">Explore Anime List</a></div>
            </div>
            <img className='absolute bottom-0 right-0 opacity-30 ' src="https://imgs.search.brave.com/AnpB0myK4S0J_do-zjetqiM3__DcwwDWgwBCdCwM-Xg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTQvQW55/YS1CYWNrZ3JvdW5k/LVBORy5wbmc" alt="" /></div>
        </div>
    </div>
  )
}

export default AboutPage