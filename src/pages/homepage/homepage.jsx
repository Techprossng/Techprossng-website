import Library from "../../Components/Homepage/Resource Library/Library";
import Navbar from "../../Components/Homepage/Navbar/navbar";
import Mentor from "../../Components/Homepage/Mentor/mentor";


const Homepage = () => {
    return (
        <>
        <Navbar/>
        <Progress/>
        <Mentor/>
        <Sample />
        <Library />
        </>
    );
    }

export default Homepage;
