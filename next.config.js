/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      { hostname: "icons.duckduckgo.com" },
      { hostname: "res.cloudinary.com" },
      { hostname: "www.google.com" },
      { hostname: "images.unsplash.com" },
      // Facebook CDN
      { 
        protocol: "https",
        hostname: "scontent.fbkk8-4.fna.fbcdn.net",
      },
      {
        protocol: "https", 
        hostname: "**.fbcdn.net",
      },
      // GitHub avatars
      { hostname: "avatars.githubusercontent.com" },
      // Twitter/X avatars  
      { hostname: "pbs.twimg.com" },
      // LinkedIn
      { hostname: "media.licdn.com" },
    ],
    // Fallback for unoptimized images
    unoptimized: false,
  },
};
