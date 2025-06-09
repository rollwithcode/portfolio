import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Pricing from "./Pricing";
import Steps from "./Steps";
import Footer from "./Footer";
import SelectedWork from "./SelectedWork";
import Carousel from "./Carousel";
import WeOffer from "./WeOffer";

export default function Homepage() {
    return (
        <div className="">
            <div className="md:px-14 py-2 px-4 mx-auto">
                <Navbar />
                <HeroSection />
            </div>
            <WeOffer />
            <Carousel />
            <div className="md:px-14 py-2 px-4 mx-auto">
                <SelectedWork />
                <Steps />
                <Pricing />
                <Footer />
            </div>


        </div>
    )
}
