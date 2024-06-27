import Image from "next/image";
import itachi from "../../public/images/itachi.jpg"

const Banner = () => {
    return (
        <div className="bg-orange-500">
            <Image src={itachi} alt="itachi" height={1280} width={1920}></Image>
        </div>
    );
};

export default Banner;