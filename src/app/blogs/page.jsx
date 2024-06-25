import Link from "next/link";


const BlogsPage = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-center my-5">This is a BlogsPage</h1>
            {
                blogs.map(blog => (
                    <div className="border-2 p-8 my-3 space-y-2">
                        <h1>{blog.title}</h1>
                        <p>{blog.description}</p>
                        <button className="bg-cyan-400 py-2 px-3">
                            <Link href={`/blogs/${blog.slug}`}>View Details</Link>
                        </button>
                    </div>
                ))
            }
        </div>
    );
};

const blogs = [
    {
        "slug": "iphone-13-pro-max",
        "title": "iPhone 13 Pro Max",
        "description": "The iPhone 13 Pro Max features a 6.7-inch Super Retina XDR display, A15 Bionic chip, Pro camera system with 12MP Ultra Wide, Wide, and Telephoto cameras, and up to 28 hours of video playback."
    },
    {
        "slug": "samsung-galaxy-s21-ultra",
        "title": "Samsung Galaxy S21 Ultra",
        "description": "The Samsung Galaxy S21 Ultra comes with a 6.8-inch Dynamic AMOLED 2X display, Exynos 2100 processor, Quad camera setup with 108MP main sensor, and 5000mAh battery."
    },
    {
        "slug": "google-pixel-6-pro",
        "title": "Google Pixel 6 Pro",
        "description": "Google Pixel 6 Pro offers a 6.7-inch LTPO OLED display, Google Tensor processor, 50MP triple camera system, and 5003mAh battery with 30W fast charging."
    },
    {
        "slug": "oneplus-9-pro",
        "title": "OnePlus 9 Pro",
        "description": "OnePlus 9 Pro features a 6.7-inch Fluid AMOLED display, Snapdragon 888 processor, Hasselblad Quad camera system with 48MP main sensor, and 4500mAh battery with Warp Charge 65T."
    },
    {
        "slug": "xiaomi-mi-11-ultra",
        "title": "Xiaomi Mi 11 Ultra",
        "description": "Xiaomi Mi 11 Ultra boasts a 6.81-inch AMOLED display, Snapdragon 888 processor, 50MP triple camera system, and 5000mAh battery with 67W fast charging."
    },
    {
        "slug": "sony-xperia-1-iii",
        "title": "Sony Xperia 1 III",
        "description": "Sony Xperia 1 III offers a 6.5-inch 4K HDR OLED display, Snapdragon 888 processor, Triple camera system with ZEISS optics, and 4500mAh battery with 30W fast charging."
    },
    {
        "slug": "oppo-find-x3-pro",
        "title": "Oppo Find X3 Pro",
        "description": "Oppo Find X3 Pro features a 6.7-inch AMOLED display, Snapdragon 888 processor, Quad camera system with 50MP main sensor, and 4500mAh battery with 65W SuperVOOC 2.0 fast charging."
    },
    {
        "slug": "asus-rog-phone-5",
        "title": "Asus ROG Phone 5",
        "description": "Asus ROG Phone 5 comes with a 6.78-inch AMOLED display, Snapdragon 888 processor, Triple camera system, and massive 6000mAh battery with 65W fast charging, designed for gaming enthusiasts."
    },
    {
        "slug": "huawei-p50-pro",
        "title": "Huawei P50 Pro",
        "description": "Huawei P50 Pro features a 6.6-inch OLED display, Kirin 9000 processor, Quad camera system with 50MP main sensor, and 4360mAh battery with 66W fast charging."
    },
    {
        "slug": "realme-gt-2-pro",
        "title": "Realme GT 2 Pro",
        "description": "Realme GT 2 Pro offers a 6.7-inch AMOLED display, Snapdragon 8 Gen 1 processor, Triple camera system with 50MP main sensor, and 5000mAh battery with 65W SuperDart fast charging."
    }
]


export default BlogsPage;