import Image from "next/image";

import {
  CalendarDays,
  MapPin,
  Users,
  BookCheck,
  FileDown,
  File,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import headerImg from "@/images/workshop.jpg";
import { MobileNav } from "@/components/mobile-nav";
import ScheduleDiv from "@/components/schedule-div";
export default function Home() {
  const scheduleDataFirst = [
    {
      time: "13:00-13:30",
      duration: "30'",
      title: "등록",
      speaker: "",
      isHighlighted: false,
    },
    {
      time: "13:30-13:40",
      duration: "10'",
      title: "워크숍 개요 및 프로그램 소개",
      speaker: "사회자",
      isHighlighted: false,
      file: "/file/test.pdf",
    },
    {
      time: "13:40-14:10",
      duration: "30'",
      title: "계량관리보고 개요 및 작성 원칙",
      speaker: "KINAC 허철 선임연구원",
      isHighlighted: false,
      file: "/file/test.pdf",
    },
    {
      time: "14:10-14:40",
      duration: "30'",
      title: "계량관리보고서 오류 및 수정",
      speaker: "KINAC 김현진 선임연구원",
      isHighlighted: false,
      file: "/file/test.pdf",
    },
    {
      time: "14:40-15:20",
      duration: "40'",
      title: "운영기록 작성 및 사찰 수검",
      speaker: "KINAC 이충민 책임연구원",
      isHighlighted: false,
      file: "/file/test.pdf",
    },
    {
      time: "15:20-15:40",
      duration: "20'",
      title: "Coffee Break",
      speaker: "",
      isHighlighted: true,
    },
    {
      time: "15:40-16:40",
      duration: "60'",
      title: "계량관리보고서 작성 사례 및 현안",
      speaker:
        "KHNP 김우진 대리, KEPCO NF 박혜지 과장, KAERI 정주앙 선임연구원",
      isHighlighted: false,
      file: "/file/test.pdf",
    },
    {
      time: "16:40-17:10",
      duration: "30'",
      title: "한-IAEA IMWG 회의 결과 및 후속조치",
      speaker: "KINAC 차지환 선임연구원",
      isHighlighted: false,
      file: "/file/test.pdf",
    },
    {
      time: "17:10-17:30",
      duration: "20'",
      title: "IAEA 회의내용 및 사전신고 유의사항",
      speaker: "KHNP 이혜진 과장",
      isHighlighted: false,
      file: "/file/test.pdf",
    },
    {
      time: "17:30-18:00",
      duration: "35'",
      title: "계량관리보고 및 사찰 관련 개선사항 회의",
      speaker: "",
      isHighlighted: false,
      file: "",
    },
  ];
  const scheduleDataSecond = [
    {
      time: "9:30-10:00",
      duration: "30'",
      title: "등록",
      speaker: "",
      isHighlighted: false,
    },
    {
      time: "10:00-11:00",
      duration: "60'",
      title: "XML 개요 및 추진 계획",
      speaker: "KINAC 김현진 선임연구원",
      isHighlighted: false,
      file: "/file/test.pdf",
    },
    {
      time: "11:00-11:40",
      duration: "40'",
      title: "개선 추진 계획에 대한 논의",
      description: "",
      speaker: "",
      isHighlighted: false,
      file: "",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">KINAC 계량관리 보고 개선 워크숍</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {/* <li>
                <a href="#about" className="hover:underline">
                  소개
                </a>
              </li> */}
              <li>
                <a href="#schedule" className="hover:underline">
                  일정
                </a>
              </li>
            </ul>
          </nav>
          <MobileNav />
        </div>
      </header>

      <main className="flex-grow">
        <section id="div_titleImage" className="w-full bg-white">
          <div className="container mx-auto">
            <Image
              src={headerImg}
              className="w-full mx-auto px-4"
              alt="banner image"
              priority
            />
          </div>
        </section>

        {/* <section id="about" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">이벤트 소개</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-5">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <CalendarDays className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">날짜</h3>
                  <p>2024년 12월 16일(월) - 17일(화)</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <MapPin className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">장소</h3>
                  <p>올림픽파크텔(서울)</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Users className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">참가자</h3>
                  <p>안전조치 업무 담당자 및 관계자</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-5">
              <Card>
                <CardContent className="p-6 flex flex-col items-center">
                  <BookCheck className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">주제 및 내용</h3>
                  <div>
                    <p>- 계량관리보고에 대한 원칙과 오류 사례 공유</p>
                    <p>- IAEA 사전신고서 양식 및 구체적 내용에 대한 설명</p>
                    <p>- 계량관리보고 양식 및 시스템 개선에 대한 의견 수렴</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center">
                  <FileDown className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">참고자료</h3>
                  <div className="flex flex-col gap-2">
                    <a
                      href="/file/test.pdf"
                      download
                      className="flex items-center gap-2"
                    >
                      <File /> 파일 1
                    </a>
                    <a
                      href="/file/test.pdf"
                      download
                      className="flex items-center gap-2"
                    >
                      <File /> 파일 2
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}

        <section id="schedule" className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">세부 일정</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    첫째 날 - 12월 16일 월요일
                  </h3>
                  <ScheduleDiv data={scheduleDataFirst} />
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    둘째 날 - 12월 17일 화요일
                  </h3>
                  <ScheduleDiv data={scheduleDataSecond} />
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">참고자료</h3>
                  <div className="w-full max-w-4xl mx-auto grid grid-cols-12 bg-gray-100 p-4 rounded-lg">
                    <div className="col-span-11">
                      IAEA 안전조치 용어집 (2022 Edition)
                    </div>
                    <div className="col-span-1">
                      <a
                        href="/file/test.pdf"
                        download
                        className="flex items-center"
                      >
                        <FileDown />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Impac Company All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
