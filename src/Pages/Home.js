import Card from "../Components/Card";
import HomeLayout from "../Layouts/HomeLayout";

import { MdArrowBackIos,MdArrowForwardIos } from "react-icons/md";

function Home() {

    const handleNextScroll=()=>{
        const a = document.getElementById('scroll-nav');
        
        a.scrollLeft = a.scrollLeft+200;
        document.getElementById("prevScroll").style.display = "block";
        if(Math.ceil((a.scrollLeft+a.clientWidth))===a.scrollWidth)
        {
            document.getElementById("nextScroll").style.display = "none";
        }
        
    }
    
    
    const handlePrevScroll=()=>{
        
        const a = document.getElementById('scroll-nav');
        a.scrollLeft = a.scrollLeft-200;
        
        document.getElementById("nextScroll").style.display = "block";
        if(a.scrollLeft===0)
        {
            document.getElementById("prevScroll").style.display = "none";
    
        }
    }

    return (
        <HomeLayout>
            <div className=' px-5 relative '>

                <div>

                <div className=' sticky top-12 z-40 py-3 bg-[#0f0f0f]  overflow-x-scroll font-bold flex scroll-smooth' id="scroll-nav">
                    <div className=" flex gap-3 text-sm">
                        <div className="bg-[#262626] w-full hover:bg-[#4a4b4b] whitespace-nowrap py-1 px-5 rounded-md">All</div>
                        <div className="bg-[#262626] w-full hover:bg-[#4a4b4b] whitespace-nowrap py-1 px-5 rounded-md">Gaming</div>
                        <div className="bg-[#262626] w-full hover:bg-[#4a4b4b] whitespace-nowrap py-1 px-5 rounded-md">Mixes</div>
                        <div className="bg-[#262626] w-full hover:bg-[#4a4b4b] whitespace-nowrap py-1 px-5 rounded-md">computer programming</div>
                        <div className="bg-[#262626] w-full hover:bg-[#4a4b4b] whitespace-nowrap py-1 px-5 rounded-md">Music</div>
                        <div className="bg-[#262626] w-full hover:bg-[#4a4b4b] whitespace-nowrap py-1 px-5 rounded-md">Movies</div>
                        <div className="bg-[#262626] w-full hover:bg-[#4a4b4b] whitespace-nowrap py-1 px-5 rounded-md">Live</div>
                        <div className="bg-[#262626] w-full hover:bg-[#4a4b4b] whitespace-nowrap py-1 px-5 rounded-md">Lecture</div>
                        <div className="bg-[#262626] w-full hover:bg-[#4a4b4b] whitespace-nowrap py-1 px-5 rounded-md">News</div>
                        <div className="bg-[#262626] w-full hover:bg-[#4a4b4b] whitespace-nowrap py-1 px-5 rounded-md">All</div>
                        <div className="bg-[#262626] w-full hover:bg-[#4a4b4b] whitespace-nowrap py-1 px-5 rounded-md">Gaming</div>
                        <div className="bg-[#262626] w-full hover:bg-[#4a4b4b] whitespace-nowrap py-1 px-5 rounded-md">Mixes</div>
                        <div className="bg-[#262626] w-full hover:bg-[#4a4b4b] whitespace-nowrap py-1 px-5 rounded-md">computer programming</div>
                        <div className="bg-[#262626] w-full hover:bg-[#4a4b4b] whitespace-nowrap py-1 px-5 rounded-md">Music</div>
                        <div className="bg-[#262626] w-full hover:bg-[#4a4b4b] whitespace-nowrap py-1 px-5 rounded-md">Movies</div>
                        <div className="bg-[#262626] w-full hover:bg-[#4a4b4b] whitespace-nowrap py-1 px-5 rounded-md">Live</div>
                        <div className="bg-[#262626] w-full hover:bg-[#4a4b4b] whitespace-nowrap py-1 px-5 rounded-md">Lecture</div>
                        <div className="bg-[#262626] w-full hover:bg-[#4a4b4b] whitespace-nowrap py-1 px-5 rounded-md">News</div>
                    
                        
                    </div>

                </div>
                    <div className="absolute top-2  left-0 bg-[#0f0f0f]  p-2 z-40 hidden " id="prevScroll"  onClick={handlePrevScroll}><MdArrowBackIos/></div>
                    <div className="absolute top-2  right-0 bg-[#0f0f0f] p-2 z-40 " id="nextScroll" onClick={handleNextScroll}><MdArrowForwardIos/></div>

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