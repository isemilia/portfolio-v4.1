import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    '/api/projects': ['./data/projects.json'],
    '/api/work-experience': ['./data/timeline.json'],
  },
};

export default nextConfig;
