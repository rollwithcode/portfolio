import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

export default function Homepage() {
    return (
        <div className="">
            <div className="md:px-14 px-4 mx-auto">
                <Navbar/>
                <HeroSection />
            </div>

        </div>
    )
}