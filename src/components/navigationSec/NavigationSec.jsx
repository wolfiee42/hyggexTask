import logo from "../../assets/logoHyggex.png"
import styled from 'styled-components';


const StyledSpecificComponent = styled.div`
font-family: 'Inter', sans-serif;
`;

const NavigationSec = () => {
    return (
        <StyledSpecificComponent >
            <div className="max-w-[1400px] mx-auto py-5 flex justify-between items-center">
                <div>
                    <img src={logo} alt="Hyggex Logo" />
                </div>
                <div>
                    <ul className="flex justify-around items-center gap-14">
                        <li>Home</li>
                        <li>Flashcard</li>
                        <li>Contact</li>
                        <li>FAQ</li>
                        <li className="px-6 py-2 rounded-3xl bg-gradient-to-b from-[#06286E] to-[#164EC0] hover:from-[#164EC0] hover:to-[#06286E] text-white font-medium transition duration-500 hover:shadow-lg hover:shadow-blue-800 hover:cursor-pointer">Login</li>
                    </ul>
                </div>
            </div>
        </StyledSpecificComponent>
    );
};

export default NavigationSec;