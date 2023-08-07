import '@/styles/globals.css'

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'

// Firebase
import { db } from '../firebase'
import {doc, onSnapshot, collection, getDocs} from "firebase/firestore"

// Component
import Auth from '../components/element/Auth'

function MyApp({ Component, pageProps }) {
  return (
    
      // <SessionContextProvider>
      //   {/* Make Auth Function from firebase */}
      //   <Auth />
        
        <div className=' bg-bgColor-secondary '>
          <Component {...pageProps} />
        </div>
          
      // </SessionContextProvider>

      
  )
}
export default MyApp