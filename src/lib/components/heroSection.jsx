import { IoRocket } from "react-icons/io5";

export default function HeroSection(){
    return (<>
        <section className="w-full h-screen flex items-center justify-center flex-col gap-6 bg-gradient-to-t from-blue-950 via-purple-950 to-purple-800">
            <div className="text-center w-[70%] mx-auto">
                <h1 className="font-[Arimo] text-3xl lg:text-6xl md:text-6xl font-bold  bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent flex items-center justify-center gap-3">Welcome to My <span className="text-red-400">Porfolio</span> <IoRocket className="text-red-400"/></h1>
                <p className="text-white mt-3 text-xl font-semibold font-[mulish]">I’m Lamidi Abdul-Rahman Oyedele, a dedicated Frontend Engineer specializing in ReactJs, Tailwind CSS, JavaScript, Supabase, Firebase, HTML, CSS, Git & Github.</p>
                <button className="mt-6 bg-amber-300 w-[300px] h-[44px] rounded-full cursor-pointer relative overflow-hidden group ">
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-300 via-indigo-500 to-blue-600 transition-transform duration-500 translate-x-[-100%] group-hover:translate-x-0"></span>
                    <span className="relative text-base font-extrabold text-blue-800 group-hover:text-white transition-color duration-500 font-[mulish] ">Let's talk about your project</span>
                </button>
            </div>
        </section>

    
    </>)
}