import cta from "../../../assets/images/cta_image.png";

export default function CTA() {
  return (
    <section className="p-[48px_128px] max-[375px]:px-[1.5rem] max-[768px]:px-[2rem]">
      <div className="flex flex-col sm:flex-row gap-[40px] justify-between sm:items-center">
        <div className="space-y-[32px]" data-aos="fade">
            <div className="text-[32px] md:text-[42px] leading-[48px] font-semibold">Take that step <br className="hidden sm:block"/> with TechProsNG!</div>
            <button className="rounded-[20px] bg-[#FE0000] outline-none text-white p-[18px_24px] justify-center items-center hidden sm:flex">
              <p className="w-[129px]">See Courses</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                <path d="M10.6727 7.65869H2.66602V8.99202H10.6727V10.992L13.3327 8.32536L10.6727 5.65869V7.65869Z" fill="white"/>
              </svg>
            </button>
        </div>
        <div data-aos="zoom-in" className="text-center">
          <img src={cta} className="sm:w-fit w-full"/>
        </div>
        <div className="block sm:hidden">
          <button className="rounded-[20px] bg-[#FE0000] outline-none text-white p-[18px_24px]  flex justify-center items-center w-full sm:w-fit">
            <p className="w-[129px]">See Courses</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path d="M10.6727 7.65869H2.66602V8.99202H10.6727V10.992L13.3327 8.32536L10.6727 5.65869V7.65869Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>
      
    </section>
  )
}