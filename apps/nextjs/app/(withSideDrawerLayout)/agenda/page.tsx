import DateCalendarPicker from "@/nextjs/components/molecules/Calendar";

import { prisma } from "@acme/db";
import { object } from "zod";
export default async function page({ searchParams }: { searchParams: any }) {
  const startOfDay = new Date(searchParams.date);
  console.log(startOfDay);
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date(searchParams.date);
  endOfDay.setHours(23, 59, 59, 999);

  const duties = await prisma.schedule.findMany({
    where: {
      dutyStartDateTime: {
        gte: startOfDay,
        lte: endOfDay,
      },
    },
  });
  return (
    <div className="text-center">
      <h1>Agenda</h1>
      <div>
        <DateCalendarPicker></DateCalendarPicker>
      </div>
      <div>{startOfDay}</div>
    </div>
  );
}
