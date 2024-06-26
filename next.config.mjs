/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // remotePatterns: [
        //     {
        //         protocol: "https",
        //         hostname: "https://www.themealdb.com",
        //     },
        // ],
        remotePatterns: [
            {
               protocol: "https",
               hostname: "*",
               port: "",
               pathname: "/**",
            },
         ],
    },
    //     remotePatterns: [
    //         {
    //            protocol: "https",
    //            hostname: "www.themealdb.com",
    //            port: "",
    //            pathname: "/**",
    //         },
    //      ],
    // },
};

export default nextConfig;
