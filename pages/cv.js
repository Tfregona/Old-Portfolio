import About from "../components/cv/about.js"
import Skills from "../components/cv/skills.js"
import Exp from "../components/cv/exp.js"

export default function Cv() {
  return (
    <div className="text-white">
      <About />
      <Skills />
      <Exp />
    </div>
  );
}
