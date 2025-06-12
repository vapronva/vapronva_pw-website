import { type NextConfig } from "next";

const config: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
};

import { withSentryConfig } from "@sentry/nextjs";

export default withSentryConfig(config, {
  org: "cmld",
  project: "vapronvapw-web",
  sentryUrl: "https://sentry.cumlord.ru/",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  reactComponentAnnotation: {
    enabled: true,
  },
  tunnelRoute: "/monitoring",
  disableLogger: true,
  automaticVercelMonitors: true,
});
