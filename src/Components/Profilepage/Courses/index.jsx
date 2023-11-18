import { useState } from "react";
import { Progress, Rating } from "@material-tailwind/react";
import dayjs from 'dayjs';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import 'react-calendar/dist/Calendar.css'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


export function ProfileCourses(){
  const [activeTab, setActiveTab] = useState("progress");
  const [value, setValue] = useState(dayjs('2022-04-16'));

  const data = [
    {
      label: "In Progress (2)",
      value: "progress",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Completed (3)",
      value: "completed",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Attendance (90%)",
      value: "attendance",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <section className="p-[40px_32px] bg-[#F6F6F6]">
      <headers className="text-[#000D3B] text-[24px] font-bold">
        My Courses
      </headers>
      <section className="my-[24px]">
        <div className="grid grid-cols-7 grid-rows-1 gap-[16px]">
          <div className="grid grid-cols-7 grid-rows-1 col-span-5 bg-[rgba(204,209,227,0.30)] rounded-[16px] p-[16px] min-h-[105px] font-secondary">
            <img src="/src/assets/images/profile_courses_1.png" className="col-span-2 row-span-2 h-[205px]"/>
            <div className="col-span-5 row-span-1">
              <div className="flex items-center justify-between mb-[10px]">
                <p className="text-[#2B3F8C] font-bold text-[18px]">
                  Introduction To Coding
                </p>
                <p className="flex items-center gap-x-[4px]">
                  <Rating value={4} 
                  ratedIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M7.99967 11.847L12.1197 14.3337L11.0263 9.64699L14.6663 6.49366L9.87301 6.08699L7.99967 1.66699L6.12634 6.08699L1.33301 6.49366L4.97301 9.64699L3.87967 14.3337L7.99967 11.847Z" fill="#FFC700"/>
                    </svg>
                  }
                  unratedIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M14.6663 6.49366L9.87301 6.08033L7.99967 1.66699L6.12634 6.08699L1.33301 6.49366L4.97301 9.64699L3.87967 14.3337L7.99967 11.847L12.1197 14.3337L11.033 9.64699L14.6663 6.49366ZM7.99967 10.6003V4.40033L9.13967 7.09366L12.0597 7.34699L9.84634 9.26699L10.513 12.1203L7.99967 10.6003Z" fill="#FFC700"/>
                    </svg>
                  }
                  />
                  <p className="text-[#FE0000] text-[14px] font-bold">4.5</p>
                </p>
              </div>
              <div className="flex items-center gap-[8px] mb-[12px]">
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8.00016 1.33301C4.3335 1.33301 1.3335 4.33301 1.3335 7.99967C1.3335 11.6663 4.3335 14.6663 8.00016 14.6663C11.6668 14.6663 14.6668 11.6663 14.6668 7.99967C14.6668 4.33301 11.6668 1.33301 8.00016 1.33301ZM8.00016 13.333C5.06016 13.333 2.66683 10.9397 2.66683 7.99967C2.66683 5.05967 5.06016 2.66634 8.00016 2.66634C10.9402 2.66634 13.3335 5.05967 13.3335 7.99967C13.3335 10.9397 10.9402 13.333 8.00016 13.333ZM8.3335 4.66634H7.3335V8.66634L10.8002 10.7997L11.3335 9.93301L8.3335 8.13301V4.66634Z" fill="#FE0000"/>
                  </svg>
                </p>
                <p className="text-[#272727] text-[14px]">5 hours completed</p>
              </div>
              <div className="text-end">
                <Progress value={25} size="sm" color="red" className="h-[5px] mb-[8px]"/>
                <p className="text-[12px] font-bold">100%</p>
              </div>
            </div>
            <div className="col-span-5">
              {/* <div className="text-end">
                <Progress value={25} size="sm" />
                <p>100%</p>
              </div> */}
              <div className="border-y-[#CCD1E3] border-y-[1px] pt-[8px] pb-[8px] mb-[14px]">
                <p className="font-bold text-[14px] mb-[8px]">Next Lesson</p>
                <div className="flex justify-between">
                  <p className="flex items-center gap-x-[8px] font-bold text-[14px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path d="M12.0003 1.83301H4.00033C3.26699 1.83301 2.66699 2.43301 2.66699 3.16634V13.833C2.66699 14.5663 3.26699 15.1663 4.00033 15.1663H12.0003C12.7337 15.1663 13.3337 14.5663 13.3337 13.833V3.16634C13.3337 2.43301 12.7337 1.83301 12.0003 1.83301ZM6.00033 3.16634H7.33366V6.49967L6.66699 5.99967L6.00033 6.49967V3.16634ZM12.0003 13.833H4.00033V3.16634H4.66699V9.16634L6.66699 7.66634L8.66699 9.16634V3.16634H12.0003V13.833Z" fill="#FE0000"/>
                    </svg>
                    Introduction To JavaScript And Typescript
                  </p>
                  <p className="flex items-center gap-x-[8px] text-[14px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path d="M7.99967 1.83301C4.33301 1.83301 1.33301 4.83301 1.33301 8.49967C1.33301 12.1663 4.33301 15.1663 7.99967 15.1663C11.6663 15.1663 14.6663 12.1663 14.6663 8.49967C14.6663 4.83301 11.6663 1.83301 7.99967 1.83301ZM7.99967 13.833C5.05967 13.833 2.66634 11.4397 2.66634 8.49967C2.66634 5.55967 5.05967 3.16634 7.99967 3.16634C10.9397 3.16634 13.333 5.55967 13.333 8.49967C13.333 11.4397 10.9397 13.833 7.99967 13.833ZM8.33301 5.16634H7.33301V9.16634L10.7997 11.2997L11.333 10.433L8.33301 8.63301V5.16634Z" fill="#FE0000"/>
                    </svg>
                    50 Minutes
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="flex items-center gap-[2px] text-[14px] font-semibold text-[#001975] underline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16" fill="none">
                    <path d="M12 10.747C11.4933 10.747 11.04 10.947 10.6933 11.2604L5.94 8.49368C5.97333 8.34035 6 8.18702 6 8.02702C6 7.86702 5.97333 7.71369 5.94 7.56035L10.64 4.82035C11 5.15369 11.4733 5.36035 12 5.36035C13.1067 5.36035 14 4.46702 14 3.36035C14 2.25368 13.1067 1.36035 12 1.36035C10.8933 1.36035 10 2.25368 10 3.36035C10 3.52035 10.0267 3.67368 10.06 3.82702L5.36 6.56702C5 6.23369 4.52667 6.02702 4 6.02702C2.89333 6.02702 2 6.92035 2 8.02702C2 9.13369 2.89333 10.027 4 10.027C4.52667 10.027 5 9.82035 5.36 9.48702L10.1067 12.2604C10.0733 12.4004 10.0533 12.547 10.0533 12.6937C10.0533 13.767 10.9267 14.6404 12 14.6404C13.0733 14.6404 13.9467 13.767 13.9467 12.6937C13.9467 11.6204 13.0733 10.747 12 10.747ZM12 2.69368C12.3667 2.69368 12.6667 2.99368 12.6667 3.36035C12.6667 3.72702 12.3667 4.02702 12 4.02702C11.6333 4.02702 11.3333 3.72702 11.3333 3.36035C11.3333 2.99368 11.6333 2.69368 12 2.69368ZM4 8.69369C3.63333 8.69369 3.33333 8.39369 3.33333 8.02702C3.33333 7.66035 3.63333 7.36035 4 7.36035C4.36667 7.36035 4.66667 7.66035 4.66667 8.02702C4.66667 8.39369 4.36667 8.69369 4 8.69369ZM12 13.3737C11.6333 13.3737 11.3333 13.0737 11.3333 12.707C11.3333 12.3404 11.6333 12.0404 12 12.0404C12.3667 12.0404 12.6667 12.3404 12.6667 12.707C12.6667 13.0737 12.3667 13.3737 12 13.3737Z" fill="#001975"/>
                  </svg>
                  Share Progress
                </p>
                <p className="flex items-center gap-[2px] text-[#FE0000] text-[14px] font-semibold underline">
                  Continue Course
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16" fill="none">
                    <path d="M8.00033 2.66699L7.06033 3.60699L10.7803 7.33366H2.66699V8.66699H10.7803L7.06033 12.3937L8.00033 13.3337L13.3337 8.00033L8.00033 2.66699Z" fill="#FE0000"/>
                  </svg>
                </p>
              </div>
            </div>
          </div>
          {/* calendar */}
          <div className="col-span-2 row-span-4">
            <div className="w-full m-0 p-0 bg-white rounded-[16px] px-[10px]">
              <header className="flex gap-x-[8px] items-center text-[15px] font-bold text-[#2B3F8C] px-[23px] pt-[20px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path d="M13.333 2.50033H12.6663V1.16699H11.333V2.50033H4.66634V1.16699H3.33301V2.50033H2.66634C1.93301 2.50033 1.33301 3.10033 1.33301 3.83366V14.5003C1.33301 15.2337 1.93301 15.8337 2.66634 15.8337H13.333C14.0663 15.8337 14.6663 15.2337 14.6663 14.5003V3.83366C14.6663 3.10033 14.0663 2.50033 13.333 2.50033ZM13.333 14.5003H2.66634V7.16699H13.333V14.5003ZM13.333 5.83366H2.66634V3.83366H13.333V5.83366Z" fill="#FE0000"/>
                </svg>
                Calendar
              </header>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
              </LocalizationProvider>
              <div>
                <header className="text-[#FE0000] font-bold text-[13px] text-center flex justify-between items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15.7049 7.41L14.2949 6L8.29492 12L14.2949 18L15.7049 16.59L11.1249 12L15.7049 7.41Z" fill="black"/>
                  </svg>
                  <div>MONDAY, 7th June</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9.70492 6L8.29492 7.41L12.8749 12L8.29492 16.59L9.70492 18L15.7049 12L9.70492 6Z" fill="black"/>
                  </svg>
                </header>
                <div className="flex flex-col gap-y-[10px] py-[30px]">

                  <div className="flex gap-x-[12px] items-center">
                    <div className="bg-[#CCD1E34D] text-[#2B3F8C] font-secondary font-bold flex flex-col justify-center items-center w-fit p-[12px] gap-y-[6px] rounded-[12px]">
                      <p>8:00 AM</p>
                      <p>10:00 AM</p>
                    </div>
                    <div className="font-secondary">
                      <p className="text-[15px] font-bold text-[#2B3F8C]">UX Design</p>
                      <p className="text-[14px]">Introduction To UX Design</p>
                      <p className="flex gap-x-[4px]">
                        <p className="text-[15px] font-bold text-[#2B3F8C]">Online</p>
                        <p>- Zoom</p>
                      </p>
                    </div>
                  </div>

                <div className="flex gap-x-[12px] items-center">
                  <div className="bg-[#CCD1E34D] text-[#2B3F8C] font-secondary font-bold flex flex-col justify-center items-center w-fit p-[12px] gap-y-[6px] rounded-[12px]">
                    <p>8:00 AM</p>
                    <p>10:00 AM</p>
                  </div>
                  <div className="font-secondary">
                    <p className="text-[15px] font-bold text-[#2B3F8C]">UX Design</p>
                    <p className="text-[14px]">Introduction To UX Design</p>
                    <p className="flex gap-x-[4px]">
                      <p className="text-[15px] font-bold text-[#2B3F8C]">Online</p>
                      <p>- Zoom</p>
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-[12px] items-center">
                  <div className="bg-[#CCD1E34D] text-[#2B3F8C] font-secondary font-bold flex flex-col justify-center items-center w-fit p-[12px] gap-y-[6px] rounded-[12px]">
                    <p>8:00 AM</p>
                    <p>10:00 AM</p>
                  </div>
                  <div className="font-secondary">
                    <p className="text-[15px] font-bold text-[#2B3F8C]">UX Design</p>
                    <p className="text-[14px]">Introduction To UX Design</p>
                    <p className="flex gap-x-[4px]">
                      <p className="text-[15px] font-bold text-[#2B3F8C]">Online</p>
                      <p>- Zoom</p>
                    </p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5 row-span-3 bg-white rounded-[16px] p-[16px]">
            <Tabs value={activeTab} className="w-full">
              <TabsHeader
                className="relative rounded-none bg-transparent p-0 w-full text-center mb-[40px]"
                indicatorProps={{
                  className:
                    "bg-red-500 w-[20%] h-[3px] min-h-[3px] rounded-full mt-auto mx-auto",
                }}
              >
                {data.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    onClick={() => setActiveTab(value)}
                    className={activeTab === value ? "text-[#001975] font-bold text-[14px]" : "text-[14px] text-[#272727] font-bold"}
                  >
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody>
                {data.map(({ value }) => (
                  <TabPanel key={value} value={value}>
                    <div className="grid grid-cols-2 gap-[32px] place-items-center">
                      {
                        [...Array(2)].map((item, index) => (
                          <div key={index} className="col-span-1 border-[#CCD1E3] border-[1px] rounded-2xl">
                            <img src="/src/assets/images/profile_courses_2.png" className="object-contain"/>
                            <div className="mt-[12px] p-[12px]">
                              <div>
                                <p className="font-bold text-[#2B3F8C] mb-[4px]">Product Design 102</p>
                                <div className="flex justify-between items-center mb-[16px]">
                                  <div className="flex items-center gap-[8px]">
                                    <p>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M8.00016 1.33301C4.3335 1.33301 1.3335 4.33301 1.3335 7.99967C1.3335 11.6663 4.3335 14.6663 8.00016 14.6663C11.6668 14.6663 14.6668 11.6663 14.6668 7.99967C14.6668 4.33301 11.6668 1.33301 8.00016 1.33301ZM8.00016 13.333C5.06016 13.333 2.66683 10.9397 2.66683 7.99967C2.66683 5.05967 5.06016 2.66634 8.00016 2.66634C10.9402 2.66634 13.3335 5.05967 13.3335 7.99967C13.3335 10.9397 10.9402 13.333 8.00016 13.333ZM8.3335 4.66634H7.3335V8.66634L10.8002 10.7997L11.3335 9.93301L8.3335 8.13301V4.66634Z" fill="#FE0000"/>
                                      </svg>
                                    </p>
                                    <p className="text-[#272727] text-[14px] font-medium">5 hours completed</p>
                                  </div>
                                  <p className="flex items-center gap-x-[4px]">
                                    <Rating value={4} 
                                    ratedIcon={
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M7.99967 11.847L12.1197 14.3337L11.0263 9.64699L14.6663 6.49366L9.87301 6.08699L7.99967 1.66699L6.12634 6.08699L1.33301 6.49366L4.97301 9.64699L3.87967 14.3337L7.99967 11.847Z" fill="#FFC700"/>
                                      </svg>
                                    }
                                    unratedIcon={
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M14.6663 6.49366L9.87301 6.08033L7.99967 1.66699L6.12634 6.08699L1.33301 6.49366L4.97301 9.64699L3.87967 14.3337L7.99967 11.847L12.1197 14.3337L11.033 9.64699L14.6663 6.49366ZM7.99967 10.6003V4.40033L9.13967 7.09366L12.0597 7.34699L9.84634 9.26699L10.513 12.1203L7.99967 10.6003Z" fill="#FFC700"/>
                                      </svg>
                                    }
                                    />
                                    <p className="text-[#FE0000] text-[14px] font-bold">4.5</p>
                                  </p>
                                </div>
                                <div className="text-end">
                                  <Progress value={25} size="sm" color="red" className="h-[5px] mb-[8px]"/>
                                  <p className="text-[12px] font-bold">100%</p>
                                </div>
                                
                                <div className="border-y-[#CCD1E3] border-t-[1px] pt-[8px] pb-[8px] mb-[14px] text-[#272727]">
                                  <p className="font-bold text-[14px] mb-[8px] ">Next Lesson</p>
                                  <div className="flex flex-col justify-between">
                                    <p className="flex items-center gap-x-[8px] font-bold text-[14px]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                        <path d="M12.0003 1.83301H4.00033C3.26699 1.83301 2.66699 2.43301 2.66699 3.16634V13.833C2.66699 14.5663 3.26699 15.1663 4.00033 15.1663H12.0003C12.7337 15.1663 13.3337 14.5663 13.3337 13.833V3.16634C13.3337 2.43301 12.7337 1.83301 12.0003 1.83301ZM6.00033 3.16634H7.33366V6.49967L6.66699 5.99967L6.00033 6.49967V3.16634ZM12.0003 13.833H4.00033V3.16634H4.66699V9.16634L6.66699 7.66634L8.66699 9.16634V3.16634H12.0003V13.833Z" fill="#FE0000"/>
                                      </svg>
                                      Introduction To JavaScript And Typescript
                                    </p>
                                    <p className="flex items-center gap-x-[8px] text-[14px]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                        <path d="M7.99967 1.83301C4.33301 1.83301 1.33301 4.83301 1.33301 8.49967C1.33301 12.1663 4.33301 15.1663 7.99967 15.1663C11.6663 15.1663 14.6663 12.1663 14.6663 8.49967C14.6663 4.83301 11.6663 1.83301 7.99967 1.83301ZM7.99967 13.833C5.05967 13.833 2.66634 11.4397 2.66634 8.49967C2.66634 5.55967 5.05967 3.16634 7.99967 3.16634C10.9397 3.16634 13.333 5.55967 13.333 8.49967C13.333 11.4397 10.9397 13.833 7.99967 13.833ZM8.33301 5.16634H7.33301V9.16634L10.7997 11.2997L11.333 10.433L8.33301 8.63301V5.16634Z" fill="#FE0000"/>
                                      </svg>
                                      20 Minutes
                                    </p>
                                  </div>
                                </div>
                                <div className="w-full flex gap-x-[8px]">
                                  <button className="border-[#001975] border-[1px] p-[12px] rounded-lg w-full flex justify-center">
                                    <p className="flex items-center gap-[8px] text-[15px] font-semibold text-[#001975]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16" fill="none">
                                        <path d="M12 10.747C11.4933 10.747 11.04 10.947 10.6933 11.2604L5.94 8.49368C5.97333 8.34035 6 8.18702 6 8.02702C6 7.86702 5.97333 7.71369 5.94 7.56035L10.64 4.82035C11 5.15369 11.4733 5.36035 12 5.36035C13.1067 5.36035 14 4.46702 14 3.36035C14 2.25368 13.1067 1.36035 12 1.36035C10.8933 1.36035 10 2.25368 10 3.36035C10 3.52035 10.0267 3.67368 10.06 3.82702L5.36 6.56702C5 6.23369 4.52667 6.02702 4 6.02702C2.89333 6.02702 2 6.92035 2 8.02702C2 9.13369 2.89333 10.027 4 10.027C4.52667 10.027 5 9.82035 5.36 9.48702L10.1067 12.2604C10.0733 12.4004 10.0533 12.547 10.0533 12.6937C10.0533 13.767 10.9267 14.6404 12 14.6404C13.0733 14.6404 13.9467 13.767 13.9467 12.6937C13.9467 11.6204 13.0733 10.747 12 10.747ZM12 2.69368C12.3667 2.69368 12.6667 2.99368 12.6667 3.36035C12.6667 3.72702 12.3667 4.02702 12 4.02702C11.6333 4.02702 11.3333 3.72702 11.3333 3.36035C11.3333 2.99368 11.6333 2.69368 12 2.69368ZM4 8.69369C3.63333 8.69369 3.33333 8.39369 3.33333 8.02702C3.33333 7.66035 3.63333 7.36035 4 7.36035C4.36667 7.36035 4.66667 7.66035 4.66667 8.02702C4.66667 8.39369 4.36667 8.69369 4 8.69369ZM12 13.3737C11.6333 13.3737 11.3333 13.0737 11.3333 12.707C11.3333 12.3404 11.6333 12.0404 12 12.0404C12.3667 12.0404 12.6667 12.3404 12.6667 12.707C12.6667 13.0737 12.3667 13.3737 12 13.3737Z" fill="#001975"/>
                                      </svg>
                                      Share Progress
                                    </p>
                                  </button>
                                  <button className="border-[#001975] bg-[#001975] border-[1px] p-[12px] rounded-lg w-full flex justify-center">
                                    <p className="flex items-center text-[15px] font-semibold text-white">
                                      View Course
                                    </p>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>
        </div>
      </section>
      <section className="bg-white rounded-lg p-[16px] mb-[64px]">
        <header className="flex gap-x-[8px] items-center text-[15px] font-bold text-[#2B3F8C] mb-[40px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M14.1665 2.5H5.83317C4.9165 2.5 4.1665 3.25 4.1665 4.16667V17.5L9.99984 15L15.8332 17.5V4.16667C15.8332 3.25 15.0832 2.5 14.1665 2.5ZM14.1665 15L9.99984 13.1833L5.83317 15V4.16667H14.1665V15Z" fill="#FE0000"/>
          </svg>
          Saved List
        </header>
        <div className="grid grid-cols-3 gap-[32px] place-items-center">
          {
            [...Array(9)].map((item, index) => (
              <div key={index} className="col-span-1 border-[#CCD1E3] border-[1px] rounded-2xl">
                <img src="/src/assets/images/profile_courses_2.png" className="object-contain w-full"/>
                <div className="mt-[12px] p-[12px]">
                  <div>
                    <p className="font-bold text-[#2B3F8C] mb-[4px]">Product Design 102</p>
                    <div className="flex justify-between items-center mb-[16px]">
                      <div className="flex items-center gap-[8px]">
                        <p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.00016 1.33301C4.3335 1.33301 1.3335 4.33301 1.3335 7.99967C1.3335 11.6663 4.3335 14.6663 8.00016 14.6663C11.6668 14.6663 14.6668 11.6663 14.6668 7.99967C14.6668 4.33301 11.6668 1.33301 8.00016 1.33301ZM8.00016 13.333C5.06016 13.333 2.66683 10.9397 2.66683 7.99967C2.66683 5.05967 5.06016 2.66634 8.00016 2.66634C10.9402 2.66634 13.3335 5.05967 13.3335 7.99967C13.3335 10.9397 10.9402 13.333 8.00016 13.333ZM8.3335 4.66634H7.3335V8.66634L10.8002 10.7997L11.3335 9.93301L8.3335 8.13301V4.66634Z" fill="#FE0000"/>
                          </svg>
                        </p>
                        <p className="text-[#272727] text-[14px] font-medium">5 hours completed</p>
                      </div>
                      <p className="flex items-center gap-x-[4px]">
                        <Rating value={4} 
                        ratedIcon={
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.99967 11.847L12.1197 14.3337L11.0263 9.64699L14.6663 6.49366L9.87301 6.08699L7.99967 1.66699L6.12634 6.08699L1.33301 6.49366L4.97301 9.64699L3.87967 14.3337L7.99967 11.847Z" fill="#FFC700"/>
                          </svg>
                        }
                        unratedIcon={
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M14.6663 6.49366L9.87301 6.08033L7.99967 1.66699L6.12634 6.08699L1.33301 6.49366L4.97301 9.64699L3.87967 14.3337L7.99967 11.847L12.1197 14.3337L11.033 9.64699L14.6663 6.49366ZM7.99967 10.6003V4.40033L9.13967 7.09366L12.0597 7.34699L9.84634 9.26699L10.513 12.1203L7.99967 10.6003Z" fill="#FFC700"/>
                          </svg>
                        }
                        />
                        <p className="text-[#FE0000] text-[14px] font-bold">4.5</p>
                      </p>
                    </div>
                    <div className="text-end">
                      <Progress value={25} size="sm" color="red" className="h-[5px] mb-[8px]"/>
                      <p className="text-[12px] font-bold">100%</p>
                    </div>
                    
                    <div className="border-y-[#CCD1E3] border-t-[1px] pt-[8px] pb-[8px] mb-[14px] text-[#272727]">
                      <p className="font-bold text-[14px] mb-[8px] ">Next Lesson</p>
                      <div className="flex flex-col justify-between">
                        <p className="flex items-center gap-x-[8px] font-bold text-[14px]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <path d="M12.0003 1.83301H4.00033C3.26699 1.83301 2.66699 2.43301 2.66699 3.16634V13.833C2.66699 14.5663 3.26699 15.1663 4.00033 15.1663H12.0003C12.7337 15.1663 13.3337 14.5663 13.3337 13.833V3.16634C13.3337 2.43301 12.7337 1.83301 12.0003 1.83301ZM6.00033 3.16634H7.33366V6.49967L6.66699 5.99967L6.00033 6.49967V3.16634ZM12.0003 13.833H4.00033V3.16634H4.66699V9.16634L6.66699 7.66634L8.66699 9.16634V3.16634H12.0003V13.833Z" fill="#FE0000"/>
                          </svg>
                          Introduction To JavaScript And Typescript
                        </p>
                        <p className="flex items-center gap-x-[8px] text-[14px]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <path d="M7.99967 1.83301C4.33301 1.83301 1.33301 4.83301 1.33301 8.49967C1.33301 12.1663 4.33301 15.1663 7.99967 15.1663C11.6663 15.1663 14.6663 12.1663 14.6663 8.49967C14.6663 4.83301 11.6663 1.83301 7.99967 1.83301ZM7.99967 13.833C5.05967 13.833 2.66634 11.4397 2.66634 8.49967C2.66634 5.55967 5.05967 3.16634 7.99967 3.16634C10.9397 3.16634 13.333 5.55967 13.333 8.49967C13.333 11.4397 10.9397 13.833 7.99967 13.833ZM8.33301 5.16634H7.33301V9.16634L10.7997 11.2997L11.333 10.433L8.33301 8.63301V5.16634Z" fill="#FE0000"/>
                          </svg>
                          20 Minutes
                        </p>
                      </div>
                    </div>
                    <div className="w-full flex gap-x-[8px]">
                      <button className="border-[#001975] bg-[#001975] border-[1px] p-[12px] rounded-lg w-full flex justify-center">
                        <p className="flex items-center gap-[8px] text-[15px] font-semibold text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M11.3335 2H4.66683C3.9335 2 3.3335 2.6 3.3335 3.33333V14L8.00016 12L12.6668 14V3.33333C12.6668 2.6 12.0668 2 11.3335 2ZM11.3335 12L8.00016 10.5467L4.66683 12V3.33333H11.3335V12Z" fill="white"/>
                          </svg>
                          Add To List
                        </p>
                      </button>
                      <button className="border-[#001975] bg-[#001975] border-[1px] p-[12px] rounded-lg w-full flex justify-center">
                        <p className="flex items-center text-[15px] font-semibold text-white">
                          View Course
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </section>
      <section className="">
        <header className="mb-[32px]">
          <p className="text-[24px] font-bold text-[#000D3B]">Recommended Courses</p>
        </header>

        <div className="grid grid-cols-3 gap-[32px] place-items-center">
          {
            [...Array(3)].map((item, index) => (
              <div key={index} className="col-span-1 border-[#CCD1E3] border-[1px] rounded-2xl">
                <img src="/src/assets/images/profile_courses_2.png" className="object-contain w-full"/>
                <div className="mt-[12px] p-[12px]">
                  <div>
                    <p className="font-bold text-[#2B3F8C] mb-[4px]">Product Design 102</p>
                    <div className="flex justify-between items-center mb-[16px]">
                      <div className="flex items-center gap-[8px]">
                        <p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.00016 1.33301C4.3335 1.33301 1.3335 4.33301 1.3335 7.99967C1.3335 11.6663 4.3335 14.6663 8.00016 14.6663C11.6668 14.6663 14.6668 11.6663 14.6668 7.99967C14.6668 4.33301 11.6668 1.33301 8.00016 1.33301ZM8.00016 13.333C5.06016 13.333 2.66683 10.9397 2.66683 7.99967C2.66683 5.05967 5.06016 2.66634 8.00016 2.66634C10.9402 2.66634 13.3335 5.05967 13.3335 7.99967C13.3335 10.9397 10.9402 13.333 8.00016 13.333ZM8.3335 4.66634H7.3335V8.66634L10.8002 10.7997L11.3335 9.93301L8.3335 8.13301V4.66634Z" fill="#FE0000"/>
                          </svg>
                        </p>
                        <p className="text-[#272727] text-[14px] font-medium">5 hours completed</p>
                      </div>
                      <p className="flex items-center gap-x-[4px]">
                        <Rating value={4} 
                        ratedIcon={
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.99967 11.847L12.1197 14.3337L11.0263 9.64699L14.6663 6.49366L9.87301 6.08699L7.99967 1.66699L6.12634 6.08699L1.33301 6.49366L4.97301 9.64699L3.87967 14.3337L7.99967 11.847Z" fill="#FFC700"/>
                          </svg>
                        }
                        unratedIcon={
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M14.6663 6.49366L9.87301 6.08033L7.99967 1.66699L6.12634 6.08699L1.33301 6.49366L4.97301 9.64699L3.87967 14.3337L7.99967 11.847L12.1197 14.3337L11.033 9.64699L14.6663 6.49366ZM7.99967 10.6003V4.40033L9.13967 7.09366L12.0597 7.34699L9.84634 9.26699L10.513 12.1203L7.99967 10.6003Z" fill="#FFC700"/>
                          </svg>
                        }
                        />
                        <p className="text-[#FE0000] text-[14px] font-bold">4.5</p>
                      </p>
                    </div>
                    <div className="text-end">
                      <Progress value={25} size="sm" color="red" className="h-[5px] mb-[8px]"/>
                      <p className="text-[12px] font-bold">100%</p>
                    </div>
                    
                    <div className="border-y-[#CCD1E3] border-t-[1px] pt-[8px] pb-[8px] mb-[14px] text-[#272727]">
                      <p className="font-bold text-[14px] mb-[8px] ">Next Lesson</p>
                      <div className="flex flex-col justify-between">
                        <p className="flex items-center gap-x-[8px] font-bold text-[14px]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <path d="M12.0003 1.83301H4.00033C3.26699 1.83301 2.66699 2.43301 2.66699 3.16634V13.833C2.66699 14.5663 3.26699 15.1663 4.00033 15.1663H12.0003C12.7337 15.1663 13.3337 14.5663 13.3337 13.833V3.16634C13.3337 2.43301 12.7337 1.83301 12.0003 1.83301ZM6.00033 3.16634H7.33366V6.49967L6.66699 5.99967L6.00033 6.49967V3.16634ZM12.0003 13.833H4.00033V3.16634H4.66699V9.16634L6.66699 7.66634L8.66699 9.16634V3.16634H12.0003V13.833Z" fill="#FE0000"/>
                          </svg>
                          Introduction To JavaScript And Typescript
                        </p>
                        <p className="flex items-center gap-x-[8px] text-[14px]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <path d="M7.99967 1.83301C4.33301 1.83301 1.33301 4.83301 1.33301 8.49967C1.33301 12.1663 4.33301 15.1663 7.99967 15.1663C11.6663 15.1663 14.6663 12.1663 14.6663 8.49967C14.6663 4.83301 11.6663 1.83301 7.99967 1.83301ZM7.99967 13.833C5.05967 13.833 2.66634 11.4397 2.66634 8.49967C2.66634 5.55967 5.05967 3.16634 7.99967 3.16634C10.9397 3.16634 13.333 5.55967 13.333 8.49967C13.333 11.4397 10.9397 13.833 7.99967 13.833ZM8.33301 5.16634H7.33301V9.16634L10.7997 11.2997L11.333 10.433L8.33301 8.63301V5.16634Z" fill="#FE0000"/>
                          </svg>
                          20 Minutes
                        </p>
                      </div>
                    </div>
                    <div className="w-full flex gap-x-[8px]">
                      <button className="border-[#001975] bg-[#001975] border-[1px] p-[12px] rounded-lg w-full flex justify-center">
                        <p className="flex items-center gap-[8px] text-[15px] font-semibold text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M11.3335 2H4.66683C3.9335 2 3.3335 2.6 3.3335 3.33333V14L8.00016 12L12.6668 14V3.33333C12.6668 2.6 12.0668 2 11.3335 2ZM11.3335 12L8.00016 10.5467L4.66683 12V3.33333H11.3335V12Z" fill="white"/>
                          </svg>
                          Add To List
                        </p>
                      </button>
                      <button className="border-[#001975] bg-[#001975] border-[1px] p-[12px] rounded-lg w-full flex justify-center">
                        <p className="flex items-center text-[15px] font-semibold text-white">
                          View Course
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </section>
  )
}
