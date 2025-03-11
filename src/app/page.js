"use client"

import { useEffect } from "react"

const Home = async () => {
  // Server side fetchingde linking evveline localhost ve port yazilmalidir
  // const response = await fetch('http://localhost:3000/api/users')
  // const users = await response.json()

  const getUsers = async () => {
    const response = await fetch('/api/users')
    const users = await response.json()
    console.log(users)
  }

  useEffect(() => {
    getUsers()
  })

  return (
    <div>Home</div>
  )
}

export default Home