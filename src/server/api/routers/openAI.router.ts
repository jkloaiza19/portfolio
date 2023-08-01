import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "node_modules/server/api/trpc";

// schemas
import { openAIChatText } from "../schema/openAI.schema";

// controller
import { generateTextHandler } from "../controllers/openAI.controller";

export const openAIRouter = createTRPCRouter({
  generateText: publicProcedure
    .input(openAIChatText)
    .mutation(async ({ ctx, input }) => generateTextHandler({ ctx, input })),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
