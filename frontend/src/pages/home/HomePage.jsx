// import React from 'react'

// const HomePage = () => {
//   return (
//     <div className=''>

//       <div className=''>

//         <h1>home</h1>
//         <div className='relative w-1/2'>
//           <img className='apsolute' src="https://imgs.search.brave.com/85lZpqj7XT9Q14lmAnmR8UuKsbK7cYJSre0FwXmWL-c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzEyL05h/cnV0by1LaWQtRnJl/ZS1QTkcucG5n" alt="" />
//           <img className='apsolute' src="https://imgs.search.brave.com/iMGkYk5qUnmqI3Q43lEqG11rOkRGRwwD9SWmIEmlor8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMy9JY2hp/Z28tUE5HLVRyYW5z/cGFyZW50LUltYWdl/LnBuZw" alt="" />
//           <img className='apsolute' src="https://imgs.search.brave.com/dfDVOeDdaH_M5Q87XHCGhGz--1I_zf-9I28RnslV98w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTQvVGFu/amlyby1QTkctUGlj/LnBuZw" alt="" />
//         </div>

//       </div>
//       <div className='w-1/2 bg-red'></div>

//     </div>
//   )
// }

// export default HomePage
import React from "react";
import "./btn.css";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router";
const HomePage = () => {
  return (
    <div className="hide-scrollbar min-h-screen  overflow-hidden bg-gradient-to-r
            from-[oklch(0.954_0.038_75.164)]
            to-transparent" >
     <Navbar/>
     <Outlet/>
          
     <div className=" flex">
      <div
        className="w-1/2 p-10 
            "
      >
        {/* <h1 className="text-4xl font-bold mb-10">Home</h1> */}

        <div className="relative w-full h-full">
          <img
            className="  absolute
      top-14
      right-37
      w-230
      max-w-none
      "
            src="https://imgs.search.brave.com/85lZpqj7XT9Q14lmAnmR8UuKsbK7cYJSre0FwXmWL-c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzEyL05h/cnV0by1LaWQtRnJl/ZS1QTkcucG5n"
            alt="Naruto"
          />

          <img
            className="absolute  right-23 w-135 z-1 "
            src="https://imgs.search.brave.com/iMGkYk5qUnmqI3Q43lEqG11rOkRGRwwD9SWmIEmlor8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMy9JY2hp/Z28tUE5HLVRyYW5z/cGFyZW50LUltYWdl/LnBuZw"
            alt="Itachi"
          />

          <img
            className="absolute  top-29 left-49 w-170"
            src="https://imgs.search.brave.com/dfDVOeDdaH_M5Q87XHCGhGz--1I_zf-9I28RnslV98w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTQvVGFu/amlyby1QTkctUGlj/LnBuZw"
            alt="Tanjiro"
          />
        </div>
      </div>

      {/* <div className="w-1/2 text-center ">
      <h1>Streaming Anime content</h1>
      <br /><h1>quality content is here </h1><br />
      <h1>enjoy it</h1></div> */}
      <div className="w-1/2 min-h-screen flex mt-38 justify-center text-left px-10">
        <div>
          <h1 className="text-5xl font-medium text-gray-900">
            Streaming Anime Content
          </h1>

          <h1 className="text-5xl font-medium">Quality Content Is Here</h1>

          <h1 className="text-5xl font-medium mb-10 ">Enjoy It!</h1>
          <button className="btn">Explore</button>
        </div>
      </div>
    </div>

   </div>
  );
};

export default HomePage;

