export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Zion Fees Portal</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full p-3 border rounded mb-4"
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full p-3 border rounded mb-4"
        />
        <button className="w-full bg-blue-600 text-white p-3 rounded font-semibold">
          Sign In
        </button>
      </div>
    </main>
  )
}