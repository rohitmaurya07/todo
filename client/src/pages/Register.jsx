import React, { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();
    console.log(`Username: ${username}\nPassword: ${password}`);
    // Logic to Log user
    
    try{
    const response = await fetch("https://todo-8h1d.vercel.app/auth/register",{
         method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),

    })

    const data = await response.json();

    if (response.success == true) {
      alert("Login successful!");
      console.log(data);
      // You can redirect user or reset form here
    } else {
      alert(data.message || "Login failed");
    }
} catch (error) {
    console.error("Error:", error);
    alert("Something went wrong!");
  }

};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter username"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Register
          </button>
          <p className="text-blue-500 text-sm underline">
             <Link to="/login">login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
