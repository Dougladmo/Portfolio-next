"use client";
import { Oswald } from "next/font/google";
import { CometCard } from "@/components/ui/comet-card";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { useLanguage } from "@/components/LanguageContext";

const oswald = Oswald({ subsets: ["latin"] });

export default function Experience() {
  const { t } = useLanguage();

  return (
    <>
      <main className="w-full flex min-h-screen overflow-hidden relative">
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-8 md:py-16 pb-32 md:pb-20">

          {/* Page Title */}
          <div className="mb-12 md:mb-16 text-center">
            <h1 className={`${oswald.className} text-3xl sm:text-4xl md:text-5xl lg:text-7xl flex justify-center font-bold text-white tracking-tighter mb-4`}>
              <PointerHighlight>{t.experience.headingPrefix}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">{t.experience.headingHighlight}</span></PointerHighlight>
            </h1>
            <p className="text-gray-400 text-base md:text-lg lg:text-xl px-4">{t.experience.subtitle}</p>
          </div>

          {/* Experience Timeline Section */}
          <div className="mb-16 md:mb-20">
            <h2 className={`${oswald.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-12 flex items-center gap-3`}>
              <div className="h-1 w-8 md:w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              {t.experience.professionalTitle}
            </h2>

            <div className="relative border-l-2 border-white/10 space-y-8 md:space-y-12 ml-4">
              {t.experience.jobs.map((exp, index) => (
                <div key={index} className="mb-6 md:mb-8 ml-4 md:ml-6 relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[23px] md:-left-[27px] w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full border-2 border-[#0a0a0a] group-hover:bg-purple-500 transition-colors duration-300" />

                  {/* Content Card */}
                  <div className="p-5 sm:p-6 md:p-8 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-[1.01] hover:bg-white/10 relative overflow-hidden shadow-2xl">

                    {/* Glowing border effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Decorative corners */}
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-purple-500/50 rounded-br-lg" />

                    <div className="flex flex-col gap-3 mb-4">
                      <div>
                        <h3 className={`${oswald.className} text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1`}>{exp.role}</h3>
                        <p className="text-blue-400 font-semibold text-base sm:text-lg md:text-xl">{exp.company}</p>
                        {exp.location && <p className="text-gray-500 text-xs sm:text-sm mt-1">{exp.location}</p>}
                      </div>
                      <span className="text-gray-400 text-xs sm:text-sm bg-white/5 px-3 py-1.5 rounded-full border border-white/10 w-fit">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                      {exp.description}
                    </p>

                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {exp.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start gap-3 text-gray-300 text-xs sm:text-sm">
                            <span className="text-blue-400 text-base sm:text-lg">▸</span>
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-xs font-medium text-gray-300 bg-white/10 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg border border-white/10 hover:bg-white/20 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-16 md:mb-20">
            <h2 className={`${oswald.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-12 flex items-center gap-3`}>
              <div className="h-1 w-8 md:w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              {t.experience.educationTitle}
            </h2>
            <div className="relative p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all duration-300 shadow-2xl">
              {/* Decorative corners */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-purple-500/50 rounded-br-lg" />

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-white font-bold text-xl md:text-2xl mb-2">{t.experience.education.degree}</p>
                  <p className="text-blue-400 font-semibold text-lg md:text-xl">{t.experience.education.university}</p>
                  <p className="text-gray-400 text-sm md:text-base mt-2">{t.experience.education.location}</p>
                </div>
                <div className="text-gray-400 text-xs sm:text-sm bg-white/5 px-4 py-2 rounded-full border border-white/10 w-fit whitespace-nowrap">
                  {t.experience.education.period}
                </div>
              </div>
            </div>
          </div>

          {/* Cursos e Certificações */}
          <div className="pb-8 md:pb-24">
            <h2 className={`${oswald.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-12 flex items-center gap-3`}>
              <div className="h-1 w-8 md:w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              {t.experience.certificationsTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {t.experience.certifications.map((cert, index) => (
                <CometCard key={index} rotateDepth={12} translateDepth={12}>
                  <div className="relative p-5 md:p-6 bg-[#1F2121] border-0 rounded-2xl h-full min-h-[140px] flex flex-col justify-between">
                    <div>
                      <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4" />
                      <p className="text-white font-semibold text-base md:text-lg mb-2">{cert.title}</p>
                      <p className="text-gray-400 text-sm md:text-base mb-1">{cert.institution}</p>
                      <p className="text-gray-500 text-xs sm:text-sm">{cert.date}</p>
                    </div>
                    {cert.tags && cert.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {cert.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-xs text-gray-400 bg-white/5 px-2 py-0.5 rounded">{tag}</span>
                        ))}
                      </div>
                    )}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-purple-500/40 rounded-tl-lg pointer-events-none" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-pink-500/40 rounded-br-lg pointer-events-none" />
                  </div>
                </CometCard>
              ))}
            </div>
          </div>

        </div>
      </main>

    </>
  );
}
