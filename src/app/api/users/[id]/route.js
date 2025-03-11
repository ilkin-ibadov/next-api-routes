export async function DELETE(req, {params}) {
    const id = params.id;

    return new Response(JSON.stringify({ message: `User with id: ${id} is deleted` }), {
        headers: { "Content-Type": "application/json" },
    });
}

export async function PUT(req, { params }) {
    const body = await req.json();
    const id = params.id;

    return new Response(JSON.stringify({ message: `User with id: ${id} is updated with ${body.data}` }), {
        headers: { "Content-Type": "application/json" },
    });
}