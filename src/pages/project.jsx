const Project = () => {
    return ( 
        <>
        <div>
            <div className=" flex md:flex-row flex-col justify-center gap-12 ">
                <div className=" flex flex-col items-center  md:w-1/5 mx-10 md:mx-0 h-[50vh]  border-gray-100 border shadow-lg hover:translate-y-1">
                    <h1 className=" font-bold text-2xl mt-5 mb-4 text-gray-600">Snake Game</h1>
                    <p className=" text-center md:mx-5 px-14 md:px-0 text-[1.025rem]">Crafted a JavaFX Snake game, boasting intuitive controls, vibrant graphics, and immersive gameplay, ensuring users' ultimate enjoyment, engagement, and satisfaction.</p>
                    <div className="flex flex-col items-center gap-2 mt-12">
                    <div className="flex flex-row gap-2 text-[0.9rem] font-[500]">
                    <p>Java</p>
                    <p>JavaFX</p>
                    </div>
                   <div>
                   <a href=""><i className="fi fi-brands-github"></i></a>
                   </div>
                    </div>
    
                </div>
                <div className=" flex flex-col items-center md:w-1/5 mx-10 md:mx-0 h-[50vh] border border-gray-100 shadow-lg hover:translate-y-1">
                    <h1 className=" font-bold text-2xl mt-5 mb-4 text-gray-600">CleanUp Connect</h1>
                    <p className=" text-center md:mx-5 px-14 md:px-0 text-[1.025rem]">Xylem India Hackathon fosters innovative solutions, tackling microplastic pollution in water bodies through research-driven approaches and collaborative efforts.</p>
                    <div className="flex flex-col items-center gap-2 mt-12">
                    <div className="flex flex-row gap-2 text-[0.9rem] font-[500]">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Python</p>
                    </div>
                   <div>
                   <a href=""><i className="fi fi-brands-github"></i></a>
                   </div>
                    </div>
    
                </div>
                <div className=" flex flex-col items-center  md:w-1/5 mx-10 md:mx-0 h-[50vh] border border-gray-100 shadow-lg hover:translate-y-1">
                    <h1 className=" font-bold text-2xl mt-5 mb-4 text-gray-600">LyteRate</h1>
                    <p className=" text-center md:mx-5 px-14 md:px-0 text-[1.025rem]">LyteRate: e-learning hub offering diverse courses from programming to life skills. Features student community, integrated Doubt space, tests, and ChatBot.</p>
                    <div className="flex flex-col items-center gap-2 mt-12">
                    <div className="flex flex-row gap-2 text-[0.9rem] font-[500]">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Python</p>
                    </div>
                   <div>
                   <a href=""><i className="fi fi-brands-github"></i></a>
                   </div>
                    </div>
    
                </div>
            </div>
        </div>
        </>
    
    );
}
 
export default Project;