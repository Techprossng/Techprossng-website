export default function WhyChooseUs() {
  const list = [
    { 
      title: "Proper Tech Learning-drill",
      description: "We focus on real-world applications, so you can confidently apply your skills in any tech-related field."
    },
    { 
      title: "Flexibility",
      description: "Learn at your own pace with our online and offline classes. Fit tech education into your busy life."
    },
    { 
      title: "Industry-Driven Curriculum",
      description: "Our courses are designed in collaboration with industry experts to ensure you're learning what matters most."
    },
    { 
      title: "Supportive Community",
      description: "Join a network of fellow learners, mentors, and alumni who are passionate about tech."
    },
    { 
      title: "Career Opportunities",
      description: "TechProsNg graduates are followed up and given internship opportunities to land their first jobs."
    },
  ]
  return (
    <section className="p-[96px_66px] relative max-[480px]:px-[1.5rem] max-[768px]:px-[1.5rem]">
      {/* header */}
      <div className="flex justify-center">
        <header className="text-[32px] leading-[38.4px] relative w-fit font-bold">
          WHY CHOOSE US?
          <p className="absolute bottom-[-12px] left-0 w-[83px] h-[6px] bg-[#2B3F8C] rounded-[12px]"></p>
        </header>
      </div>

      {/* contents */}
      <div>
        <div className="absolute top-[14%] right-[8%] z-[-50] md:left-[5%] max-[480px]:hidden">
          <img src="src/assets/icons/whychooseus_dots.svg" className="w-[185px]"/>
        </div>
        <div className="absolute top-[18%] right-0 z-[-50] hidden md:block" data-aos="fade-left" data-aos-delay="50">
          <img src="src/assets/images/whychooseus_image.png" className="w-[1135px]"/>
        </div>
        <ul className="p-[84px_68px] space-y-[32px] max-[480px]:px-0 max-[768px]:px-[2rem]">
          {
            list.map((item, index) => (
              <li key={index} className="flex gap-x-[24px] items-start" data-aos="fade-up-right">
                <img src="src/assets/icons/whychooseus_frame.svg" alt="" width={64} height={64} />
                <div className="max-w-[392px] space-y-[6px]">
                  <p className="font-semibold text-[24px] break-words">{item.title}</p>
                  <p className="font-secondary text-[#656565]">{item.description}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}