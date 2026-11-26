import { type NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs/config";

const config: NextConfig = {
  output: "standalone",
  agentRules: false,
  poweredByHeader: false,
  images: { unoptimized: true },
  outputFileTracingExcludes: {
    "*": [
      "node_modules/.pnpm/@img+*/**",
      "node_modules/.pnpm/sharp@*/**",
      "node_modules/@img/**",
      "node_modules/sharp/**",
    ],
  },
  compiler: {
    define: {
      __SENTRY_DEBUG__: false,
    },
  },
  allowedDevOrigins: ["10.200.0.20"],
  redirects: () => [
    {
      source: "/",
      has: [{ type: "host", value: "vapronva\\.ru" }],
      destination: "/en",
      permanent: false,
    },
    {
      source: "/:lang(en|ru)",
      has: [{ type: "host", value: "vapronva\\.pw" }],
      destination: "https://vapronva.ru/:lang",
      permanent: false,
    },
  ],
};

export default withSentryConfig(config, {
  org: "cmld",
  project: "vapronvapw-web",
  sentryUrl: "https://sentry.cumlord.ru/",
});
