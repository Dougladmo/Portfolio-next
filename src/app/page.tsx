import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import Transition from "@/components/Transition";

export default function Home() {
  return (
    <>
      <Transition />
      <main className="flex-1 w-full flex flex-col items-center justify-center overflow-hidden relative bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] pb-32 md:pb-20">

        {/* Background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="z-10 flex flex-col md:flex-row items-center text-center md:text-left gap-3 md:gap-12 relative max-w-7xl mx-auto px-4 w-full h-full justify-center py-8">

          {/* Left Content - Text and CTA */}
          <div className="flex flex-col gap-3 md:gap-6 flex-1 order-2 md:order-1">
            {/* Top Text Group */}
            <div className="space-y-1 md:space-y-2 animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-oswald tracking-tighter text-white drop-shadow-2xl">
                DOUGLAS
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                  OLIVEIRA
                </span>
              </h1>
            </div>

            {/* Bottom Content */}
            <div className="space-y-3 md:space-y-4 animate-fade-in-up delay-200">
              <h2 className="text-sm md:text-lg font-light text-gray-400 tracking-wide">
                Full Stack Developer & UI/UX Enthusiast
              </h2>

              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 md:justify-start justify-center items-center">
                <a
                  href="/projects"
                  className="group relative px-5 py-2 md:px-8 md:py-3 bg-white text-black font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] text-xs md:text-base"
                >
                  <span className="relative z-10">Ver Projetos</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity blur-md" />
                </a>

                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 md:px-8 md:py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-all hover:scale-105 backdrop-blur-sm text-xs md:text-base"
                >
                  Entre em contato
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Interaction */}
          <div className="relative flex justify-center py-1 scale-[0.7] md:scale-100 origin-center order-1 md:order-2">
            <div className="relative p-2 border border-white/10 bg-white/5 rounded-lg backdrop-blur-sm shadow-2xl">
              <div className="relative w-[240px] h-[240px] md:w-[380px] md:h-[380px] overflow-hidden rounded-md bg-black/50">
                <PixelatedCanvas
                  src="/insta_foto.jpg"
                  width={400}
                  height={400}
                  cellSize={3}
                  dotScale={0.9}
                  shape="square"
                  backgroundColor="#000000"
                  dropoutStrength={0.4}
                  interactive
                  distortionStrength={3}
                  distortionRadius={80}
                  distortionMode="swirl"
                  followSpeed={0.2}
                  jitterStrength={4}
                  jitterSpeed={4}
                  sampleAverage
                  tintColor="#FFFFFF"
                  tintStrength={0.2}
                  className="rounded-xl border border-neutral-800 shadow-lg"
                />
              </div>
            </div>
            {/* Decorative corners */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-blue-500/50" />
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-purple-500/50" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-blue-500/50" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-purple-500/50" />
          </div>
        </div>

      </main>
    </>
  );
}
