/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images:{
  //   domains:["media.istockphoto.com","images.oyoroomscdn.com","cdn-icons-png.flaticon.com"],
  // }

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', 
        // hostname: 'images.oyoroomscdn.com', 
        // pathname: '**',
      },
      // {
      //   protocol: 'https',
      //   hostname: 'media.istockphoto.com',
      //   // pathname: '***',
      // },
      // {
      //   // protocol: 'https',
      //   // hostname:'cdn-icons-png.flaticon.com',
      //   // pathname: '**',
      // }
      
    ],
  },
  
};

export default nextConfig;
