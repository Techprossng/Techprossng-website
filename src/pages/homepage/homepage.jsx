
import Sample from "../../Components/Homepage/Sample/sample";
import Navbar from "../../Components/Homepage/Navbar/navbar";
import Mentor from "../../Components/Homepage/Mentor/mentor";
import Library from "../../Components/Homepage/Resource Library/Library";


const Homepage = () => {
    return (
        <>
        <Navbar/>
        <Mentor/>
        <Library/>
        <Sample />
        </>
    );
    }

export default Homepage;