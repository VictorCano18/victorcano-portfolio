/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    productionBrowserSourceMaps: false, // Disable source maps in development
    optimizeFonts: false, // Disable font optimization
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/, // Match SVG files
        use: ['@svgr/webpack'], // Use SVGR for transforming SVGs into React components
      });
      return config;
    },
  };
  
  module.exports = nextConfig;