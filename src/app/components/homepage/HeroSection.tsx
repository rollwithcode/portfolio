import BannerButton from "../common/BannerButton";

export default function HeroSection() {
    return (
        <div className="">
            <div className="flex items-center flex-col justify-center min-h-screen max-w-[80%] m-auto text-center gap-8">
                <h1 className="text-white font-medium text-8xl">Premium Design via_<span className="text-red">simple monthly subscription</span></h1>
                <p className="text-xl text-textGray">✦ PAUSE OR CANCEL ANYTIME ✦</p>
                <div className="pt-16">
                    <BannerButton />
                </div>

            </div>

        </div>
    )
}