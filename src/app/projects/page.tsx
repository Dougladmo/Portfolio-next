import Transition from "@/components/Transition"
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo"

const Projetos = () => {
  return (
    <div className="text-white">
      <Transition />
      <div className="opacity-0 animate-[fadeIn_0.5s_ease-in-out_1.8s_forwards]">
        <HeroParallaxDemo />
      </div>
    </div>
  )
}

export default Projetos