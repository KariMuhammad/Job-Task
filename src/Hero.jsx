import { useState } from "react";
import Container from "./common/Container";
import Header from "./Header";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Container className="relative z-10 h-screen">
        <Header />
      </Container>

      {/* Background Section */}
      <section 
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* SVG Filter Definition */}
        <svg width="0" height="0" style={{ position: "absolute" }} key={isHovered ? "active" : "inactive"}>
          <defs>
            <filter id="liquidDistortion" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.01"
                numOctaves="4"
                result="turbulence"
              >
                <animate
                  attributeName="baseFrequency"
                  values="0.01;0.05;0.01"
                  dur="3s"
                  repeatCount="indefinite"
                  begin={isHovered ? "0s" : "indefinite"}
                />
              </feTurbulence>
              <feDisplacementMap
                in="SourceGraphic"
                in2="turbulence"
                scale={isHovered ? "20" : "0"}
                xChannelSelector="R"
                yChannelSelector="G"
              >
                <animate
                  attributeName="scale"
                  values="20;50;20"
                  dur="3s"
                  repeatCount="indefinite"
                  begin={isHovered ? "0s" : "indefinite"}
                />
              </feDisplacementMap>
            </filter>
          </defs>
        </svg>

        <img
          src="./src/assets/hero-banner.png"
          alt="Hero Banner"
          className="w-full h-full object-cover"
          style={{ filter: "url(#liquidDistortion)" }}
        />

        {/* Overlay */}
        <section className="absolute inset-0 bg-black/50 pointer-events-none" />

        {/* Button */}
        <button className="cursor-pointer hover:border-2 absolute top-2/3 left-1/2 -translate-x-1/2 text-white text-md backdrop-blur-3xl bg-white/10 rounded-md px-6 py-4 tracking-[0.2rem] z-10">
          Shaping the future of visual Communication
        </button>
      </section>
    </>
  );
}
