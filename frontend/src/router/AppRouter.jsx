// // import React from 'react'

// // const AppRouter = () => {
// //   return (
// //     <div>AppRouter</div>
// //   )
// // }

// // export default AppRouterimport { createBrowserRouter, RouterProvider } from "react-router";

// import HomePage from "../pages/home/HomePage";
// import AboutPage from "../pages/about/AboutPage";
// import Manga from "../pages/mangaPage/Manga";
// import AnimeList from "../pages/AnimeList/AnimeList";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//     children: [
//       { path: "about", element: <AboutPage /> },
//       { path: "manga", element: <Manga /> },
//       { path: "animelist", element: <AnimeList /> },
//     ],
//   },
// ]);

// function AppRouter() {
//   return <RouterProvider router={router} />;
// }

// export default AppRouter;

// import { createBrowserRouter, RouterProvider } from "react-router";

// import HomePage from "../pages/home/HomePage";
// import AboutPage from "../pages/about/AboutPage";
// import Manga from "../pages/mangaPage/Manga";
// import AnimeList from "../pages/AnimeList/AnimeList";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//     children: [
//       {
//         path: "about",
//         element: <AboutPage />,
//       },
//       {
//         path: "manga",
//         element: <Manga />,
//       },
//       {
//         path: "anime",
//         element: <AnimeList />,
//       },
//         // {
//         // path: "community",
//         // element: <community/>,
//       // },
//     ],
//   },
// ]);



// export default function AppRouter() {
//   return <RouterProvider router={router} />;
// }
// export default function AppRouter() {
//   return <RouterProvider router={router} />;
// }













// //best code //////
// import { createBrowserRouter, RouterProvider } from "react-router";
// import HomePage from "../pages/home/HomePage";
// import AboutPage from "../pages/about/AboutPage";
// import Manga from "../pages/mangaPage/Manga";
// import AnimeList from "../pages/AnimeList/AnimeList";
// import Community from "../pages/community/Community";

// const router = createBrowserRouter([
//   { path: "/", element: <HomePage /> },
//   { path: "/about", element: <AboutPage /> },
//   { path: "/manga", element: <Manga /> },
//   { path: "/anime", element: <AnimeList /> },
//   { path: "/community", element: <Community /> },
// ]);

// export default function AppRouter() {
//   return <RouterProvider router={router} />;
// }




import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/about/AboutPage";
import Manga from "../pages/mangaPage/Manga";
import AnimeList from "../pages/AnimeList/AnimeList";
import Community from "../pages/community/Community";
import Register from "../pages/Register";
import Login from "../pages/Login";


const router = createBrowserRouter([
  { path: "/", element: <HomePage/> },
  { path: "/about", element: <AboutPage /> },
  { path: "/manga", element: < Manga/> },
  { path: "/anime", element: <AnimeList /> },
  { path: "/community", element: <Community /> },

  { path: "/register", element: <Register/> },
  { path: "/login", element: <Login /> },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}