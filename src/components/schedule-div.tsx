import React from "react";

type ScheduleItem = {
  time: string;
  duration: string;
  title: string;
  speaker: string;
  isHighlighted: boolean;
  description?: string;
};

interface ScheduleDivProps {
  data?: ScheduleItem[];
}

const ScheduleDiv = ({ data = [] }: ScheduleDivProps) => {
  if (!data || data.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto p-4">
        No schedule data available
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Header - Only visible on desktop */}
      <div className="hidden lg:grid lg:grid-cols-12 bg-gray-100 p-4 rounded-t-lg font-semibold">
        <div className="col-span-3">시간</div>
        <div className="col-span-6">주제 및 내용</div>
        <div className="col-span-3">발표자</div>
      </div>

      {/* Schedule Items */}
      <div className="space-y-2">
        {data.map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow ${
              item.isHighlighted ? "bg-amber-50" : "bg-white"
            } 
                       lg:grid lg:grid-cols-12 lg:gap-4 space-y-2 lg:space-y-0`}
          >
            {/* Time Section */}
            <div className="lg:col-span-3 flex lg:block justify-between items-center">
              <span className="font-medium">{item.time}</span>
              <span className="text-gray-500 text-sm lg:ml-2">
                ({item.duration})
              </span>
            </div>

            {/* Title Section */}
            <div className="lg:col-span-6">
              <h3 className="font-medium">{item.title}</h3>
              {item.description && (
                <p className="text-sm">{item.description}</p>
              )}
            </div>

            {/* Speaker Section */}
            <div className="lg:col-span-3 text-gray-600">{item.speaker}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleDiv;
