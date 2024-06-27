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
    async redirects() {
        return [
            // Basic redirect
            {
                source: '/about',
                destination: '/posts',
                permanent: true,
            },
            // // Wildcard path matching
            // {
            //     source: '/blog/:slug',
            //     destination: '/news/:slug',
            //     permanent: true,
            // },
        ]
    },
};

export default nextConfig;
