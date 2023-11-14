import Library from "../../Components/Homepage/Resource Library/library";
import Navbar from "../../Components/Homepage/Navbar/navbar";
import Mentor from "../../Components/Homepage/Mentor/mentor";
import Progress from "../../Components/Homepage/InProgress/progress";
import FromOurCommunity from "../../Components/Homepage/FromOurCommunity";
import Footer from "../../Components/Landingpage/Footer/footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Progress />
      <Library />
      <FromOurCommunity />
      <Mentor />
      <Footer />
    </>
  );
};

export default Homepage;
