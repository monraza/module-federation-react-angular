/** @type {import('next').NextConfig} */
import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "host",
          remotes: {
            profile_user: `profile_user@http://localhost:3001/remoteEntry.js`,
            angularApp: `angularApp@http://localhost:4201/remoteEntry.js`,
          },
          shared: {
            "@angular/core": {
              singleton: true,
              strictVersion: true,
              requiredVersion: "^16.2.12",
            },
            "@angular/common": {
              singleton: true,
              strictVersion: true,
              requiredVersion: "^16.2.12",
            },
            "@angular/common/http": {
              singleton: true,
              strictVersion: true,
              requiredVersion: "^16.2.12",
            },
            "@angular/router": {
              singleton: true,
              strictVersion: true,
              requiredVersion: "^16.2.12",
            },
            "zone.js": {
              singleton: true,
              strictVersion: true,
              requiredVersion: "~0.13.0",
            },
          },
          filename: "static/chunks/remoteEntry.js",
        })
      );
    }

    return config;
  },
};

export default nextConfig;
