import foc from "../../../assets/images/homepage_foc.png";
import foc2 from "../../../assets/images/homepage_foc_image.png";


export default function FromOurCommunity() {
  const focArray = [1,2,3,4]
  return (
    <section className="p-[48px_64px] max-[375px]:px-[1.5rem] max-[768px]:px-[1.5rem] bg-[#CCD1E3]">
      <header className="flex justify-between mb-[40px]">
        <p className="text-[24px] font-bold text-[#00114E]">From Our Community</p>
        <p className="flex items-center gap-x-[8px] max-[480px]:hidden">
          <span><a href="/coming-soon" className="underline text-[15px] font-bold font-secondary text-[#FE0000]">Visit Community</a></span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z" fill="#FE0000"/>
            </svg>
          </span>
        </p>
      </header>
      <section className="max-[1080px]:flex max-[1080px]:overflow-hidden max-[1080px]:overflow-x-scroll no-scrollbar max-[1080px]:w-fit max-w-[100%]" >
        <div className="grid grid-cols-2 place-items-center gap-[32px] max-[1080px]:flex max-[1080px]:flex-nowrap max-[1080px]:flex-shrink-0">
          { focArray.map((index) => (
          <div key={index} className="bg-[#2B3F8C] rounded-[16px] min-h-[180px] min-[480px]:max-w-[559px] max-w-[300px] flex max-[480px]:flex-col items-start gap-[16px]">
            <img src={foc} className="max-[480px]:w-screen w-[150px] max-h-[198px] md:m-[16px] rounded-t-[16px] md:rounded-[0px] m-[10px] max-[480px]:m-0  object-cover" />
            <div className="font-secondary text-white space-y-[16px] w-full p-[16px] max-[480px]:pt-[2px]">
              <p className="font-bold">Article Title</p>
              <p className="text-[12px] overflow-ellipsis overflow-hidden w-[100%] h-[53px] text-[#E9E9E9]">
              This area contains the description of the article. This area contains the description of the article. This area contains the description of the article.This area contains the description of the article.
              </p>
              <div className="flex justify-between items-end max-[1280px]:flex-col max-[1280px]:items-start gap-y-[16px] max-[1080px]:flex-row max-[1080px]:items-end">
                <div className="flex gap-x-[8px] items-center">
                  <img src={foc2} width={32} height={32}/>
                  <div className="space-y-[4px] ">
                    <p className="text-[12px] font-bold">Daniel Mbwangu</p>
                    <p className="text-[11px] font-medium">3 mins read</p>
                  </div>
                </div>
                <p className="text-[11px] font-medium">
                  Aug 20, 2023
                </p>
              </div>
            </div>
          </div>
          ))}
        </div>
      </section>
      <div className="pt-[40px] flex justify-end">
        <p className="hidden items-center gap-x-[8px] max-[480px]:flex">
            <span><a href="/coming-soon" className="underline text-[15px] font-bold font-secondary text-[#FE0000]">Visit Community</a></span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z" fill="#FE0000"/>
              </svg>
            </span>
          </p>
      </div>
    </section>
  )
}