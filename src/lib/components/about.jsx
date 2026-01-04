import myImage from "../../assets/image 1.png";
import { IoIosCode } from "react-icons/io";
import { LuTimer } from "react-icons/lu";
import { FaMicrochip } from "react-icons/fa6";
import { Slide, Fade } from "react-awesome-reveal";
const miniServiceCard = [
    {
        id: 1,
        title: "Total Projects",
        number: "15+",
        Icon: <IoIosCode />,
    },
    {
        id: 2,
        title: "Years of Experience",
        number: "03+",
        Icon: <LuTimer />,
    },
    {
        id: 3,
        title: "Technologies Mastered",
        number: "09+",
        Icon: <FaMicrochip />,
    },
]

export default function About(){
    return (<section id="about" className="scroll-mt-24">
        <div className="w-full py-20 flex items-center justify-center flex-col gap-6 ">
            <div className="lg:w-[80%] w-[90%] mx-auto flex items-center flex-col-reverse lg:flex-row gap-10 justify-center">
                <div className="lg:w-[50%] w-[95%] lg:h-[400px] md:h-[600px] rounded-lg">
                    <img src={myImage} loading="lazy" alt="myImage" className="w-full h-full object-cover rounded-lg"/>
                </div>
                <div className="lg:w-[50%] h-auto">
                    <Fade >
                    <h3 className="text-red-400 text-4xl font-bold font-[mulish] tracking-wide mb-5 ">About Dev </h3>
                    <p className="text-white mt-3 text-base font-semibold font-[mulish] leading-8">I'm Lamidi Abdul-Rahman Oyedele, a dedicated Frontend Engineer specializing in ReactJs, Tailwind CSS, JavaScript, Supabase, Firebase, HTML, CSS, Git & Github. I build responsive, interactive, and visually stunning websites. I also ensuring seamless collaboration and version control. Furthermore, I've worked with Firebase and supabase, utilizing its robust features to create scalable, secure, and engaging web applications. I'm excited to bring my skills and enthusiasm to innovative projects, delivering top-notch solutions that exceed expectations.</p>
                    </Fade>
                </div>
            </div>
        </div>

        <div className="w-full pb-20 flex items-center justify-center flex-col gap-6">
            <div className="w-[95%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                <Slide direction="left" cascade duration={2000} damping={0.1}>
                {miniServiceCard.map((item) => (
                    <div key={item.id} className="bg-gradient-to-tr from-purple-800/70 to-blue-900/70 py-4 px-6 rounded-lg shadow-lg w-[300px] h-[200px] backdrop-blur-lg hover:translate-y-[-6px] duration-300">
                        <div className="text-red-400 text-4xl mb-4">{item.Icon}</div>
                        <p className="text-white lg:text-2xl text-xl font-bold font-[mulish] text-center">{item.number}</p>
                        <h3 className="text-white text-base font-normal font-[mulish] text-center mt-5">{item.title}</h3>
                    </div>
                ))}
                </Slide>
            </div>
        </div>
    </section>)
}