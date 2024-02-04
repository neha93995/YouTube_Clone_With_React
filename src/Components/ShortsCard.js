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
            <div className="flex flex-col justify-end text-center">
                <div className=" cursor-pointer flex flex-col justify-center items-center " ><BiSolidLike  className=" hover:bg-[#262626] rounded-full text-2xl"/><p>251k</p></div>
                <div className=" cursor-pointer flex flex-col justify-center items-center " ><BiSolidDislike className=" hover:bg-[#262626] rounded-full text-2xl"/><p>Dislike</p></div>
                <div className=" cursor-pointer flex flex-col justify-center items-center " ><BiCommentDetail className=" hover:bg-[#262626] rounded-full text-2xl"/><p>62</p></div>
                <div className=" cursor-pointer flex flex-col justify-center items-center " ><RiShareForwardFill  className=" hover:bg-[#262626] rounded-full text-2xl"/><p>share</p></div>
                <div className=" cursor-pointer flex flex-col justify-center items-center " ><PiDotsThreeOutlineVerticalFill className=" hover:bg-[#262626] rounded-full text-2xl" /></div>
            </div>
        </div>
    )
}

export default ShortsCard;