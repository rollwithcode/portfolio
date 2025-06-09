import BannerButton from "../common/BannerButton";
import HeroImage from "../common/HeroImage";
import FlipIntro from "../common/HeroHeadings";

export default function HeroSection() {
    return (
        <div className="px-5">
            <HeroImage/>
            <div className="flex items-center flex-col justify-center min-h-[350px] md:min-h-[550px] max-h-[550px] max-w-[800px] m-auto text-center gap-8">
                <FlipIntro/>
            </div>
            <div className="flex items-center justify-center">
                <BannerButton />
            </div>
        </div>
    )
}