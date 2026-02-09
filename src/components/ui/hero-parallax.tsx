"use client";
import React from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import { useLanguage } from "@/components/LanguageContext";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@/components/ui/animated-modal";
import { FloatingDock } from "@/components/ui/floating-dock";
import { getTechIcon } from "@/utils/tech-icons";

export interface Product {
  title: string;
  link: string;
  thumbnail: string;
  description: string;
  stack: string[];
  category: string;
  images?: string[];
}

export const HeroParallax = ({
  products,
}: {
  products: Product[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <div className="relative bottom-10 md:bottom-32">
        <h1 className="uppercase text-5xl text-center md:text-left md:text-6xl font-bold dark:text-white">
          {t.projects.heroLine1} <br /> {t.projects.heroLine2} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">{t.projects.heroHighlight}</span>
        </h1>
        <p className="max-w-2xl text-lg text-center md:text-left md:text-xl mt-8 dark:text-neutral-200">
          {t.projects.heroDescription}
        </p>
        <p className="max-w-2xl text-base text-center md:text-left md:text-lg mt-4 dark:text-neutral-400">
          {t.projects.heroSubDescription}
        </p>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: Product;
  translate: MotionValue<number>;
}) => {
  // Preparar dados para FloatingDock (modal)
  const dockItems = product.stack.map((tech) => {
    const IconComponent = getTechIcon(tech);
    return {
      title: tech,
      icon: <IconComponent className="w-full h-full" />,
      href: "#",
    };
  });

  // Usar images do produto ou fallback para thumbnail
  const projectImages = product.images || [product.thumbnail];

  return (
    <Modal>
      <ModalTrigger>
        <motion.div
          style={{
            x: translate,
          }}
          whileHover={{
            y: -20,
          }}
          key={product.title}
          className="group/product h-96 w-[30rem] relative shrink-0"
        >
          <div className="block group-hover/product:shadow-2xl">
            <Image
              src={product.thumbnail}
              height={600}
              width={600}
              className="object-cover object-left-top absolute h-full w-full inset-0"
              alt={product.title}
            />
          </div>
          <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
          <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
            {product.title}
          </h2>
        </motion.div>
      </ModalTrigger>

      <ModalBody>
        <ModalContent>
          {/* Título */}
          <h4 className="text-4xl md:text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            {product.title}
          </h4>

          {/* Categoria */}
          <p className="text-sm text-gray-300 mb-8 uppercase tracking-wider font-medium">{product.category}</p>

          {/* Grid de imagens estilo Aceternity */}
          <div className="flex justify-center items-center mb-8 flex-wrap gap-4">
            {projectImages.map((image, idx) => (
              <motion.div
                key={idx}
                style={{
                  rotate: Math.random() * 20 - 10,
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 0,
                  zIndex: 100,
                  transition: { duration: 0.2 }
                }}
                className="rounded-xl p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-white/20 backdrop-blur-sm shadow-2xl"
              >
                <Image
                  src={image}
                  alt={`${product.title} - imagem ${idx + 1}`}
                  width={400}
                  height={280}
                  className="rounded-lg object-cover w-full max-w-[400px] h-auto brightness-110 contrast-110"
                />
              </motion.div>
            ))}
          </div>

          {/* Descrição */}
          <p className="text-gray-200 text-lg leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Tech Stack com FloatingDock */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <h5 className="text-sm font-bold mb-5 text-gray-300 uppercase tracking-widest text-center">
              Stack Tecnológica
            </h5>
            <div className="flex items-center justify-center">
              <FloatingDock items={dockItems} />
            </div>
          </div>

          {/* Footer com link do projeto (se disponível) */}
          {product.link && product.link !== "#" && (
            <ModalFooter>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Ver Projeto
              </a>
            </ModalFooter>
          )}
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};
