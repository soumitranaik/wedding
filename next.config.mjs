import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
    dest: "public",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify:true,
    disable: false,
    workboxOptions: {
        disableDevLogs: true,
    }
  });

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPWA(nextConfig);
