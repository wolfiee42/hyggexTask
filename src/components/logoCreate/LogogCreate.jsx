import logotext from "../../assets/Component 40.svg";
import logo from "../../assets/logoIn.png"
import { FaPlus } from "react-icons/fa";



const LogogCreate = () => {
    return (
        <div className="max-w-[1350px] mx-auto my-20 flex justify-between items-center">
            <div className="flex justify-start items-center gap-3">
                <div><img src={logo} alt="" className="bg-white w-20 shadow-gray-700 px-1 py-3 shadow-lg rounded-full" /></div>
                <div className="flex flex-col items-start justify-between">
                    <p className="font-[600]">Powered by</p>
                    <img src={logotext} alt="" />
                </div>
            </div>
            <div className="flex justify-center items-center gap-2">
                <div className='bg-gradient-to-b from-[#06286E]  to-[#164EC0]  text-white p-3 rounded-full'>
                    <FaPlus className="text-2xl"/>
                </div>
                <p className="text-2xl font-bold bg-gradient-to-b from-[#06286E]  to-[#164EC0] text-transparent bg-clip-text">Create Flashcard</p>
            </div>
        </div>
    );
};

export default LogogCreate;