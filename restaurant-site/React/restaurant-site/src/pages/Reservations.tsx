import ReserveForm from "../components/ReserveForm.tsx";


const Reservations = () => {
    return (
        <div className={"bg-default min-h-screen w-full bg-cover bg-center bg-no-repeat"}>
            <div className={"bg-default w-full bg-cover bg-center bg-no-repeat mb-20"}>
                <div className="flex flex-col justify-center">
                    <div className={"flex flex-col items-center mt-10 gap-5"}>
                        <h1 className={"font-audiowide text-8xl mb-7 text-red-600 text-shadow-galaxy"}>Gus's Galaxy Grill</h1>
                        <div className={"flex flex-row"}>
                            <h2 className={"font-dafoe -rotate-7 text-shadow-special text-yellow-300 drop-shadow-special flex flex-row justify-between items-center text-6xl gap-10"}>
                                Reserve your Seat!
                            </h2>

                        </div>
                    </div>
                </div>
            </div>
            <ReserveForm/>
        </div>
    );
};

export default Reservations;