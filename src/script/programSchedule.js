const timeSchedule = [
  {
    startTime: "13:00",
    endTime: "13:30",
    file: "",
    programTitle: "행사 등록",
    programDescription: [],
    companyName: "",
    publisherName: "",
  },
  {
    startTime: "13:30",
    endTime: "13:40",
    file: "",
    programTitle: "행사 소개",
    programDescription: [],
    companyName: "",
    publisherName: "",
  },
  {
    startTime: "14:00",
    endTime: "14:30",
    file: "../file/resume.pdf",
    programTitle: "프로그램 타이틀1",
    programDescription: ["1. 프로그램1 설명1", "2. 프로그램1 설명2"],
    companyName: "회사명",
    publisherName: "아무개 대표",
  },
  {
    startTime: "14:30",
    endTime: "15:00",
    file: "../file/resume.pdf",
    programTitle: "프로그램 타이틀2",
    programDescription: ["1. 프로그램2 설명1", "2. 프로그램2 설명2"],
    companyName: "회사명",
    publisherName: "아무개 대표",
  },
  {
    startTime: "15:00",
    endTime: "15:30",
    file: "../file/resume.pdf",
    programTitle: "프로그램 타이틀3",
    programDescription: ["1. 프로그램3 설명1", "2. 프로그램3 설명2"],
    companyName: "회사명",
    publisherName: "아무개 대표",
  },
  {
    startTime: "15:30",
    endTime: "16:00",
    file: "../file/resume.pdf",
    programTitle: "프로그램 타이틀4",
    programDescription: ["1. 프로그램4 설명1", "2. 프로그램4 설명2"],
    companyName: "회사명",
    publisherName: "아무개 대표",
  },
  {
    startTime: "16:00",
    endTime: "16:30",
    file: "../file/resume.pdf",
    programTitle: "프로그램 타이틀5",
    programDescription: ["1. 프로그램5 설명1", "2. 프로그램5 설명2"],
    companyName: "회사명",
    publisherName: "아무개 대표",
  },
  {
    startTime: "16:30",
    endTime: "17:00",
    file: "../file/resume.pdf",
    programTitle: "프로그램 타이틀6",
    programDescription: ["1. 프로그램6 설명1", "2. 프로그램6 설명2"],
    companyName: "회사명",
    publisherName: "아무개 대표",
  },
];

// HTML 생성 함수
function createScheduleHTML(schedule) {
  const downloadButton = schedule.file
    ? `
          <a href="${schedule.file}" download="presentation.pdf" class="flex flex-col items-end md:items-center justify-center">
              <img src="./src/image/file-down.png" class="w-5 h-5 object-cover" alt="download">
              <span class="hidden md:block text-sm">발표자료</span>
              <span class="hidden md:block text-sm">다운로드</span>
          </a>
      `
    : "";

  const descriptions = schedule.programDescription.length
    ? `
          <div class="text-gray-600 space-y-1">
              ${schedule.programDescription
                .map((desc) => `<div>${desc}</div>`)
                .join("")}
          </div>
      `
    : "";

  const presentationName = schedule.publisherName.length
    ? `
  <div> ${schedule.publisherName} | ${schedule.companyName}</div><br/>
  `
    : "";

  return `
      <div class="hidden md:grid grid-cols-12 border-y-2 border-x-2 border-gray-200">
        <div class="col-span-2 py-4 px-4 text-gray-600 flex justify-center items-center">
            ${schedule.startTime} ~ ${schedule.endTime}
        </div>
        <div class="col-span-1 flex justify-center items-center border-x-2">
            ${downloadButton}
        </div>
        <div class="col-span-7 py-4 px-4 border-r-2">
            <div class="flex mb-2 font-bold items-center">${schedule.programTitle}</div>
            ${descriptions}
        </div>
        <div class="col-span-2 py-4 px-4 text-left">
            <div class="text-gray-600">${schedule.companyName}</div>
            <div>${schedule.publisherName}</div>
        </div>
      </div>
      <div class="grid md:hidden grid-cols-12 border-y-2 border-x-2 border-gray-200">
          <div class="col-span-3 py-4 px-4 text-gray-600 flex justify-center items-center">
              ${schedule.startTime} ~ ${schedule.endTime}
          </div>
          <div class="col-span-9 py-4 px-4 border-l-2 flex-row justify-center items-center">
              <div class="flex mb-2 font-bold items-center">${schedule.programTitle}</div>
              ${presentationName}
              ${descriptions}
              ${downloadButton}
          </div>
      </div>
  `;
}

// DOM이 로드된 후 실행되도록 설정
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("div_timeTable");
  container.innerHTML = timeSchedule
    .map((schedule) => createScheduleHTML(schedule))
    .join("");
});
