import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true, // enable SSR support for styled-components
  },
};

export default nextConfig;
