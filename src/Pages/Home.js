import HomeLayout from "../Layouts/HomeLayout";

function Home() {
    return (
        <HomeLayout>
            <div className=' px-5 relative '>

                <div className=' sticky top-12 z-40 py-3 bg-[#0f0f0f] font-bold'>
                    <div className=" flex gap-2 text-sm  ">
                      
                      
                        <div className="bg-[#262626] hover:bg-[#4a4b4b] py-1 px-2 rounded-md">All</div>
                        <div className="bg-[#262626] hover:bg-[#4a4b4b] py-1 px-2 rounded-md">Gaming</div>
                        <div className="bg-[#262626] hover:bg-[#4a4b4b] py-1 px-2 rounded-md">Mixes</div>
                        <div className="bg-[#262626] hover:bg-[#4a4b4b] py-1 px-2 rounded-md">computer programming</div>
                        <div className="bg-[#262626] hover:bg-[#4a4b4b] py-1 px-2 rounded-md">Music</div>
                        <div className="bg-[#262626] hover:bg-[#4a4b4b] py-1 px-2 rounded-md">Movies</div>
                        <div className="bg-[#262626] hover:bg-[#4a4b4b] py-1 px-2 rounded-md">Live</div>
                        <div className="bg-[#262626] hover:bg-[#4a4b4b] py-1 px-2 rounded-md">Lecture</div>
                        <div className="bg-[#262626] hover:bg-[#4a4b4b] py-1 px-2 rounded-md">News</div>
                        
                        
                    </div>

                </div>

                <div className="h-[80vh] overflow-y-scroll ">
                  
                    <div>nestill need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid

webpack compiled with 1 warningneed the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid

webpack compiled with 1 warninghaha</div>
              
                </div>

            </div>
        </HomeLayout>
    )
}

export default Home;