import { IoLogoLinkedin } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
export default function Contact(){
    return(<>
        <section id="contact" className="w-[90%] lg:w-[80%] mx-auto pt-30 pb-20 scroll-mt-24">
            <div className="w-full bg-gradient-to-tr from-purple-800/70 to-blue-900/70 p-6 rounded-2xl">
                <h2 className="text-4xl font-bold mb-8 text-red-400 text-center">Contact Me</h2>
                <p className="text-center text-white mb-6 text-base font-[mulish] w-[90%] mx-auto">I'd love to hear from you! Whether you have a question, want to collaborate on a project, or just want to say hello, feel free to reach out.</p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <a href="mailto:oyedeleabdulrahmon337@gmail.com">
                        <button className="bg-red-400 font-[mulish] font-bold text-white px-6 py-3 rounded-lg hover:bg-red-500 transition-colors duration-300 cursor-pointer flex items-center gap-2"><CiMail size={24}/>Email Me</button>
                    </a>
                    <a href="https://www.linkedin.com/in/abdulrahman-lamidi-a1704324b" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white bg-[#6a25d3] px-6 py-3 rounded-lg hover:bg-[#5c1ac7] transition-colors duration-300">
                        <IoLogoLinkedin size={24} />
                        <span className="font-[mulish] font-semibold">LinkedIn</span>
                    </a>
                    <a href="https://wa.me/qr/J3ZGW4EVHXR5I1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white bg-[#25D366] px-6 py-3 rounded-lg hover:bg-[#1ac759] transition-colors duration-300">
                        <FaWhatsapp size={24} />
                        <span className="font-[mulish] font-semibold">WhatsApp</span>
                    </a>
                </div>
            </div>
        </section>
    </>)
}