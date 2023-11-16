import Navbar from "../../Components/Landingpage/Navbar/navbar";
import Footer from "../../Components/Landingpage/Footer/footer";
import AllCoursesCard from "../../Components/Coursecatalog/AllCoursesCard";
import Consideration from "../../Components/Coursecatalog/Consideration";
import CourseForYouCard from "../../Components/Coursecatalog/CourseForYouCard";
import TopCoursesCard from "../../Components/Coursecatalog/TopCoursesCard";
import TopicSkills from "../../Components/Coursecatalog/TopicSkills";


const Catalog = () => {
    return (
      <>
      <Navbar />
      <TopicSkills />
      <CourseForYouCard />
      <TopCoursesCard />
      <AllCoursesCard />
      <Consideration />
      <Footer />
      </>
    )
  }
  
  export default Catalog;