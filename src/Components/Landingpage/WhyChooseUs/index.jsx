export default function WhyChooseUs() {
  const list = [
    { 
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet consectetur. Adipiscing enim amet id elit non ac aenean. Venenatis ultricies velit morbi quam tincidunt congue."
    },
    { 
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet consectetur. Adipiscing enim amet id elit non ac aenean. Venenatis ultricies velit morbi quam tincidunt congue."
    },
    { 
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet consectetur. Adipiscing enim amet id elit non ac aenean. Venenatis ultricies velit morbi quam tincidunt congue."
    },
    { 
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet consectetur. Adipiscing enim amet id elit non ac aenean. Venenatis ultricies velit morbi quam tincidunt congue."
    },
  ]
  return (
    <section className="p-[96px_66px] relative">
      {/* header */}
      <div className="flex justify-center">
        <header className="text-[32px] leading-[38.4px] relative w-fit font-bold">
          WHY CHOOSE US?
          <p className="absolute bottom-[-12px] left-0 w-[83px] h-[6px] bg-[#2B3F8C] rounded-[12px]"></p>
        </header>
      </div>

      {/* contents */}
      <div>
        <div className="absolute top-[14%] left-[5%] z-[-50]">
          <img src="src/assets/icons/whychooseus_dots.svg" className="w-[185px]"/>
        </div>
        <div className="absolute top-[18%] right-0 z-[-50]" data-aos="fade-left" data-aos-delay="50">
          <img src="src/assets/images/whychooseus_image.png" className="w-[1135px]"/>
        </div>
        <ul className="p-[84px_68px] space-y-[32px]">
          {
            list.map((item, index) => (
              <li key={index} className="flex gap-x-[24px] items-start" data-aos="fade-up-right">
                <img src="src/assets/icons/whychooseus_frame.svg" alt="" width={64} height={64} />
                <div className="max-w-[392px] space-y-[6px]">
                  <p className="font-semibold text-[24px]">{item.title}</p>
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