"use client";
import DateCalendarPicker from "@/nextjs/components/molecules/Calendar";

export default function Agenda() {
  return (
    <div className="text-center">
      <h1>Agenda</h1>
      <div>
        <DateCalendarPicker></DateCalendarPicker>
      </div>
    </div>
  );
}
