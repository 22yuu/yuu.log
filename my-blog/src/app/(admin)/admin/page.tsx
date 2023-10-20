'use client';

import React from 'react';
import ContentHeader from '../components/ContentHeader';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Tick,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import getRandomInt from '@/utils/getRandomInt';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const labels = [
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  '오늘',
];

export const options: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false, // 비율 고정
  scales: {
    x: {
      ticks: {
        color: '#A1A1AA',
      },
      grid: {
        display: false,
      },
    },

    y: {
      ticks: {
        color: '#A1A1AA',
      },
      grid: {
        color: function (context) {
          if (context.tick.value > 0) {
            return '#a1a1aa';
          }
        },
      },
      border: {
        dash: [2, 4],
      },
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: '방문자 수',
      data: labels.map(() => getRandomInt(30)),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export default function page() {
  return (
    <div className="w-full px-16 mt-12 md:ml-[350px]">
      <ContentHeader />
      <div className="w-full flex gap-8 px-6 py-8 border border-zinc-300 dark:border-zinc-500 bg-theme-bg">
        <dl>
          <dt className="text-sm">오늘 방문수</dt>
          <dd className="font-semibold text-xl">0</dd>
        </dl>
        <dl>
          <dt className="text-sm">어제 방문수</dt>
          <dd className="font-semibold text-xl">0</dd>
        </dl>
        <dl>
          <dt className="text-sm">누적 방문수</dt>
          <dd className="font-semibold text-xl">0</dd>
        </dl>
      </div>
      <div className="w-full h-80 px-6 py-8 border border-zinc-300 dark:border-zinc-500 bg-theme-bg mt-4">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
