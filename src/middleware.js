// const { NextResponse } = require("next/server")


// export const middleware = (request) => {
//     return NextResponse.rewrite(new URL('/about/history', request.url))
// }

// export const config = {
//     matcher: '/about',
// }



// ------------------------------------------------------------------



// const { NextResponse } = require("next/server")

// export const middleware = (request) => {

//     if (request.nextUrl.pathname.startsWith('/about')) {

//         return NextResponse.rewrite(new URL('/contact', request.url))

//     }
// }


// ---------------------------------------------------------------------


// const { NextResponse } = require("next/server")

// const user = false;

// export const middleware = (request) => {

//     if (!user) {

//         return NextResponse.redirect(new URL('/login', request.url))

//     }

//     return NextResponse.next()
// }

// export const config = {
//     matcher: '/dashboard',
// }


// ---------------------------------------------------------------------


const { NextResponse } = require("next/server")

const user = false;

export const middleware = (request) => {

    const cookies = request.cookies.get('token')

    if (!cookies) {

        return NextResponse.redirect(new URL('/login', request.url))

    }

    return NextResponse.next()
}

export const config = {
    matcher: '/dashboard',
}

