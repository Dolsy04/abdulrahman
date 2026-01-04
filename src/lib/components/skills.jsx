import HTMLLogo from "../../assets/html.png"
import CSSLogo from "../../assets/css3.png"
import JavaScriptLogo from "../../assets/javascript.png"
import ReactLogo from "../../assets/reactjs.png"
import tailwindcssLogo from "../../assets/tailwindcss.png"
import GitHubLogo from "../../assets/git.png"    
import FirebaseLogo from "../../assets/firebase.png"
import SupabaseLogo from "../../assets/supabase.svg"
import {Fade} from "react-awesome-reveal";

export default function Skills(){
    return(<>
        <section id="skills" className="w-full text-white py-20 scroll-mt-24">
        <h2 className="text-4xl font-bold mb-8 lg:w-[80%] w-[95%] mx-auto text-red-400 lg:text-left text-center">My Tech Stack</h2>
            <div className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 justify-items-center">
                <Fade cascade damping={0.3}>
                <div className="flex flex-col items-center bg-gradient-to-tr from-purple-800/70 to-blue-900/70 w-[140px] lg:w-40 h-[140px] lg:h-40 rounded-lg shadow-lg backdrop-blur-lg hover:translate-y-[-6px] duration-300 justify-center">
                    <img src={HTMLLogo} alt="HTML" className="w-20 h-20 object-contain" />
                    <span className="text-white text-lg font-[mulish] font-semibold">HTML</span>
                </div>
                <div className="flex flex-col items-center bg-gradient-to-tr from-purple-800/70 to-blue-900/70 w-[140px] lg:w-40 h-[140px] lg:h-40 rounded-lg shadow-lg backdrop-blur-lg hover:translate-y-[-6px] duration-300 justify-center">
                    <img src={CSSLogo} alt="CSS" className="w-20 h-20 object-contain" />
                    <span className="text-white text-lg font-[mulish] font-semibold">CSS</span>
                </div>
                <div className="flex flex-col items-center bg-gradient-to-tr from-purple-800/70 to-blue-900/70 w-[140px] lg:w-40 h-[140px] lg:h-40 rounded-lg shadow-lg backdrop-blur-lg hover:translate-y-[-6px] duration-300 justify-center">
                    <img src={JavaScriptLogo} alt="JavaScript" className="w-20 h-20 object-contain" />
                    <span className="text-white text-lg font-[mulish] font-semibold">JavaScript</span>
                </div>
                <div className="flex flex-col items-center bg-gradient-to-tr from-purple-800/70 to-blue-900/70 w-[140px] lg:w-40 h-[140px] lg:h-40 rounded-lg shadow-lg backdrop-blur-lg hover:translate-y-[-6px] duration-300 justify-center">
                    <img src={ReactLogo} alt="React" className="w-20 h-20 object-contain" />
                    <span className="text-white text-lg font-[mulish] font-semibold">React</span>
                </div>
                <div className="flex flex-col items-center bg-gradient-to-tr from-purple-800/70 to-blue-900/70 w-[140px] lg:w-40 h-[140px] lg:h-40 rounded-lg shadow-lg backdrop-blur-lg hover:translate-y-[-6px] duration-300 justify-center">
                    <img src={tailwindcssLogo} alt="Tailwind" className="w-20 h-20 object-contain" />
                    <span className="text-white text-lg font-[mulish] font-semibold">Tailwind Css</span>
                </div>
                <div className="flex flex-col items-center bg-gradient-to-tr from-purple-800/70 to-blue-900/70 w-[140px] lg:w-40 h-[140px] lg:h-40 rounded-lg shadow-lg backdrop-blur-lg hover:translate-y-[-6px] duration-300 justify-center">
                    <img src={GitHubLogo} alt="GitHub" className="w-20 h-20 object-contain" />
                    <span className="text-white text-lg font-[mulish] font-semibold">GitHub</span>
                </div>
                <div className="flex flex-col items-center bg-gradient-to-tr from-purple-800/70 to-blue-900/70 w-[140px] lg:w-40 h-[140px] lg:h-40 rounded-lg shadow-lg backdrop-blur-lg hover:translate-y-[-6px] duration-300 justify-center">
                    <img src={FirebaseLogo} alt="Firebase" className="w-20 h-20 object-contain" />
                    <span className="text-white text-lg font-[mulish] font-semibold">Firebase</span>
                </div>
                <div className="flex flex-col items-center bg-gradient-to-tr from-purple-800/70 to-blue-900/70 w-[140px] lg:w-40 h-[140px] lg:h-40 rounded-lg shadow-lg backdrop-blur-lg hover:translate-y-[-6px] duration-300 justify-center">
                    <img src={SupabaseLogo} alt="supabase" className="w-20 h-20 object-contain" />
                    <span className="text-white text-lg font-[mulish] font-semibold">Supabase</span>
                </div>
                </Fade>
            </div>
        </section>
    </>)
}
