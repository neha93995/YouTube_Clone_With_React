import Card from "../Components/Card";
import HomeLayout from "../Layouts/HomeLayout";

function Home() {
    return (
        <HomeLayout>
            <div className=' px-5 relative '>

                <div className=' sticky top-12 z-40 py-3 bg-[#0f0f0f] font-bold'>
                    <div className=" flex gap-2 text-sm flex-wrap">
                      
                      
                        <div className="bg-[#262626] hover:bg-[#4a4b4b] py-1 px-2 rounded-md">All</div>
                        <div className="bg-[#262626] hover:bg-[#4a4b4b] py-1 px-2 rounded-md">Gaming</div>
                        <div className="bg-[#262626] hover:bg-[#4a4b4b] py-1 px-2 rounded-md">Mixes</div>
                        {/* <div className="bg-[#262626] hover:bg-[#4a4b4b] py-1 px-2 rounded-md">computer programming</div>
                        <div className="bg-[#262626] hover:bg-[#4a4b4b] py-1 px-2 rounded-md">Music</div>
                        <div className="bg-[#262626] hover:bg-[#4a4b4b] py-1 px-2 rounded-md">Movies</div>
                        <div className="bg-[#262626] hover:bg-[#4a4b4b] py-1 px-2 rounded-md">Live</div>
                        <div className="bg-[#262626] hover:bg-[#4a4b4b] py-1 px-2 rounded-md">Lecture</div>
                        <div className="bg-[#262626] hover:bg-[#4a4b4b] py-1 px-2 rounded-md">News</div> */}
                        
                        
                    </div>

                </div>

                <div className="h-[80vh] overflow-y-scroll ">
                  
                    <div className=" grid max-[640px]:grid-cols-1 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 gap-4">

                        {/* --------------------Cards------------ */}

                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>


                    </div>
              
                </div>

            </div>
        </HomeLayout>
    )
}

export default Home;