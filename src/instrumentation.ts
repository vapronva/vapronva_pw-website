import * as Sentry from "@sentry/nextjs";

export function register() {
  Sentry.init({
    dsn: "https://787f0c836e02a35bdfb9a90e3e56ec63@sentry.cumlord.ru/61",
    tracesSampleRate: 1.0,
  });
}

export const onRequestError = Sentry.captureRequestError;
