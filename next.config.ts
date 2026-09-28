import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs/config";

const config: NextConfig = {
  output: "standalone",
  agentRules: false,
  compiler: {
    define: {
      __SENTRY_DEBUG__: false,
    },
  },
};

export default withSentryConfig(config, {
  org: "cmld",
  project: "vapronvapw-web",
  sentryUrl: "https://sentry.cumlord.ru/",
});
