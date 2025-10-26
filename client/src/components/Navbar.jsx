import React from 'react'

const Navbar = ({setToken,settasks,setRefresh}) => {
    const logOut = ()=>{
        localStorage.removeItem("token")
        setToken(null);
    }
  return (
    <div>
      <div className='bg-black text-white h-[7vh] flex justify-around items-center'>
        <h2>Hello , <span className='text-orange-400 font-bold'>Rohit Maurya</span></h2>
        <button className='bg-white text-black p-2 rounded-2xl' onClick={logOut}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar