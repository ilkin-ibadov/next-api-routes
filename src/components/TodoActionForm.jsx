"use client"
import { useEffect, useState } from "react"

const TodoActionForm = ({ id }) => {
    const [formData, setFormData] = useState({})

    const getTodo = async () => {
        const response = await fetch(`http://localhost:5001/cards/${id}`)
        const data = await response.json()

        setFormData(data)
    }

    const createTodo = async () => {
        const response = await fetch("http://localhost:5001/cards", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })

        alert(response.ok ? "Todo created" : "Error while creating todo")
    }

    const editTodo = async () => {
        const response = await fetch(`http://localhost:5001/cards/${id}`, {
            method: "PUT",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })

        alert(response.ok ? "Todo edited" : "Error while editing todo")
    }

    useEffect(() => {
        id && getTodo()
    }, [id])


    return (
        <div className="flex flex-col items-center gap-4 p-4 border border-gray-200 w-[500px]">
            <input value={formData?.title} onChange={(e) => {
                setFormData(prevState => ({ ...prevState, title: e.target.value }))
            }} className="w-full p-3 border border-gray-200" type="text" placeholder="Enter title" />
            <input value={formData?.description} onChange={(e) => {
                setFormData(prevState => ({ ...prevState, description: e.target.value }))
            }} className="w-full p-3 border border-gray-200" type="text" placeholder="Enter description" />
            <button onClick={() => {
                id ? editTodo() : createTodo()
            }} className="w-full bg-green-800 text-white py-3 hover:cursor-pointer">{id ? "Edit" : "Create"}</button>
        </div>
    )
}

export default TodoActionForm