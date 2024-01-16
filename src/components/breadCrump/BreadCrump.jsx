import { GoHome } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";



const BreadCrump = () => {
    return (
        <div className="max-w-[1350px] mx-auto flex flex-row items-center">
            <GoHome className="text-xl" />
            <MdKeyboardArrowRight />
            <p className="text-sm font-medium text-gray-500">Flashcard</p>
            <MdKeyboardArrowRight />
            <p className="text-sm font-medium text-gray-500">Mathematics</p>
            <MdKeyboardArrowRight />
            <p className="text-sm font-bold text-blue-800">Relation and Function</p>
        </div>
    );
};

export default BreadCrump;