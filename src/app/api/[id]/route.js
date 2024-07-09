export async function PATCH(request, { params }) {
    
    const body = await request.json()
    const index = users.findIndex(us => us.id === parseInt(params.id))

    users[index] = {
        name: body.name
    }

    return Response.json({
        message: "DYNAMIC ID UPDATED",
        users
    })
}


const users = [
    {
        id: 1,
        name: "user 1"
    },
    {
        id: 2,
        name: "user 2"
    },
    {
        id: 3,
        name: "user 3"
    },
]