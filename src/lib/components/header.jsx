import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
export default function Header(){
    const [active, setActive] = useState("home");
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);
//    useEffect(() => {
//   const sections = document.querySelectorAll("section[id]");

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActive(entry.target.id);
//         }
//       });
//     },
//     {
//       rootMargin: "-40% 0px -40% 0px",
//     }
//   );

//   sections.forEach((section) => observer.observe(section));

//   return () => observer.disconnect();
// }, []);

useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.scrollY + 150;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollY >= top && scrollY < top + height) {
        setActive(id);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const linkClass = (id) =>
    `text-base font-[mulish] tracking-wide transition-colors duration-300 relative
   after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
   after:w-full after:bg-red-400 after:origin-left after:transition-transform after:duration-300
   ${
     active === id
       ? "text-red-400 font-semibold after:scale-x-100"
       : "text-white after:scale-x-0 hover:after:scale-x-100 hover:text-red-400"
   }`;

    return(<>
        <header className="w-full p-6 sticky top-0 z-20 bg-[#600D9C]/70 backdrop-blur-lg flex items-center justify-between">
            <h1 className="text-red-400 text-3xl font-bold tracking-wide">Portfolio</h1>

            <nav className={`lg:relative absolute left-0 w-full lg:w-fit bg-[#3C2989] py-2 backdrop-blur-2xl lg:bg-transparent transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-35" : "-translate-y-full"} lg:translate-y-0`}>
                <ul className="flex items-center gap-5 lg:flex-row flex-col w-full">
                    <li><a href="#home" className={linkClass("home")} onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#about" className={linkClass("about")} onClick={() => setIsOpen(false)}>About</a></li>
                    <li><a href="#skills" className={linkClass("skills")} onClick={() => setIsOpen(false)}>Skill</a></li>
                    <li><a href="#projects" className={linkClass("projects")} onClick={() => setIsOpen(false)}>Projects</a></li>
                    <li><a href="#contact" className={linkClass("contact")} onClick={() => setIsOpen(false)}>Contact</a></li>
                </ul>
            </nav>

            <button aria-label="Toggle Menu" className="lg:hidden block">
                {isOpen ? <IoIosClose size={25} color="white" onClick={()=> setIsOpen(false)}/> : <RxHamburgerMenu size={25} color="white" onClick={()=> setIsOpen(true)}/>}
            </button>
        </header>
    </>)
}