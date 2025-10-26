import React, { useState } from 'react'

const TodoInput = ({ addTodo, settext, text }) => {
  const sendText = () => {
    console.log(text);
    addTodo(text)
  }
  const handleInput = (e) => {
    settext(e.target.value)
  }
  return (
    <>
    

      <div className='w-full flex flex-row justify-center absolute bottom-4  items-center h-20 gap-5'>
        <input  className='border-2 border-green-800 outline-0 h-12 w-70 rounded-2xl p-2 pl-5 ' type="text" value={text} placeholder='Add New Task' onChange={(e) => { handleInput(e) }} />
        {/* <button className='bg-green-500 px-6 text-white py-2 rounded-2xl' onClick={sendText}>Add</button> */}
            <button >
          <svg onClick={sendText} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-15 text-green-800">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
      </div>

    </>
  )
}

export default TodoInput