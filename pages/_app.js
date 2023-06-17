import '@/styles/globals.css'

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'

// Firebase
import db from "firebase.js"
import {doc, onSnapshot, collection, getDocs} from "firebase/firestore"

function MyApp({ Component, pageProps }) {

  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  // Output firebase's data
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // get data from firebase database
    const postData = collection(db, "posts");
    getDocs(postData).then((snapShot) => {
      setPosts(snapShot.docs.map(
        (doc) => ({...doc.data()})
      ))
    })

    // Get the data on real time
    onSnapshot(postData, (post) => {
      setPosts(post.docs.map(
        (doc) => ({...doc.data()})
      ))
    })

  }, [])


  return (
    
      <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}>
        <div>{posts.map((post) => (
          <div key={post.title}>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
          </div>
        ))}</div>
          <Component {...pageProps} />
      </SessionContextProvider>

      
  )
}
export default MyApp