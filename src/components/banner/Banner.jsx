import { useState } from "react";
import { MdLightbulbOutline } from "react-icons/md";
import { IoMdVolumeHigh } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdFullscreen } from "react-icons/md";
import ReactCardFlip from "react-card-flip";



const Banner = () => {


    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };


    return (
        <div>
            <div className="max-w-[1350px] mx-auto">
                <h1 className="my-12 text-4xl font-bold bg-gradient-to-b from-[#06286E]  to-[#164EC0] text-transparent bg-clip-text">Relations and Functions ( Mathematics )</h1>
                <div>
                    <ul className="flex flex-row justify-center gap-8 font-[500] mb-20 text-gray-600">
                        <li className="border-b-2 border-blue-800 text-blue-800 font-[700]">Study</li>
                        <li className="">Quiz</li>
                        <li className="">Test</li>
                        <li className="">Games</li>
                        <li className="">Others</li>
                    </ul>
                    <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
                        <div onClick={handleClick}>
                            <div className="bg-gradient-to-tr from-[#1F80EB] via-cyan-700 to-blue-900  w-[700px] h-[400px] mx-auto rounded-3xl flex justify-center items-center relative">
                                <p className="text-4xl text-white">9 + 6 + 7x - 2x - 3</p>
                                <MdLightbulbOutline className='text-white text-3xl absolute top-8 left-8' /> <IoMdVolumeHigh className='text-white text-3xl absolute top-8 right-7' />
                            </div>
                        </div>
                        <div onClick={handleClick}>
                            <div className="bg-gradient-to-tr from-[#73aec2] via-[#061C93] to-[#0c17e4]  w-[700px] h-[400px] mx-auto rounded-3xl flex justify-center items-center relative">
                                <p className="text-4xl text-white">5x + 12</p>
                                <MdLightbulbOutline className='text-white text-3xl absolute top-8 left-8' /> <IoMdVolumeHigh className='text-white text-3xl absolute top-8 right-7' />
                            </div>
                        </div>
                    </ReactCardFlip>
                    <div className='w-[650px] mx-auto flex justify-between items-center mt-20 text-3xl font-bold '>
                        <GrPowerReset className='text-blue-800 text-4xl' />
                        <div className='bg-gradient-to-b from-[#06286E]  to-[#164EC0]  text-white p-3 rounded-full'><IoIosArrowBack className='text-2xl' /></div>
                        <p>01/10</p>
                        <div className='bg-gradient-to-b from-[#06286E]  to-[#164EC0]  text-white p-3 rounded-full'><IoIosArrowForward className='text-2xl' /></div>
                        <MdFullscreen className='text-blue-800 text-4xl' />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;


