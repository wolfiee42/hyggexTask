import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
const Faq = () => {
    const [accordionOpen1, setAccordionOpen1] = useState(false);
    const [accordionOpen2, setAccordionOpen2] = useState(false);
    const [accordionOpen3, setAccordionOpen3] = useState(false);
    return (
        <div className="py-40 flex flex-col gap-5">
            <div className="max-w-[1350px] mx-auto py-4 border-[1px] border-blue-600 px-6 rounded-2xl">
                <button
                    onClick={() => setAccordionOpen1(!accordionOpen1)}
                    className="flex justify-between w-full items-center"
                >
                    <span className="font-semibold text-lg">Can education flashcards be used for all age groups?</span>
                    {accordionOpen1 ? <IoIosArrowUp /> : <IoIosArrowDown />}

                </button>
                <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${accordionOpen1
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                        }`}
                >
                    <div className="overflow-hidden">Yes, education flashcards can be tailored to different age groups and learning levels. There are flashcards designed for preschoolers, elementary school students, high school students, and even for college-level and adult learners.
                    </div>
                </div>
            </div>
            <div className="max-w-[1350px] mx-auto py-4 border-[1px] border-blue-600 px-6 rounded-2xl">
                <button
                    onClick={() => setAccordionOpen2(!accordionOpen2)}
                    className="flex justify-between w-full items-center"
                >
                    <span className="font-semibold text-lg">How do education flashcards work?</span>
                    {accordionOpen2 ? <IoIosArrowUp /> : <IoIosArrowDown />}

                </button>
                <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${accordionOpen2
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                        }`}
                >
                    <div className="overflow-hidden">Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repeatedly, reinforcing their memory and enhancing learning through repetition.
                    </div>
                </div>
            </div>
            <div className="max-w-[1350px] mx-auto py-4 border-[1px] border-blue-600 px-6 rounded-2xl">
                <button
                    onClick={() => setAccordionOpen3(!accordionOpen3)}
                    className="flex justify-between w-full items-center"
                >
                    <span className="font-semibold text-lg">Can education flashcards be used for test preparation?</span>
                    {accordionOpen3 ? <IoIosArrowUp /> : <IoIosArrowDown />}

                </button>
                <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${accordionOpen3
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                        }`}
                >
                    <div className="overflow-hidden">Absolutely. Flashcards are an excellent tool for test preparation, allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge. before exams.</div>
                </div>
            </div>
        </div>
    );
};

export default Faq;