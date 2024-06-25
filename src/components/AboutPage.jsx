import Link from "next/link";


const AboutPage = () => {
    return (
        <div>
            <h1>this is about page content</h1>
            <div className="mt-5">
                <Link className="bg-cyan-400 p-2 text-white font-semibold" href={'/about/history'}>History</Link>
                <Link className="bg-cyan-400 p-2 text-white font-semibold ml-2" href={'/about/mission'}>Mission</Link>
            </div>
        </div>
    );
};

export default AboutPage;