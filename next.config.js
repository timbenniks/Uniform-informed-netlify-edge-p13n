/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    projectId: process.env.UNIFORM_PROJECT_ID,
    apiKey: process.env.UNIFORM_API_KEY,
    apiHost: process.env.UNIFORM_CLI_BASE_URL || "https://uniform.app",
    previewSecret: process.env.UNIFORM_PREVIEW_SECRET || "uniformconf",
  },
  publicRuntimeConfig: {
    gaTrackingId: process.env.GA4_ID,
    outputType: process.env.UNIFORM_OUTPUT_TYPE,
  },
};

module.exports = nextConfig;
