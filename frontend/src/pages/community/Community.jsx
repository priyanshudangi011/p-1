// // import React from 'react'
// // import Navbar from '../../components/Navbar'

// // const Community = () => {
// //   return (
// //             <div><Navbar/>
// //     <div className=''>
        

// //         <h1 className="text-3xl font-extrabold text-orange-600 mb-6 uppercase tracking-wide">community feed</h1>
// //         <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-5 mb-6 border border-orange-200 hover:shadow-xl transition-all">
// //         <img className="h-12 w-12 rounded-full object-cover border-2 border-orange-400" src="" alt="" />
// //         <div className='text-left'>
// //             <h3 className='font-bold text-gray-800'></h3>
// //             <p className='text-sm text-gray-500'></p>
// //         </div>
// //         </div>
      
// //         <p className='mt-4 text-gray-700 text-lg'></p></div>


// //     </div>
// //   )
// // }

// // export default Community

// import React from 'react'
// import Navbar from '../../components/Navbar'

// const Community = () => {
//   return (
//     <div className="min-h-screen w-full">
//       <Navbar />

//       <main className="w-full px-4 py-6 sm:px-6 md:px-10 lg:px-12">
        
//         <h1 className="text-2xl sm:text-3xl font-extrabold text-orange-600 mb-6 uppercase tracking-wide">
//           Community Feed
//         </h1>

//         <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-4 sm:p-5 mb-6 border border-orange-200 hover:shadow-xl transition-all">
          
//           <div className="flex items-center gap-3">
//             <img
//               className="h-12 w-12 shrink-0 rounded-full object-cover border-2 border-orange-400"
//               src=""
//               alt="Profile"
//             />

//             <div className="text-left min-w-0">
//               <h3 className="font-bold text-gray-800 break-words">
//                 User Name
//               </h3>
//               <p className="text-sm text-gray-500">
//                 Community Member
//               </p>
//             </div>
//           </div>

//           <p className="mt-4 text-gray-700 text-base sm:text-lg break-words">
//             Community feed content goes here.
//           </p>

//         </div>
//         <div className='mt-10 bg-white/70 p-5 rounded-xl shadow-md'>
//             <h2 className="font-bold text-orange-600 text-xl mb-3"></h2>
//             <textarea className='w-full h-24 border border-orange-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-400' name="" placeholder='Whats in your mind' id=""></textarea>
//             <button className='mt-3 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition'></button>    
//         </div>
//       </main>
//       <div className='w-[25%] bg-white/60 shadow-md backdrop-blur-md rounded-xl p-5 h-fit border border-orange-200'></div>
//       <h2 className='font-bold text-xl text-orange-600 mb-4'></h2>
//       <ul className='space-y-2'>
//         <li className='text-gray-700 hover:text-orange-600 font-semibold cursor-pointer transition'>

//         </li>
//       </ul>
//     </div>
//   )
// }

// export default Community
































// import React from 'react'
// import Navbar from '../../components/Navbar'

// const Community = () => {
//   return (
//     <div className="min-h-screen w-full bg-orange-50/30">
//       <Navbar />

//       <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-6 px-4 py-6 sm:px-6 lg:px-10">

//         {/* Community Feed */}
//         <main className="w-full min-w-0">

//           <h1 className="text-2xl sm:text-3xl font-extrabold text-orange-600 mb-6 uppercase tracking-wide">
//             Community Feed
//           </h1>

//           {/* Post Card */}
//           <div className="w-full bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-4 sm:p-5 mb-6 border border-orange-200 hover:shadow-xl transition-all">

//             <div className="flex items-center gap-3">
//               <img
//                 className="h-12 w-12 shrink-0 rounded-full object-cover border-2 border-orange-400"
//                 src=""
//                 alt="Profile"
//               />

//               <div className="min-w-0">
//                 <h3 className="font-bold text-gray-800">
//                   User Name
//                 </h3>
//                 <p className="text-sm text-gray-500">
//                   2 hour ago
//                 </p>
//               </div>
//             </div>

//             <p className="mt-4 text-gray-700 text-base sm:text-lg break-words">
//               Community feed content goes here.
//             </p>
//           </div>

//           {/* Create Post */}
//           <div className="bg-white/80 p-4 sm:p-5 rounded-xl shadow-md border border-orange-200">
//             <h2 className="font-bold text-orange-600 text-xl mb-3">
//               Create Post
//             </h2>

//             <textarea
//               className="w-full min-h-24 border border-orange-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-400 resize-y"
//               placeholder="What's in your mind?"
//             />

//             <button
//               className="mt-3 w-full sm:w-auto px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
//             >
//               Post
//             </button>
//           </div>
//         </main>

//         {/* Right Sidebar */}
//         <aside className="w-full bg-white/80 shadow-md backdrop-blur-md rounded-xl p-5 h-fit border border-orange-200">
//           <h2 className="font-bold text-xl text-orange-600 mb-4">
//             Community Members
//           </h2>

//           <ul className="space-y-3">
//             <li className="text-gray-700 hover:text-orange-600 font-semibold cursor-pointer transition">
//               Member 1
//             </li>
//             <li className="text-gray-700 hover:text-orange-600 font-semibold cursor-pointer transition">
//               Member 2
//             </li>
//             <li className="text-gray-700 hover:text-orange-600 font-semibold cursor-pointer transition">
//               Member 3
//             </li>
//           </ul>
//         </aside>

//       </div>
//     </div>
//   )
// }

// export default Community


import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'

const API_URL = 'http://localhost:5000/api/posts'

const Community = () => {
  const [posts, setPosts] = useState([])
  const [text, setText] = useState('')
  const [userName, setUserName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(true)
  const [posting, setPosting] = useState(false)
  const [error, setError] = useState('')

  // MongoDB se posts fetch karna
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(API_URL)

        if (!response.ok) {
          throw new Error('Posts fetch nahi hui')
        }

        const data = await response.json()
        setPosts(data)
      } catch (err) {
        setError('Posts load nahi hui. Backend check karo.')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  // Nayi post database mein save karna
  const handlePost = async (e) => {
    e.preventDefault()

    if (!userName.trim() || !text.trim()) {
      setError('Username aur post text dono bharo.')
      return
    }

    try {
      setPosting(true)
      setError('')

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: userName.trim(),
          imageUrl: imageUrl.trim(),
          text: text.trim(),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Post save nahi hui')
      }

      setPosts((prevPosts) => [data, ...prevPosts])
      setText('')
    } catch (err) {
      setError(err.message || 'Server se connection nahi hua.')
    } finally {
      setPosting(false)
    }
  }

  return (
    <div className="min-h-screen w-full bg-orange-50/30">
      <Navbar />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-6 px-4 py-6 sm:px-6 lg:px-10">

        {/* Community Feed */}
        <main className="w-full min-w-0">

          <h1 className="text-2xl sm:text-3xl font-extrabold text-orange-600 mb-6 uppercase tracking-wide">
            Community Feed
          </h1>

          {/* Create Post */}
          <form
            onSubmit={handlePost}
            className="bg-white/80 p-4 sm:p-5 rounded-xl shadow-md border border-orange-200 mb-6"
          >
            <h2 className="font-bold text-orange-600 text-xl mb-3">
              Create Post
            </h2>

            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Your username"
              className="w-full mb-3 border border-orange-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Profile image URL (optional)"
              className="w-full mb-3 border border-orange-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-400"
            />

            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full min-h-24 border border-orange-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-400 resize-y"
              placeholder="What's in your mind?"
            />

            {error && (
              <p className="mt-3 text-sm text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={posting}
              className="mt-3 w-full sm:w-auto px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 disabled:opacity-50 transition"
            >
              {posting ? 'Posting...' : 'Post'}
            </button>
          </form>

          {/* Posts from MongoDB */}
          {loading ? (
            <p className="text-gray-600">Loading posts...</p>
          ) : posts.length === 0 ? (
            <p className="text-gray-500">Abhi koi post nahi hai.</p>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <article
                  key={post._id}
                  className="w-full bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-4 sm:p-5 border border-orange-200 hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-3">
                    {post.imageUrl ? (
                      <img
                        className="h-12 w-12 shrink-0 rounded-full object-cover border-2 border-orange-400"
                        src={post.imageUrl}
                        alt={post.userName}
                      />
                    ) : (
                      <div className="h-12 w-12 shrink-0 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                        {post.userName?.charAt(0).toUpperCase()}
                      </div>
                    )}

                    <div className="min-w-0">
                      <h3 className="font-bold text-gray-800 break-words">
                        {post.userName}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {post.createdAt
                          ? new Date(post.createdAt).toLocaleString()
                          : ''}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-700 text-base sm:text-lg whitespace-pre-wrap break-words">
                    {post.text}
                  </p>
                </article>
              ))}
            </div>
          )}
        </main>

        {/* Right Sidebar */}
        <aside className="w-full bg-white/80 shadow-md backdrop-blur-md rounded-xl p-5 h-fit border border-orange-200">
          <h2 className="font-bold text-xl text-orange-600 mb-4">
            Community Members
          </h2>

          <ul className="space-y-3">
            <li className="text-gray-700 hover:text-orange-600 font-semibold">
              Member 1
            </li>
            <li className="text-gray-700 hover:text-orange-600 font-semibold">
              Member 2
            </li>
            <li className="text-gray-700 hover:text-orange-600 font-semibold">
              Member 3
            </li>
          </ul>
        </aside>

      </div>
    </div>
  )
}

export default Community;