import AboutPage from "@/components/AboutPage";

export const metadata = {
    title: "about",
    description: "meal page",
};


const AboutPages = async () => {



    return (
        <div className="h-screen">
            <AboutPage></AboutPage>
        </div>
    );
};

export default AboutPages;