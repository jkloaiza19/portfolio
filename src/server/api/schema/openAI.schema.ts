import { z, type TypeOf } from 'zod'

export const openAIChatText = z.object({ text: z.string() });

export type openAIChatTextType = TypeOf<typeof openAIChatText>;