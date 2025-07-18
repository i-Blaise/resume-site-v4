import Video from "../assets/video/vid.mp4"

export default function VideoCard() {
    return (
        <div id="work" className="">
            <div className="flex flex-col items-center justify-center">
                <p className="text-[52px]">🌍</p>
                <h1 className="font-Inter-Medium text-[121px] text-transparent bg-clip-text bg-[linear-gradient(158.21deg,#A78295_26%,#EFE1D1_60%)] uppercase">Works</h1>
            </div>
            {/* <div>
                <video src={Video}></video>
            </div> */}
        </div>
    );
}