import certificate from "../../assets/certificate.png"

export default function Certificate(){
    return(<>
        <section id="certificate" className="w-full py-20">
        <h2 className="text-4xl font-bold mb-8 lg:w-[80%] w-[95%] mx-auto text-red-400 text-center">Certificate</h2>
            <div className="w-[95%] lg:w-[80%] mx-auto flex items-center gap-4 justify-center">
                <div className="flex flex-col items-center w-[95%] lg:w-[400px] h-auto rounded-lg shadow-lg backdrop-blur-lg hover:translate-y-[-6px] duration-300 justify-center">
                    <div className="w-full h-[300px]">
                    <img src={certificate} alt="certificate" className="w-full h-full object-contain" />
                    </div>
                    {/* <span className="text-white text-lg font-[mulish] font-semibold">Certificate</span> */}
                </div>
            </div>
        </section>
    </>)
}
