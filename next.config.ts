/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! UYARI !!
    // Projende type hatası olsa bile build almasına izin verir.
    ignoreBuildErrors: true,
  },
  eslint: {
    // Lint hatalarını görmezden gelir.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;