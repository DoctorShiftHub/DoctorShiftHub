import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const scheduleRouter = router({
  createDuty: protectedProcedure
    .input(
      z.object({
        dutyStartDateTime: z.string(),
        dutyEndDateTime: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const createdDuty = await ctx.prisma.schedule.create({
        data: {
          ownerId: ctx.auth.userId,
          dutyEndDateTime: input.dutyEndDateTime,
          dutyStartDateTime: input.dutyStartDateTime,
        },
      });
      if (!createdDuty) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Could not create duty",
        });
      }
      return createdDuty;
    }),
});
