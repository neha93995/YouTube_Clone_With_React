import ShortsCard from "../Components/ShortsCard";
import HomeLayout from "../Layouts/HomeLayout";

function Shorts()
{
    return (
        <HomeLayout>
                <div className="flex flex-col items-center  overflow-y-scroll  h-[92vh]">
                    <ShortsCard/>
                    <ShortsCard/>
                    <ShortsCard/>
                    <ShortsCard/>
                    <ShortsCard/>
                </div>
        </HomeLayout>
    )
}


export default Shorts;