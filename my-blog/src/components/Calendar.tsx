"use client";
import {
  startOfMonth,
  endOfMonth,
  addMonths,
  subMonths,
  format,
} from "date-fns";
import { useState } from "react";

const countColors = [
  "bg-gray-200",
  "bg-green-100",
  "bg-green-200",
  "bg-green-300",
  "bg-green-400",
  "bg-green-500",
  "bg-green-600",
];

export default function Calendar() {
  const [currentMonth, setMonth] = useState(new Date());
  const monthStart = startOfMonth(currentMonth).getDay();
  const monthEnd = endOfMonth(currentMonth).getDay();

  const onHandleNextMonth = () => {
    setMonth(addMonths(currentMonth, 1));
  };

  const onHandlePrevMonth = () => {
    setMonth(subMonths(currentMonth, 1));
  };

  return (
    <div className="w-full mt-4 text-theme-text">
      {/* Calendar Header */}
      <div className="flex w-full justify-between mb-4">
        <button onClick={onHandlePrevMonth}>◀︎</button>
        <h2>{`${format(currentMonth, "M")}월`}</h2>
        <button onClick={onHandleNextMonth}>▶︎</button>
      </div>
      {/* Calendar Content */}
      {getDays(monthStart, monthEnd)}
    </div>
  );
}

function getDays(start: number, end: number) {
  const mockWeeks = Array.from({ length: 5 });
  const mockDays = Array.from({ length: 7 });
  const mockFlatMaps = Array.from({ length: 35 }, (x) => getRandomInt(10)); // 0~28

  return (
    <div className="flex flex-col gap-2 w-full p-2">
      {mockWeeks.map((_, weekIndex) => {
        return (
          <div key={weekIndex} className="w-full flex grow gap-2 mb-1">
            {mockDays.map((_, dayIndex) => {
              const flatIndex = weekIndex * 7 + dayIndex;

              if (
                (weekIndex === 0 && dayIndex < start) ||
                (weekIndex === mockWeeks.length - 1 && end < dayIndex)
              ) {
                return (
                  <div key={dayIndex} className="grow h-4 bg-gray-200"></div>
                );
              }

              return (
                <div
                  key={dayIndex}
                  className={`grow h-4 ${
                    mockFlatMaps[flatIndex] < countColors.length
                      ? countColors[mockFlatMaps[flatIndex]]
                      : countColors[countColors.length - 1]
                  }`}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
