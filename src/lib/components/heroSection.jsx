import { IoRocket } from "react-icons/io5";
import image from '../../assets/image 3.png'
import resume from "../../assets/rahmanlamidi CV.pdf"
import TypingText from "../ui/autotyping";
import { Slide } from "react-awesome-reveal";
export default function HeroSection(){
    return (<>
            <section id="home" className="w-full lg:h-[90vh] flex items-center justify-center lg:m-0 mt-10 lg:flex-row flex-col gap-6 scroll-mt-24">
                <div className="w-full lg:w-[50%] text-center lg:text-left px-6 flex flex-col items-center lg:items-start justify-center gap-4">
                <Slide direction="left">
                    <span className="font-[mulish] font-bold text-base text-red-500">Hi, I'm</span>
                    <h3 className="font-[mulish] text-4xl text-white font-semibold tracking-wider my-6 capitalize">Lamidi Abdul-Rahman</h3>
                    <p className="mb-6 text-xl text-purple-400 font-[mulish]">Frontend Developer | <span><TypingText /></span></p>
                    <p className="mb-8 text-lg tracking-wide text-white font-[mulish]">Frontend Developer with proven experience building scalable, responsive web applications that prioritize performance and user experience.</p>

                    <div className="flex items-center gap-4">
                        <button className="bg-gradient-to-r from-indigo-300 via-indigo-500 to-blue-600 w-[150px] h-[44px] rounded-lg cursor-pointer relative overflow-hidden group">
                            <span className="absolute inset-0 bg-gradient-to-r from-red-300 via-red-500 to-red-600 transition-transform duration-500 translate-x-[-100%] group-hover:translate-x-0"></span>
                            <span className="relative text-base font-extrabold text-white group-hover:text-white transition-color duration-500 font-[mulish] ">Contact Me</span>
                        </button>
                        <a href={resume} download className="w-[150px] h-[44px] border border-red-600 rounded-lg text-white font-[mulish] font-bold cursor-pointer flex items-center justify-center">View Resume</a>
                    </div>
                </Slide>
                </div>
                <div className="w-[85%] lg:w-[35%] h-[300px]">
                    <img src={image} alt="hero" className="w-full h-full object-cover rounded-md"/>
                </div>


                {/* <div className="text-center w-[70%] mx-auto">
                    <h1 className="font-[Arimo] text-3xl lg:text-6xl md:text-6xl font-bold  bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent flex items-center justify-center gap-3">Welcome to My <span className="text-red-400">Porfolio</span> <IoRocket className="text-red-400"/></h1>
                    <p className="text-white mt-3 text-xl font-semibold font-[mulish]">I’m Lamidi Abdul-Rahman Oyedele, a dedicated Frontend Engineer specializing in ReactJs, Tailwind CSS, JavaScript, Supabase, Firebase, HTML, CSS, Git & Github.</p>
                    <button className="mt-6 bg-amber-300 w-[300px] h-[44px] rounded-full cursor-pointer relative overflow-hidden group ">
                        <span className="absolute inset-0 bg-gradient-to-r from-indigo-300 via-indigo-500 to-blue-600 transition-transform duration-500 translate-x-[-100%] group-hover:translate-x-0"></span>
                        <span className="relative text-base font-extrabold text-blue-800 group-hover:text-white transition-color duration-500 font-[mulish] ">Let's talk about your project</span>
                    </button>
                </div> */}
            </section> 
    </>)
}