import type { PrismaClient } from '@prisma/client';
import type { Session } from 'next-auth';

export enum StatusCode {
  SUCCESS = 'Success',
  ERROR = 'ERROR',
}

export interface Ctx {
  prisma: PrismaClient;
  session: Session | null;
};

export interface Params<T> {
  ctx: Ctx;
  input: T;
};

export interface Response<T> {
  status: StatusCode
  data: T | null
  Error?: string 
}