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
import { Link } from "react-router-dom";


function HomeLayout({ children }) {

    const [onFocus, setOnFocus] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);




    return (
        <div className="bg-[#0f0f0f] h-screen text-white ">

            {/*---- navbar ------ */}
            <div className="navbar min-h-8 pl-2 sm:px-4 py-1 text-xs   bg-[#0f0f0f] z-50  ">
                <div className="flex justify-between items-center w-[100vw]">
                    <div className="flex  items-center">
                        <div onClick={() => setOpenDrawer(!openDrawer)} className="rounded-full cursor-pointer p-2 hover:bg-[#262626] " ><RxHamburgerMenu className="text-sm sm:text-xl" /></div>
                        <a className="flex justify-center items-center mx-5 text-white font-semibold font-serif text-xs sm:text-sm cursor-pointer "><FaYoutube className="text-red-600 text-2xl" />YouTube2<sup><sup>IN</sup></sup></a>
                    </div>
                    <div className=" flex  sm:w-2/5 text-white">
                        <div onFocus={() => setOnFocus(true)} onBlur={() => setOnFocus(false)} className={`max-[640px]:hidden  w-[88%] border rounded-l-full border-r-0 border-gray-500 px-4 ${onFocus ? "border-sky-800" : ""} `}>
                            {onFocus ? <CiSearch className="inline text-lg " /> : ""}
                            <input type="text" placeholder="Search" className="bg-transparent outline-none px-4   py-2 text-sm   " />

                        </div>
                        <div className=" bg-[#262626] cursor-pointer text-xl sm:w-[12%] border rounded-r-full border-gray-500 flex items-center justify-center max-[640px]:border-none max-[640px]:bg-transparent"><CiSearch /></div>

                        <div className="max-[640px]:bg-transparent cursor-pointer text-xl py-2 px-2 hover:bg-[#4a4b4b] mx-3 bg-[#262626] rounded-full"><MdKeyboardVoice /></div>
                    </div>
                    <div className="text-white px-2 flex items-center text-lg gap-2">
                        <div className=" cursor-pointer hover:bg-[#262626] p-2 rounded-full "><RiVideoAddLine /></div>
                        <div className=" cursor-pointer hover:bg-[#262626] p-2 rounded-full "><FaRegBell /></div>
                        <div className=" cursor-pointer  bg-orange-950  m-1 px-2  rounded-full">N</div>
                    </div>
                </div>

            </div>
            <div>


                <div className="flex w-100vw sm:w-[98vw] ">
                    {/* ------------sidebar---------- */}

                    {openDrawer ?

                        // ---------------- more content sidebar-----------------
                        <div className=" max-[640px]:bg-[#0f0f0f] z-50 flex flex-col px-3 py-5 text-xs sm:text-sm text-center h-[90vh] overflow-y-scroll max-[640px]:absolute max-[640px]:top-10 max-[640px]:left-0   ">
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
                        <div className=" md:flex flex-col text-[10px] text-center w-[5%] px-1 hidden ">
                            <Link to={"/"} className="hover:bg-[#262626] rounded-lg flex flex-col justify-center items-center py-4"><IoHome className="text-lg w-full " /><p>Home</p></Link>
                            <Link to={"/shorts"} className="hover:bg-[#262626] rounded-lg flex flex-col justify-center items-center py-4"><SiYoutubeshorts className="text-lg w-full " /> <p>Shorts</p> </Link>
                            <Link className="hover:bg-[#262626] rounded-lg flex flex-col justify-center items-center py-4"><MdSubscriptions className="text-lg w-full " /> <p>Subscription</p></Link>
                            <Link className="hover:bg-[#262626] rounded-lg flex flex-col justify-center items-center py-4"><MdVideoLibrary className="text-lg w-full " /><p>You</p></Link>

                        </div>

                    }

                    {/* -------------------------Content------------------------- */}

                    <div className={`${openDrawer?"w-[85%] ":"w-[95%] "} max-[640px]:w-[100%]`}>
                        {children}
                    </div>
                </div>

            </div>


        </div>
    )
}

export default HomeLayout;