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
        <div className="absolute top-[18%] right-0 z-[-40] hidden md:block" data-aos="fade-left" data-aos-delay="50">
          <img src="src/assets/images/whychooseus_image.png" className="w-[1135px]"/>
        </div>
        <div className="absolute top-[18%] right-0 z-[-50]">
          <div className="max-[768px]:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="1195" height="644" viewBox="0 0 1195 644" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M1071.9 0.110376C1455.84 2.05631 1882.82 39.3336 2002 176.231C2121.53 313.535 1838.5 439.588 1529.56 525.826C1205.28 616.347 793.347 690.977 454.822 608.118C71.5667 514.311 -101.733 326.808 61.0732 166.394C205.78 23.8141 665.165 -1.95109 1071.9 0.110376Z" fill="url(#paint0_linear_2014_28425)"/>
              <defs>
                <linearGradient id="paint0_linear_2014_28425" x1="0" y1="322" x2="2030" y2="322" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F8F8FF"/>
                  <stop offset="1" stopColor="#CDD2E3"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="hidden max-[768px]:block max-[375px]:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="683" height="645" viewBox="0 0 683 645" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M1071.9 0.443872C1455.84 2.3898 1882.82 39.6671 2002 176.565C2121.53 313.869 1838.5 439.922 1529.56 526.16C1205.28 616.68 793.347 691.31 454.822 608.451C71.5667 514.644 -101.733 327.141 61.0732 166.728C205.78 24.1476 665.165 -1.61759 1071.9 0.443872Z" fill="url(#paint0_linear_2014_26648)"/>
              <defs>
                <linearGradient id="paint0_linear_2014_26648" x1="0" y1="322.333" x2="2030" y2="322.333" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F8F8FF"/>
                  <stop offset="1" stopColor="#CDD2E3"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="hidden max-[375px]:block">
            <svg xmlns="http://www.w3.org/2000/svg" width="324" height="612" viewBox="0 0 324 612" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M586.112 0.457412C796.049 2.64205 1029.52 44.4922 1094.69 198.183C1160.05 352.331 1005.29 493.847 836.361 590.663C659.047 692.288 433.801 776.073 248.696 683.05C39.1325 577.735 -55.6276 367.231 33.3947 187.139C112.52 27.0689 363.711 -1.85693 586.112 0.457412Z" fill="url(#paint0_linear_2014_27576)"/>
              <defs>
                <linearGradient id="paint0_linear_2014_27576" x1="0" y1="361.833" x2="1110" y2="361.833" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F8F8FF"/>
                  <stop offset="1" stopColor="#CDD2E3"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
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