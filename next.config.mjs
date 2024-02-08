/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: function () {
    return {
      "/": { page: "/seasons" },
    };
  },
};

export default nextConfig;
