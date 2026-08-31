/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // static export — works on GitHub Pages, no server needed
  images: { unoptimized: true }, // next/image optimization needs a server; disable for static export
  trailingSlash: true,     // /work/byzzer/ instead of /work/byzzer — plays nicer with GitHub Pages routing
};

module.exports = nextConfig;
