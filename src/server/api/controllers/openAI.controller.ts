/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import {
  publicProcedure,
  protectedProcedure,
} from "node_modules/server/api/trpc";

// types
import type { Params } from "@/server/api/constants/@types";
import { StatusCode } from '@/server/api/constants/@types' 

// schema
import type { openAIChatTextType } from "../schema/openAI.schema";

// config
import openAI from "../openAI.config";

export const generateTextHandler = async ({ input }: Params<openAIChatTextType>) => {
  try {
    const completion = await openAI.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: input.text}],
    })

    return {
     status: StatusCode.SUCCESS,
     data: {
      generatedText: completion.data?.choices[0]?.message?.content,
      ...completion.data,
     }
    }
  } catch (error) {
    return {
      status: StatusCode.ERROR,
      error,
    }
  }



    // ctx.prisma.user.findUnique({ where: { text: input.text } });
}
