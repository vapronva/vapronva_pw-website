import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://787f0c836e02a35bdfb9a90e3e56ec63@sentry.cumlord.ru/61",
  integrations: [Sentry.replayIntegration()],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 1.0,
  replaysOnErrorSampleRate: 1.0,
  debug: false,
});
