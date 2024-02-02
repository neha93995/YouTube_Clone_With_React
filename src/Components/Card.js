
function Card() {
    return (
            <div className="card card-compact shadow-xl pb-5">
                <figure><img src="https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg" className="rounded-lg" alt="Shoes" /></figure>
                <div className="mt-3 flex flex-row w-full p-0 ">
                    <div className="w-[15%]">
                        <img className="w-8 h-8 rounded-full" src="https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg"/>
                    </div>
                    <div className="w-[85%]">
                        <h2 className="text-sm font-bold">Video title with thumbnail with thumbnail!</h2>
                        <p className="text-xs">channel name</p>
                        <p className="text-xs">1.7K views *<span>15 hour ago</span></p>
                    </div>
                        
                </div>
            </div>
    )
}

export default Card;