import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Pricing from "./Pricing";
import Steps from "./Steps";

export default function Homepage() {
    return (
        <div className="">
            <div className="md:px-14 px-4 mx-auto">
                <Navbar />
                <HeroSection />
                <Steps />
                <Pricing />
            </div>
        </div>
    )
}
