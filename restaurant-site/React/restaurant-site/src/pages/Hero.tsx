import spaceStopImage from '../assets/space-stop-5.png'
import logoGif from '../assets/Gus_Galaxy_Grill_Logo.gif'

const Hero = () => {
    return (
        <div className={"bg-default min-h-screen w-full bg-cover bg-center bg-no-repeat"}>
            <div className="flex flex-col justify-center gap-10">
                <div className={"flex flex-col items-center mt-10"}>
                    <h1 className={"font-audiowide text-4xl lg:text-8xl mb-7 text-red-600 text-shadow-galaxy"}>Gus's Galaxy Grill</h1>
                    <div className={"flex flex-col"}>
                        <h2 className={"font-gugi flex flex-col lg:flex-row justify-between items-center lg:text-6xl gap-10"}>
                            <span className={"font-dafoe -rotate-8 text-4xl lg:text-7xl text-blue-300 text-shadow-space-eats"}>Space Eats</span>
                            <span className={"text-red-300 text-shadow-from"}>from</span>
                            <img className={"drop-shadow-special h-[50%] w-[50%] lg:h-full lg:w-full"} src={spaceStopImage} alt="SPACE STOP 5"/>
                        </h2>
                    </div>
                </div>
                <div className={"flex justify-center h-50% lg:h-full object-cover"}>
                    <img src={logoGif} alt="Dancing Alien"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;