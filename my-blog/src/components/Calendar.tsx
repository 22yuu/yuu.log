'use client';
import {
  startOfMonth,
  endOfMonth,
  addMonths,
  subMonths,
  format,
} from 'date-fns';
import { useState } from 'react';

const countColors = [
  'bg-gray-100',
  'bg-lime-100',
  'bg-lime-200',
  'bg-lime-300',
  'bg-lime-400',
  'bg-lime-500',
  'bg-lime-600',
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
    <div className="w-full text-theme-text my-auto">
      {/* Calendar Header */}
      <div className="flex w-full justify-between mb-2">
        <button onClick={onHandlePrevMonth}>◀︎</button>
        <h2>{`${format(currentMonth, 'M')}월`}</h2>
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
    <div className="flex flex-col gap-1 w-full p-2">
      {mockWeeks.map((_, weekIndex) => {
        return (
          <div key={weekIndex} className="grid grid-cols-7 gap-1">
            {mockDays.map((_, dayIndex) => {
              const flatIndex = weekIndex * 7 + dayIndex;

              if (
                (weekIndex === 0 && dayIndex < start) ||
                (weekIndex === mockWeeks.length - 1 && end < dayIndex)
              ) {
                return (
                  <div
                    key={dayIndex}
                    className="h-4 bg-transparent box-border border"
                  ></div>
                );
              }

              return (
                <div
                  key={dayIndex}
                  className={`h-4 ${
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
