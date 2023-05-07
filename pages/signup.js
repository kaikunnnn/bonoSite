import Header from '@/components/Header'
import { supabase } from "../supabaseClient";
import React, { useState } from 'react'

export default function SignIn (){
    const [email, setEmail] = useState('')
    const [submittted, setSubmitted] = useState(false)

    async function signIn(){
        if (!email) return
        const {error,data} = await supabase.auth.signIn({
            email
        })
        if (error) {
            console.log(error);
        }else{
            setSubmitted(true);
        }
    }
    if (submittted) {
        <div>成功！</div>
        alert('Check your email for the login link!');
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Header/>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold mb-8">Sign In</h1>
          <form  className="w-full max-w-md">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required 
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => signIn()}
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                SignIn
              </button>
            </div>
          </form>
        </div>
        </main>
      )
}


// export default function SignUp (){
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [passwordConf,setPasswordConf] = useState('')

  
//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     // Perform signUp logic here
//     try{
//         const {error:singnUpError} = await supabase.auth.signUp({
//             email: email,
//             password: password,
//         })
//         if (singnUpError) {
//             throw singnUpError;
//         }
//         alert('Check your email for the login link!');
//     }catch (error){
//         alert(`エラーだっよ`);
//         console.log(error);
//     }
//   }

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//     <Header/>
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <h1 className="text-3xl font-bold mb-8">Sign Up</h1>
//       <form onSubmit={handleSubmit} className="w-full max-w-md">
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
//             E-mail
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required 
//           />
//         </div>
//         <div className="mb-6">
//           <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required 
            
//           />
//         </div>
//         <div className="mb-6">
//           <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
//             Password Conf
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={passwordConf}
//             onChange={(e) => setPasswordConf(e.target.value)}
//             required 
            
//           />
//         </div>
//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             SignUp
//           </button>
//         </div>
//       </form>
//     </div>
//     </main>
//   )
// }
