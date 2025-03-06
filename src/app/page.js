import TodoActionForm from "@/components/TodoActionForm"
import Card from "@/components/Card"

const Home = async () => {
  const response = await fetch("http://localhost:5001/cards", { cache: 'no-cache' })
  const cards = await response.json()

  return (
    <>
      <TodoActionForm />

      <div className="grid grid-cols-3 p-10 gap-5">
        <h1 className="font-bold text-4xl col-span-3 mb-5">Cards</h1>
        {cards.map(card => <Card card={card} key={card._id} />)}
      </div>
    </>
  )
}

export default Home