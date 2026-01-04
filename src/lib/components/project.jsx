import certificate from "../../assets/certificate.png"
import damotakImage from "../../assets/Damotak image.png"
import ecommerceImage from "../../assets/ecommerce.png"
import taskFlow from "../../assets/image.png"
import weather from "../../assets/image2.png"
import { MdOutlineArrowOutward } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

const projects = [
    {id: 1, title: "MW-Store", image: ecommerceImage, desc: "A shoe store website built with react and firebase which include cart, checkout details, profile settings, order history, wishlist and proper authentication and authorization", link: "https://mw-gray.vercel.app", tech: "React, Tailwind CSS, Firebase"},

    {id: 2, title: "Task Flow", image: taskFlow, desc: "A task management application built with react and supabase it allow user to create task and categories each task status, with a simple, neat, better and easy Ui", link: "https://task-flow-tawny.vercel.app/", tech: "React, Tailwind CSS, Supabase"},

    {id: 3, title: "Damotak School", image: damotakImage, desc: "A responsive website for a school", link: "https://dolsy04.github.io/Damotak-School/", tech: "HTML, CSS, JavaScript"},

    {id: 4, title: "Weather App", image: weather, desc: "A weather application built with react and tailwind css which feature your weather updates using devices location also feature nearby cites weather updates using devices location.", link: "https://weather-app-rouge-xi-53.vercel.app/", tech: "React, Tailwind CSS"},
]
export default function Project(){
    return(<>
        <section id="projects" className="w-full py-20 scroll-mt-24">
        <h2 className="text-4xl font-bold mb-8 lg:w-[80%] w-[95%] mx-auto text-red-400 text-center">Projects</h2>
            <div className="w-[95%] lg:w-[80%] mx-auto flex items-center gap-4 justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-auto">
                    <Fade cascade damping={0.2}>
                        {projects.map((project) => (
                            <div key={project.id} className="w-full mb-8 bg-gradient-to-tr from-purple-800/70 to-blue-900/70 p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                                <div className="w-full h-[200px]">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-white text-2xl font-bold font-[mulish] mb-2">{project.title}</h3>
                                    <p className="text-purple-300 text-base font-[mulish] mb-4">{project.tech}</p>
                                    <p className="text-white text-sm tracking-wide font-[mulish] mb-4">{project.desc}</p>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-red-400 font-[mulish] font-semibold hover:underline flex items-center gap-2">View Project <MdOutlineArrowOutward /></a>
                                </div>
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>
        </section>
    </>)
}
