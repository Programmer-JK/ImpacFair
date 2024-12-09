import { FileDown } from "lucide-react";
import React from "react";

type ScheduleItem = {
  time: string;
  duration: string;
  title: string;
  speaker: string;
  isHighlighted: boolean;
  description?: string;
  file?: string[];
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
        <div className="col-span-5">주제 및 내용</div>
        <div className="col-span-1">파일</div>
        <div className="col-span-3">발표자</div>
      </div>

      {/* Schedule Items */}
      <div className="space-y-2">
        {data.map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow ${
              item.isHighlighted ? "bg-gray-200" : "bg-white"
            } 
                       lg:grid lg:grid-cols-12 lg:gap-4 space-y-2 lg:space-y-0`}
          >
            {/* Time Section */}
            <div className="lg:col-span-3 flex lg:block justify-between items-center">
              <span className="font-medium">{item.time}</span>
              {/* <span className="text-gray-500 text-sm lg:ml-2">
                ({item.duration})
              </span> */}
            </div>

            {/* Title Section */}
            <div className="lg:col-span-5">
              <h3 className="text-lg">{item.title}</h3>
              {item.description && (
                <p className="text-sm">{item.description}</p>
              )}
            </div>
            <div className="lg:col-span-1 text">
              {item.file &&
                item.file.map((v, idx) => (
                  <a key={idx} href={v} download className="flex items-center">
                    <FileDown />
                  </a>
                ))}
            </div>

            {/* Speaker Section */}
            {/* {item.speaker.split(", ").forEach((v) => (
              <span>{v}</span>
            ))} */}
            <div className="lg:col-span-3 flex flex-col text-gray-600">
              {item.speaker.split(",").map((v, idx) => (
                <span key={idx}>{v}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleDiv;
