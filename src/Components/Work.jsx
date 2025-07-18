import WorkHeader from "./WorkComponents/WorkHeader";
import WorkImages_2 from "./WorkComponents/WorkImages_2";
import WorkInfo from "./WorkComponents/WorkInfo";
import WorkImages_3 from "./WorkComponents/WorkImages_3";
import WorkImages_1 from "./WorkComponents/WorkImages_1";

export default function Work() {
    return (
        <>
            <div className="container mx-auto px-4">
                <WorkHeader />
                <WorkImages_2 />
                <WorkInfo />
            </div>
            <hr className="border-t border-gray-100 lg:my-22 md:my-22 my-11 w-full opacity-5" />
            <div className="container mx-auto px-4">
                <WorkHeader />
                <WorkImages_3 />
                <WorkInfo />
            </div>
            <hr className="border-t border-gray-100 lg:my-22 md:my-22 my-11 w-full opacity-5" />
            <div className="container mx-auto px-4">
                <WorkHeader />
                <WorkImages_1 />
                <WorkInfo />
            </div>
        </>
    );
}