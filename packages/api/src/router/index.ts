import { router } from "../trpc";
import { scheduleRouter } from "./schedule";
import { localeRouter } from "./locale";

export const appRouter = router({
  schedule: scheduleRouter,
  locale: localeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
