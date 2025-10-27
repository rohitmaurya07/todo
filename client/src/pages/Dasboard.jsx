import React from 'react'
import { useEffect, useState } from 'react'
import TodoItem from '../components/TodoItem';
import TodoInput from '../components/TodoInput';
import Login from './Login';
import Navbar from '../components/Navbar';

const Dasboard = () => {

    const [refresh, setRefresh] = useState(false);
    const [count, setCount] = useState(0)
    const [tasks, settasks] = useState([])
    const [text, settext] = useState("")
    const [Token, setToken] = useState(localStorage.getItem("token"))


   


    useEffect(() => {
console.log("effect");

        const fetchTodos = async () => {
            const task = await fetch("https://todo-9ybi-jrmf8cne5-purecoder7s-projects.vercel.app/api/todos/",{
            headers: { Authorization: `Bearer ${Token}` }})
            const data = await task.json()
            console.log(data);
            settasks(data)
            

        }
        fetchTodos()

    }, [refresh])

    // Get from todoInput and set input text 
    const setInput = async (inputData) => {

        let res = await fetch("https://todo-9ybi-jrmf8cne5-purecoder7s-projects.vercel.app/api/todos",
            {
                method: "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${Token}` },
                body: JSON.stringify({ text: inputData })
            })
        const data = await res.json();
        setRefresh(prev => !prev)
    }

    // Delete Task
 const deletTask = async (id) => {
    await fetch(`https://todo-9ybi-jrmf8cne5-purecoder7s-projects.vercel.app/api/todos/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${Token}` },
    });
        setRefresh(prev => !prev)
    
    // settasks(tasks.filter(task => task._id !== id));
};


    // Edit Task 
    const editTask = async (id) => {
        const getTask = tasks.filter((item) => item._id == id)
        settext(getTask[0].text)
        await fetch(`https://todo-9ybi-jrmf8cne5-purecoder7s-projects.vercel.app/api/todos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json', Authorization: `Bearer ${Token}`
            },
        })
        setRefresh(prev => !prev)

    }

    // Toggle Task 
    const toggleTask = async (id) => {
console.log("toggle start");

        // const getTask = tasks.filter(item=>item._id == id)
        await fetch(`https://todo-9ybi-jrmf8cne5-purecoder7s-projects.vercel.app/api/todos/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json', Authorization: `Bearer ${Token}`
            },
        });

console.log("toggle end");

        setRefresh(prev => !prev); // trigger re-fetch

    }


    return (
        <>
  {!Token ? (
    <Login setToken={setToken} setRefresh={setRefresh} />
  ) : (
    <>
      <Navbar setToken={setToken} />
      <TodoInput addTodo={setInput} settext={settext} text={text} />
      {tasks.map((item) => (
        <TodoItem
          key={item._id}
          data={item}
          deletTask={deletTask}
          editTask={editTask}
          toggleTask={toggleTask}
        />
      ))}
    </>
  )}
</>

    )
}

export default Dasboard
