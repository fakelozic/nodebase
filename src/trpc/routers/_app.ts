import { createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/prisma";
export const appRouter = createTRPCRouter({
  getUsers: protectedProcedure.query(({ ctx }) => {
    console.log({ userId: ctx.session.user.id });
    return prisma.user.findFirst({ where: { id: ctx.session.user.id } });
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
