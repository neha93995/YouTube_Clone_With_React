import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube,FaRegBell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardVoice,MdHistory,MdSubscriptions,MdVideoLibrary, MdOutlineWatchLater } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { GoVideo } from "react-icons/go";
import { FiScissors } from "react-icons/fi";

import { BiLike } from "react-icons/bi";

import { useState } from "react";
import "../App.css";


function HomeLayout({ children }) {

    const [onFocus, setOnFocus] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);




    return (
        <div className="bg-[#0f0f0f] text-white ">

            {/*---- navbar ------ */}
            <div className="navbar min-h-8 px-6 py-1 text-xs  bg-[#0f0f0f] z-50  ">
                <div className="flex justify-between items-center w-[100vw]">
                    <div className="flex justify-center items-center">
                        <div onClick={() => setOpenDrawer(!openDrawer)} ><RxHamburgerMenu className="text-lg" /></div>
                        <a className="flex justify-center items-center mx-5 text-white font-semibold font-serif text-sm"><FaYoutube className="text-red-600 text-2xl" />YouTube2<sup><sup>IN</sup></sup></a>
                    </div>
                    <div className=" flex  w-2/5 text-white">
                        <div onFocus={() => setOnFocus(true)} onBlur={() => setOnFocus(false)} className={` w-[88%] border rounded-l-full border-r-0 border-gray-500 px-4 ${onFocus ? "border-sky-800" : ""} `}>
                            {onFocus ? <CiSearch className="inline text-lg " /> : ""}
                            <input type="text" placeholder="Search" className="bg-transparent outline-none px-4   py-2 text-sm   " />

                        </div>
                        <div className=" bg-[#262626] text-xl w-[12%] border rounded-r-full border-gray-500 flex items-center justify-center "><CiSearch /></div>

                        <div className="text-xl py-2 px-2  mx-3 bg-[#262626]   rounded-full"><MdKeyboardVoice /></div>
                    </div>
                    <div className="text-white p-2 flex items-center text-lg gap-4">
                        <div><RiVideoAddLine /></div>
                        <div><FaRegBell /></div>
                        <div className="bg-orange-950   px-2  rounded-full">N</div>
                    </div>
                </div>

            </div>
            <div>


                <div className="flex w-[98vw] ">
                    {/* ------------sidebar---------- */}




                    {openDrawer ?

                        // ---------------- more content sidebar-----------------
                        <div className="flex flex-col px-3 py-5 text-sm text-center h-[90vh] overflow-y-scroll-[15%]">
                            <div className="border-b border-[#262626] my-3">
                                <div className="flex items-center gap-6 w-full bg-[#262626] px-5 py-2 rounded-md"> <IoHome className="text-xl"/> <span>Home</span></div>
                                <div className="flex items-center gap-6 w-full px-5 py-2 rounded-md hover:bg-[#262626]"> <SiYoutubeshorts className="text-xl"/> <span>Shorts</span></div>
                                <div className="flex items-center gap-6 w-full px-5 py-2 rounded-md hover:bg-[#262626]"> <MdSubscriptions className="text-xl"/> <span>Subscription</span></div>

                            </div>
                            <div className="text-left">You</div>
                            <div className="border-b border-[#262626] my-3">
                                <div className="flex items-center gap-6 w-full px-5 py-2 rounded-md hover:bg-[#262626]"> <CgProfile className="text-xl"/> <span>Your Channel</span></div>
                                <div className="flex items-center gap-6 w-full px-5 py-2 rounded-md hover:bg-[#262626]"> <MdHistory className="text-xl"/> <span>History</span></div>
                                <div className="flex items-center gap-6 w-full px-5 py-2 rounded-md hover:bg-[#262626]"> <GoVideo className="text-xl"/> <span>your Video</span></div>
                                <div className="flex items-center gap-6 w-full px-5 py-2 rounded-md hover:bg-[#262626]"> <MdOutlineWatchLater className="text-xl"/> <span>Watch later</span></div>
                                <div className="flex items-center gap-6 w-full px-5 py-2 rounded-md hover:bg-[#262626]"> <FiScissors className="text-xl"/> <span>Your Clip</span></div>
                                <div className="flex items-center gap-6 w-full px-5 py-2 rounded-md hover:bg-[#262626]"> <BiLike className="text-xl"/> <span>Like videos</span></div>

                            </div>
                            <div className="text-left">Subscription</div>
                            <div className="border-b border-[#262626] my-3">
                                <div className="flex items-center gap-6 w-full bg-[#262626] px-5 py-2 rounded-md"> <IoHome className="text-xl"/> <span>Home</span></div>
                                <div className="flex items-center gap-6 w-full px-5 py-2 rounded-md hover:bg-[#262626]"> <IoHome className="text-xl"/> <span>Home</span></div>
                                <div className="flex items-center gap-6 w-full px-5 py-2 rounded-md hover:bg-[#262626]"> <IoHome className="text-xl"/> <span>Home</span></div>

                            </div>
                            <div className="text-left">Explore</div>
                            <div className="border-b border-[#262626] my-3">
                                <div className="flex items-center gap-6 w-full bg-[#262626] px-5 py-2 rounded-md"> <IoHome className="text-xl"/> <span>Home</span></div>
                                <div className="flex items-center gap-6 w-full px-5 py-2 rounded-md hover:bg-[#262626]"> <IoHome className="text-xl"/> <span>Home</span></div>
                                <div className="flex items-center gap-6 w-full px-5 py-2 rounded-md hover:bg-[#262626]"> <IoHome className="text-xl"/> <span>Home</span></div>

                            </div>
                        </div>

                        :
                        // -------------------less content sidebar
                        <div className="flex flex-col px-2 py-5 gap-8 text-[10px] text-center w-[5%] ">
                            <div><IoHome className="text-lg w-full" /><p>Home</p></div>
                            <div><SiYoutubeshorts className="text-lg w-full" /> <p>Shorts</p> </div>
                            <div><MdSubscriptions className="text-lg w-full" /> <p>Subscription</p></div>
                            <div><MdVideoLibrary className="text-lg w-full" /><p>You</p></div>

                        </div>

                    }

                    {/* -------------------------Content------------------------- */}

                    <div className={openDrawer?"w-[85%]":"w-[95%]"}>
                        {children}
                    </div>
                </div>

            </div>


        </div>
    )
}

export default HomeLayout;