"use client"

import { useRouter } from "next/navigation"

const Card = ({ card }) => {
    const router = useRouter()

    const deleteTodo = async () => {
        const response = await fetch(`http://localhost:5001/cards/${card._id}`, {
            method: "DELETE"
        })

        alert(response.ok ? "Todo deleted" : "Error while deleting todo")
        router.refresh()
    }


    return (
        <div className="border border-gray-200 p-4">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <div className="mt-5 flex items-center gap-2">
                <button onClick={() => {
                    router.push(`/edit/${card._id}`)
                }} className="bg-blue-800 text-white px-3 py-1 hover:cursor-pointer">Edit</button>
                <button onClick={deleteTodo} className="bg-red-800 text-white px-3 py-1 hover:cursor-pointer">Delete</button>
            </div>
        </div>
    )
}

export default Card