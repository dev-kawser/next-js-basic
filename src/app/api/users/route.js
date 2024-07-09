export async function GET() {
    return Response.json({
        users
    })
}

export async function POST(request) {

    const newUser = await request.json()
    users.push({
        id: users.length + 1,
        name: newUser.name
    })

    return Response.json({
        message: "User added successfully",
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