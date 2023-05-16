import React, { useState } from 'react';
import { schedule as SCHEDULE } from '../data/schedule';

interface ScheduleContentProps {
  children?: React.ReactNode;
}

const ScheduleContent: React.FC<ScheduleContentProps> = () => {
  const DEFAULT_ID = SCHEDULE[0]?.id;

  const [activeDay, setActiveDay] = useState(DEFAULT_ID);

  const isActiveDay = (day: number) => day == activeDay;

  const activeDayButtonStyles = (id: number) =>
    ` ${isActiveDay(id) ? 'bg-secondary text-white' : 'bg-primary text-black'}`;

  const getActiveDayEvents = () => {
    return SCHEDULE.filter((day) => day.id === activeDay)[0].events;
  };

  return (
    <>
      <div className="container flex w-full flex-col items-center justify-center">
        <div className="flex w-full flex-col justify-center lg:flex-row">
          {SCHEDULE.map((day) => {
            const { id, date, name } = day;

            return (
              <button
                key={id}
                className={`
                    ${activeDayButtonStyles(id)}
                    w-full px-4 py-2.5 transition-all text-md md:text-lg lg:text-lg duration-300 hover:brightness-75`}
                onClick={() => setActiveDay(id)}>
                {name}
              </button>
            );
          })}
        </div>
        <table className="text-md w-98 mt-6 w-full text-md md:text-lg lg:text-xl table-auto border-collapse min-h-[28rem]">
          <thead>
            <tr className="border-b-2 border-gray-500">
              <th className="w-1/3 py-4 px-4 text-left">Hora</th>
              <th className="py-4 text-left">Atividade</th>
            </tr>
          </thead>

          <tbody>
            {getActiveDayEvents().map((event, index) => {
              const { startTime, endTime, description } = event;

              return (
                <tr className="border-b-2 border-gray-500" key={index}>
                  <td className="py-4 px-4">{`${startTime} - ${endTime}`}</td>
                  <td className="py-4 pr-4">{description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ScheduleContent;
