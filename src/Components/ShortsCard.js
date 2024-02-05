import { BiSolidLike, BiSolidDislike, BiCommentDetail } from "react-icons/bi";
import { RiShareForwardFill } from "react-icons/ri";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

function ShortsCard()
{
    return (
        <div className="my-5 w-1/3 flex ">
            <div className="w-9/12 rounded-md">
                <img className="h-[80vh] bg-fixed rounded-lg " src="https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg"/>           

            </div>
            <div className="flex flex-col justify-end text-xs text-center gap-3 mx-3">
                <div className=" cursor-pointer flex flex-col justify-center items-center ">
                    <div className=" hover:bg-[#4a4b4b] bg-[#262626] rounded-full text-xl p-3"><BiSolidLike /></div>
                    <p>266K</p>
                </div>
                <div className=" cursor-pointer flex flex-col justify-center items-center ">
                    <div className=" hover:bg-[#4a4b4b] bg-[#262626] rounded-full text-xl p-3" ><BiSolidDislike  /></div>
                    <p>dislike</p>
                </div>
                <div className=" cursor-pointer flex flex-col justify-center items-center ">
                    <div className=" hover:bg-[#4a4b4b] bg-[#262626] rounded-full text-xl p-3" ><BiCommentDetail  /></div>
                    <p>comment</p>
                </div>
                <div className=" cursor-pointer flex flex-col justify-center items-center ">
                    <div  className=" hover:bg-[#4a4b4b] bg-[#262626] rounded-full text-xl p-3" ><RiShareForwardFill /></div>
                    <p>share</p>
                </div>
                <div className=" cursor-pointer flex flex-col justify-center items-center ">
                    <div className=" hover:bg-[#4a4b4b] bg-[#262626] rounded-full text-lg p-3" ><PiDotsThreeOutlineVerticalFill  /></div>
                    
                </div>
                <div className=" cursor-pointer flex flex-col justify-center items-center ">
                    <div className=" hover:bg-[#4a4b4b] bg-[#262626] rounded-full text-lg " ><img src="https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg" className="w-9 h-9 rounded-md" /></div>
                    
                </div>
            </div>
        </div>
    )
}

export default ShortsCard;