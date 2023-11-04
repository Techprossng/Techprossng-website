import Library from "../../Components/Homepage/Resource Library/library";
import Navbar from "../../Components/Homepage/Navbar/navbar";
import Mentor from "../../Components/Homepage/Mentor/mentor";
import Progress from "../../Components/Homepage/InProgress/progress";


const Homepage = () => {
    return (
        <>
        <Navbar/>
        <Mentor/>
        <Progress/>
         <Library />
        </>
    );
    }

export default Homepage;
