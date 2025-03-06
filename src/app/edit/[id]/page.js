import TodoActionForm from "@/components/TodoActionForm"

const Edit = async ({ params }) => {
    const id = await params.id

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <TodoActionForm id={id} />
        </div>
    )
}

export default Edit