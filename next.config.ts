import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs/config";

const config: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
};

export default withSentryConfig(config, {
  org: "cmld",
  project: "vapronvapw-web",
  sentryUrl: "https://sentry.cumlord.ru/",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  tunnelRoute: "/mwah",
  bundleSizeOptimizations: {
    excludeDebugStatements: true,
  },
});
