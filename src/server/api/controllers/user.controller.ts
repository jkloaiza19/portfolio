import { z } from "zod";
import { TRPCError } from "@trpc/server";
import {
  publicProcedure,
  protectedProcedure,
} from "node_modules/server/api/trpc";

import type { Params } from "@/server/api/constants/@types";

// schema
import type { GetUserByIdType, GetUserByNameType } from "../schema/user.schema";

export const getUserHandler = async ({ ctx, input }: Params<GetUserByIdType>) =>
  ctx.prisma.user.findUnique({ where: { id: input.id } });

export const getUserByNameHandler = async ({ ctx, input }: Params<GetUserByNameType>) =>
  ctx.prisma.user.findFirst({ where: { name: input.name } });
// {
//   const user = await ctx.prisma.user.findUnique({ where: { id: input.id } });

//   if (!user) throw new TRPCError({ code: "NOT_FOUND" });

//   return user
// }
