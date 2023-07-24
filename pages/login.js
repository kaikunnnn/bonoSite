import Header from '@/components/layout/Header'
import React, { useState } from 'react'

const LoginPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Name:', name)
    console.log('E-mail:', email)
    console.log('Password:', password)
    // Perform login logic here
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Header/>
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Login Page</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
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
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
      </form>
    </div>
    </main>
  )
}

export default LoginPage