import { createTRPCRouter } from "node_modules/server/api/trpc";
import { exampleRouter } from "node_modules/server/api/routers/example";
import { userRouter } from 'node_modules/server/api/routers/user.router'
import { openAIRouter } from 'node_modules/server/api/routers/openAI.router'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  user: userRouter,
  openIA: openAIRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
