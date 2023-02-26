/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let basePath = '';

if (isGithubActions) {
  basePath = `/my-web-site`;
}

const nextConfig = {
  basePath: basePath,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
