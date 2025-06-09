import FloatingOval from "../common/FloatingOval"
export default function WeOffer() {
    return (
        <div className="py-10 pb-20 relative md:mt-20 mt-16">
            <div className="md:pb-24 md:block hidden">
                <svg viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto absolute top-0 left-0">
                    <path d="M0,150 C720,0 720,0 1440,150" fill="none" stroke="#ffffff29" strokeWidth="1" />
                </svg>
            </div>

            <h2 className="font-semibold text-2xl md:hidden block text-center pb-5">We Build 🔨</h2>

            <div className="max-w-[660px] md:mx-auto md:rounded-80px rounded-48px border border-lightGray bg-black md:min-h-[500px] md:p-8 p-3 mx-4">
                {/* <CodeImage/> */}


                <div className="w-full md:min-h-96 rounded-[36px] bg-red md:px-6 px-3 relative">
                    <div className="md:block hidden">
                        <FloatingOval />
                    </div>

                    <div className="py-10 md:text-6xl text-xl text-right text-black font-semibold flex flex-col gap-7">
                        <h3>Business websites</h3>
                        <h3>Portfolio sites</h3>
                        <h3>Landing pages</h3>
                        <h3>Web apps</h3>
                        <h3>Custom dashboards</h3>
                        <h3>Admin panels</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}