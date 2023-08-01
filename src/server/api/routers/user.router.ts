import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "node_modules/server/api/trpc";

// schema
import { getUserById, getUserByName } from "../schema/user.schema";

// controller
import { getUserHandler, getUserByNameHandler } from '@/server/api/controllers/user.controller'

export const userRouter = createTRPCRouter({
  getById: publicProcedure
  .input(getUserById)
  .query(async ({ ctx, input }) => getUserHandler({ ctx, input })),

  getByName: publicProcedure
  .input(getUserByName)
  .query(({ ctx, input }) => getUserByNameHandler({ ctx, input })),


  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
