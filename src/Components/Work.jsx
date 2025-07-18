import WorkHeader from "./WorkComponents/WorkHeader";
import WorkImages_2 from "./WorkComponents/WorkImages_2";
import WorkInfo from "./WorkComponents/WorkInfo";
import WorkImages_3 from "./WorkComponents/WorkImages_3";

export default function Work() {
    return (
        <div className="container mx-auto px-4">
            <WorkHeader />
            <WorkImages_3 />
            <WorkInfo />
        </div>
    );
}