export default function CTA() {
  return (
    <section className="p-[48px_128px]">
      <div className="flex flex-col sm:flex-row gap-[40px] justify-between items-center">
        <div className="space-y-[32px]">
            <div className="text-[40px] leading-[48px]">Take that step <br/> with TechProsNG!</div>
            <button className="rounded-[20px] bg-[#FE0000] outline-none text-white p-[18px_24px]  flex justify-center items-center">
              <p className="w-[129px]">See Courses</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                <path d="M10.6727 7.65869H2.66602V8.99202H10.6727V10.992L13.3327 8.32536L10.6727 5.65869V7.65869Z" fill="white"/>
              </svg>
            </button>
        </div>
        <div>
          <img src="src/assets/images/cta_image.png" />
        </div>
      </div>
    </section>
  )
}