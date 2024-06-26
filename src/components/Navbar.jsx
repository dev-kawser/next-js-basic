"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


const Navbar = () => {

    const pathName = usePathname()
    const router = useRouter()

    const links = [
        {
            title: 'Home',
            path: "/"
        },
        {
            title: 'About',
            path: "/about"
        },
        {
            title: 'Services',
            path: "/services"
        },
        {
            title: 'Blogs',
            path: "/blogs"
        },
        {
            title: 'Categories',
            path: "/categories"
        },
        {
            title: 'Contact',
            path: "/contact"
        },
        {
            title: 'Dashboard',
            path: "/dashboard"
        },
        {
            title: 'Posts',
            path: "/posts"
        },
        {
            title: 'Meals',
            path: "/meals"
        },
    ]

    const loginHandler = () => {
        router.push('/login')
    }

    if (pathName.includes('dashboard')) {
        return <div className='p-5 bg-cyan-300 text-3xl font-semibold text-black'>
            dashboard layout (<Link href={'/'}>Home →</Link>)
        </div>
    }

    return (
        <div className="flex justify-between p-7 bg-red-500 text-white">
            <div className="text-3xl font-bold font-mono">
                <Link href={'/'}>Next JS</Link>
            </div>
            <ul className="flex justify-between space-x-4 text-xl font-mono">
                {
                    links.map((link) =>
                        <Link className={`${pathName === link.path && "text-black"}`} key={link.path} href={link.path}>{link.title}</Link>
                    )
                }
            </ul>
            <div>
                <button className="bg-cyan-700 px-3 py-1 font-semibold" onClick={loginHandler}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;