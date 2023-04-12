import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const localeRouter = router({
  createLocale: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        city: z.string(),
        state: z.string(),
        latitute: z.number(),
        longitude: z.number(),
        address: z.string(),
        scheduleId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const createdLocale = await ctx.prisma.locale.create({
        data: {
          name: input.name,
          city: input.city,
          state: input.state,
          latitute: input.latitute,
          longitude: input.longitude,
          address: input.address,
          scheduleId: input.scheduleId,
        },
      });
      if (!createdLocale) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Could not create locale",
        });
      }
      return createdLocale;
    }),
});
