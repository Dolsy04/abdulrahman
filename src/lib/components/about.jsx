import myImage from "../../assets/myimage.jpg";

export default function About(){
    return (<>
        <section className="w-full h-screen flex items-center justify-center flex-col gap-6 bg-gradient-to-t to-blue-950 via-purple-950 from-purple-800">
            <div className="w-[80%] mx-auto flex items-center gap-10 justify-center">
                <div className="w-[50%] h-[500px] rounded-md">
                    <img src={myImage} loading="lazy" alt="myImage" className="w-full h-full object-cover rounded-md"/>
                </div>
                <div className="w-[50%] h-auto">
                    <h3 className="text-orange-100 text-6xl font-bold font-[Arimo] tracking-wide mb-10 uppercase">About </h3>
                    <p className="text-white mt-3 text-xl font-semibold font-[mulish]">I’m Lamidi Abdul-Rahman Oyedele, a dedicated Frontend Engineer specializing in ReactJs, Tailwind CSS, JavaScript, Supabase, Firebase, HTML, CSS, Git & Github. I build responsive, interactive, and visually stunning websites. I also ensuring seamless collaboration and version control. Furthermore, I've worked with Firebase and supabase, utilizing its robust features to create scalable, secure, and engaging web applications. I'm excited to bring my skills and enthusiasm to innovative projects, delivering top-notch solutions that exceed expectations.</p>
                     <button className="mt-6 bg-amber-300 w-[300px] h-[44px] rounded-full cursor-pointer relative overflow-hidden group ">
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-300 via-indigo-500 to-blue-600 transition-transform duration-500 translate-x-[-100%] group-hover:translate-x-0"></span>
                    <span className="relative text-base font-extrabold text-blue-800 group-hover:text-white transition-color duration-500 font-[mulish] animate-move-horizontal">Let's Connect</span>
                </button>
                </div>
            </div>
        </section>
    </>)
}