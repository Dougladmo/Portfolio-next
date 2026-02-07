import Transition from "@/components/Transition"
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo"

const Projetos = () => {
  return (
    <div className="text-white min-h-screen">
      <Transition />
      <div className="pt-20 pb-32 md:pb-40 opacity-0 animate-[fadeIn_0.5s_ease-in-out_1.8s_forwards]">
        <HeroParallaxDemo />
      </div>
    </div>
  )
}

export default Projetos