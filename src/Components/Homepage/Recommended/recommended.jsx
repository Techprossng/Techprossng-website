import "./Styles/recommended.css";
import clock from "../../../assets/clock.png";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import avatar from "../../../assets/avatar.png";
import { BsBookmark } from "react-icons/bs";

export const courses = [
  {
    img: img1,
    career: "FullStack Development",
    content:
      "Learn the basics of coding and programming languages like HTML, CSS, and JavaScript in this beginner-friendly course.",
    starRating: 5.0,
    starPublish: "(3) ",
    starIcon: "../../src/assets/icons/star.png",
    clock: clock,
    duration: "45 hours",
    avi: avatar,
    username: "Jane",
    addToList: "Add to list",
    viewCourse: "View Course",
  },
  {
    img: img2,
    career: "Digital Marketing & SEO",
    content:
      "Learn the basics of coding and programming languages like HTML, CSS, and JavaScript in this beginner-friendly course.",
    starRating: 5.0,
    starPublish: "(3) ",
    starIcon: "../../src/assets/icons/star.png",
    clock: clock,
    duration: "45 hours",
    avi: avatar,
    username: "Jane",
    addToList: "Add to list",
    viewCourse: "View Course",
  },
  {
    img: img3,
    career: "Product Management",
    content:
      "Learn the basics of coding and programming languages like HTML, CSS, and JavaScript in this beginner-friendly course.",
    starRating: 5.0,
    starPublish: "(3) ",
    starIcon: "../../src/assets/icons/star.png",
    clock: clock,
    duration: "45 hours",
    avi: avatar,
    username: "Jane",
    addToList: "Add to list",
    viewCourse: "View Course",
  },
  // {
  //   img: img2,
  //   career: "Content Creation",
  //   content:
  //     "Learn the basics of coding and programming languages like HTML, CSS, and JavaScript in this beginner-friendly course.",
  //   starRating: 5.0,
  //   starPublish: "(3) ",
  //   starIcon: "../../src/assets/icons/star.png",
  //   clock: clock,
  //   duration: "45 hours",
  //   avi: avatar,
  //   username: "Jane",
  //   addToList: "Add to list",
  //   viewCourse: "View Course",
  // },
  // {
  //   img: img3,
  //   career: "Graphic Design",
  //   content:
  //     "Learn the basics of coding and programming languages like HTML, CSS, and JavaScript in this beginner-friendly course.",
  //   starRating: 5.0,
  //   starPublish: "(3) ",
  //   starIcon: "../../src/assets/icons/star.png",
  //   clock: clock,
  //   duration: "45 hours",
  //   avi: avatar,
  //   username: "Jane",
  //   addToList: "Add to list",
  //   viewCourse: "View Course",
  // },
];

const Recommended = () => {
  // const [showFullList, setShowFullList] = useState(false);
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 980);

  // const toggleFullList = () => {
  //   setShowFullList(!showFullList);
  // };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 980);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <div className="container mx-auto mt-10 mb-11 main-con">
      <div className="head-box">
        <h2 className="headerText text-2xl font-bold">Recommended For you</h2>
      </div>
      <div className="mt-8 w-full flex flex-wrap justify-between gap-10 ">
        {courses.map((item, index) => (
          <div
            key={index}
            className="h-fit w-[30%] rounded-lg p-2 border border-opacity-20 each-card"
          >
            <div>
              <img src={item.img} alt="image" className="w-full" />
            </div>
            <div className="mt-8 w-full flex flex-col gap-4">
              <p className="text-[#2B3F8C] font-bold text-base">
                {item.career}
              </p>
              <p className=" text-[#656565] font-medium text-xs">
                {item.content}
              </p>
              <div>
                <div className="flex gap-1 justify-between">
                  <div className="flex gap-1 justify-center items-center">
                    <div className="flex gap-1">
                      <img
                        src={item.starIcon}
                        alt="star-icon"
                        className="w-4 h-4"
                      />
                      <img
                        src={item.starIcon}
                        alt="star-icon"
                        className="w-4 h-4"
                      />
                      <img
                        src={item.starIcon}
                        alt="star-icon"
                        className="w-4 h-4"
                      />
                      <img
                        src={item.starIcon}
                        alt="star-icon"
                        className="w-4 h-4"
                      />
                      <img
                        src={item.starIcon}
                        alt="star-icon"
                        className="w-4 h-4"
                      />
                    </div>
                    <div
                      style={{ color: "#fe0000" }}
                      className="text-[11px] font-bold"
                    >
                      {item.starRating}
                    </div>
                    <div
                      style={{ color: "#272727" }}
                      className="text-[11px] font-bold"
                    >
                      {item.starPublish}
                    </div>
                  </div>
                  <div className="flex gap-1 justify-center items-center">
                    <img src={item.clock} alt="clock" className="w-3 h-3" />
                    <div
                      style={{ color: "#272727" }}
                      className="text-[11px] font-bold"
                    >
                      {item.duration}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <hr />
                <div className="flex gap-1 justify-between items-center pt-2 ">
                  <div className="flex gap-1">
                    <img src={avatar} alt="avatar" className="w-4 h-4" />
                    <p className="text-xs font-bold text-[#2B3F8C]">
                      {item.username}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <div className="flex gap-1">
                      <img
                        src={item.starIcon}
                        alt="star-icon"
                        className="w-4 h-4"
                      />
                      <img
                        src={item.starIcon}
                        alt="star-icon"
                        className="w-4 h-4"
                      />
                      <img
                        src={item.starIcon}
                        alt="star-icon"
                        className="w-4 h-4"
                      />
                      <img
                        src={item.starIcon}
                        alt="star-icon"
                        className="w-4 h-4"
                      />
                      <img
                        src={item.starIcon}
                        alt="star-icon"
                        className="w-4 h-4"
                      />
                    </div>
                    <div
                      style={{ color: "#fe0000" }}
                      className="text-[11px] font-bold"
                    >
                      {item.starRating}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-2">
                <button
                  style={{ border: "1px solid #0F1B63" }}
                  className="text-xs text-[#0F1B63] font-medium rounded-lg p-3 w-[40%] flex gap-3 justify-center items-center"
                >
                  <BsBookmark />
                  {item.addToList}
                </button>
                <button
                  style={{ border: "1px solid #0F1B63" }}
                  className="text-xs rounded-lg bg-[#0F1B63] font-medium text-white p-3 w-40"
                >
                  {item.viewCourse}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
