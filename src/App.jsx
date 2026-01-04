import Intro from './lib/components/intro'
import { Slide } from "react-awesome-reveal"

import MainPage from './pages/mainPage'
import { useState, useEffect } from "react";
function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);


  return (
    <section className="w-full bg-gradient-to-t from-blue-950 via-purple-950 to-purple-800">
      <Intro isVisible={showIntro} />
      {/* <Slide direction="left" triggerOnce> */}
        <MainPage />
      {/* </Slide> */}
    </section>
  )
}

export default App
