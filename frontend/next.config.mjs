/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: [
    // Replace 3000 with your actual development port if it's different
    'http://192.168.0.150:3000',
    // You might also want to include the localhost version
    'http://localhost:3000',
    // And the standard network address (0.0.0.0 or 127.0.0.1)
    'http://127.0.0.1:3000', 
  ],
};

export default nextConfig;
