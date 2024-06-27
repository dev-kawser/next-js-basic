import Link from "next/link";


const getTime = async () => {
    // const res = await fetch("http://localhost:3000/time", {cache: 'no-store'})
    const res = await fetch("http://localhost:3000/time", {next: {revalidate: 3600}})
    const data = await res.json()
    return data.currentTime
}

const AboutPage = async () => {

    const currentTime = await getTime()

    return (
        <div>
            <h1>this is about page content</h1>
            <h3>Time: {currentTime}</h3>
            <div className="mt-5">
                <Link className="bg-cyan-400 p-2 text-white font-semibold" href={'/about/history'}>History</Link>
                <Link className="bg-cyan-400 p-2 text-white font-semibold ml-2" href={'/about/mission'}>Mission</Link>
            </div>
        </div>
    );
};

export default AboutPage;