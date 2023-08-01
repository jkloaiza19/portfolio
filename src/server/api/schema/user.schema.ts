import { z, type TypeOf } from 'zod'

export const schema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().optional(),
  emailVerified: z.date().optional(),
  image: z.string().optional(),
  accounts: z.string().array().optional(),
  sessions: z.string().array().optional(),
})

export type UserType = TypeOf<typeof schema>

export const getUserById = z.object({
  id: z.string(),
});

export type GetUserByIdType = TypeOf<typeof getUserById>;

export const getUserByName = z.object({
  name: z.string(),
});

export type GetUserByNameType = TypeOf<typeof getUserByName>;