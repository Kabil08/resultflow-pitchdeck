import { motion } from "framer-motion";
import {
  FaVideo,
  FaLeaf,
  FaHome,
  FaTshirt,
  FaHeartbeat,
  FaRunning,
  FaMobileAlt,
  FaRobot,
} from "react-icons/fa";

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero stays on first screen */}
      <HeroSection />

      <ChosenBySection />

      <AboutUsSection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="h-screen w-screen relative bg-[#0a0a16]">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* Animated White Balls on Grid */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => {
          const row = Math.floor(i / 5);
          const col = i % 5;
          const delay = (i * 2.5) % 12; // Slower delays, spread over 12 seconds
          const duration = 2 + (i % 3) * 0.5; // Vary duration between 2-3.5s
          // Use deterministic offsets based on index for consistent positioning
          const offsetX = ((i * 7) % 11) - 5; // -5 to 5 range
          const offsetY = ((i * 13) % 11) - 5; // -5 to 5 range

          return (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                left: `${col * 20 + 10 + offsetX}%`,
                top: `${row * 15 + 10 + offsetY}%`,
                width: "4px",
                height: "4px",
                animation: `ballPop ${duration}s ease-in-out infinite`,
                animationDelay: `${delay}s`,
                opacity: 0,
              }}
            />
          );
        })}
      </div>

      {/* Comet Flying Horizontally from Left to Right (Sperm-like) */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 5 }}
      >
        <div
          className="absolute"
          style={{
            top: "50%",
            left: "-120px",
            width: "120px",
            height: "5px",
            transform: "translateY(-50%)",
            transformOrigin: "right center",
            animation: "cometFlyHorizontal 8s linear infinite",
          }}
        >
          {/* Sperm-like Tail - Thick at head, thin at end */}
          <div
            className="absolute h-full"
            style={{
              width: "112px",
              left: "0",
              background:
                "linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.1) 15%, rgba(255, 255, 255, 0.3) 30%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.7) 70%, rgba(255, 255, 255, 0.9) 85%, rgba(255, 255, 255, 0.95) 100%)",
              clipPath: "polygon(0% 50%, 100% 0%, 100% 100%)",
            }}
          />
          {/* Thick Comet Head (Sperm head) - Leading */}
          <div
            className="absolute rounded-full bg-white"
            style={{
              left: "112px",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "8px",
              height: "8px",
              boxShadow:
                "0 0 10px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 0.7), 0 0 30px rgba(255, 255, 255, 0.3)",
            }}
          />
        </div>
      </div>

      {/* Ball Pop Animation */}
      <style>{`
        @keyframes ballPop {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          20% {
            opacity: 1;
            transform: scale(1.2);
          }
          40% {
            opacity: 0.8;
            transform: scale(1);
          }
          60% {
            opacity: 0.6;
            transform: scale(0.9);
          }
          80% {
            opacity: 0.3;
            transform: scale(0.7);
          }
          100% {
            opacity: 0;
            transform: scale(0);
          }
        }
        
        @keyframes cometFlyHorizontal {
          0% {
            transform: translateY(-50%) translateX(-120px);
            opacity: 0;
          }
          3% {
            opacity: 1;
          }
          97% {
            opacity: 1;
          }
          100% {
            transform: translateY(-50%) translateX(calc(100vw + 120px));
            opacity: 0;
          }
        }
      `}</style>

      {/* Starfield Dots - Reduced opacity for cleaner look */}
      <div className="absolute inset-0">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2}px`,
              height: `${Math.random() * 2}px`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
          />
        ))}
      </div>

      {/* Large Semi-Ring with Glowing Lights */}
      <div
        className="absolute bottom-0 left-0 right-0 w-full"
        style={{ height: "22vh", zIndex: 1, overflow: "visible" }}
      >
        {/* Atmospheric Blend Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-[#0a0a16] via-[#1e1b4b]/50 to-transparent pointer-events-none"></div>

        {/* The Glow behind the ring */}
        <div className="relative w-full h-full" style={{ overflow: "visible" }}>
          {/* Main Ring Arc */}
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1000 300"
            preserveAspectRatio="none"
            style={{ height: "100%", overflow: "visible" }}
          >
            <defs>
              <linearGradient id="ringFill" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" />
                <stop offset="50%" stopColor="rgba(126, 34, 206, 0.5)" />
                <stop offset="100%" stopColor="rgba(88, 28, 135, 0.8)" />
              </linearGradient>
              <linearGradient
                id="ringGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
                <stop offset="10%" stopColor="rgba(139, 92, 246, 0.25)" />
                <stop offset="30%" stopColor="rgba(168, 85, 247, 0.6)" />
                <stop offset="70%" stopColor="rgba(168, 85, 247, 0.6)" />
                <stop offset="90%" stopColor="rgba(139, 92, 246, 0.25)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
              </linearGradient>
              <filter
                id="ring-blur"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <linearGradient id="upwardGlow" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="rgba(168, 85, 247, 0.15)" />
                <stop offset="20%" stopColor="rgba(168, 85, 247, 0.08)" />
                <stop offset="40%" stopColor="rgba(139, 92, 246, 0.04)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
              </linearGradient>
              <filter
                id="upward-glow-blur"
                x="-50%"
                y="-400%"
                width="200%"
                height="600%"
              >
                <feGaussianBlur stdDeviation="100" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <clipPath id="ringClip">
                <path d="M 0,0 Q 500,300 1000,0 L 1000,-400 L 0,-400 Z" />
              </clipPath>
            </defs>

            {/* Upward Glow Effect - Light, blurred, glass-like, clipped to ring */}
            <g clipPath="url(#ringClip)">
              <path
                d="M 0,0 Q 500,300 1000,0"
                stroke="url(#upwardGlow)"
                strokeWidth="300"
                fill="none"
                className="opacity-60"
                filter="url(#upward-glow-blur)"
                transform="translate(0, -150)"
              />
            </g>

            {/* The solid curve - Flipped to be a "U" shape / Valley, spanning full width */}
            <path
              d="M 0,0 Q 500,300 1000,0"
              stroke="url(#ringGradient)"
              strokeWidth="42"
              fill="none"
              className="opacity-70"
              filter="url(#ring-blur)"
            />
          </svg>
        </div>
      </div>

      {/* Header */}
      <motion.header
        className="absolute top-0 left-0 right-0 z-20 px-8 md:px-16 py-6 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-2">
          {/* Logo Icon */}
          <img
            src="/Gemini_Generated_Image_gmuivpgmuivpgmui-removebg-preview.png"
            alt="Result Flow Logo"
            className="w-8 h-8 object-contain"
            style={{ filter: "invert(1)" }}
          />
          <span className="text-white text-xl font-semibold tracking-tight">
            Result Flow
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Feature", "Use Cases", "Integrations", "Pricing Plan"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
              >
                {item}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 text-white cursor-pointer hover:text-gray-300 transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <span className="text-sm font-medium">EN</span>
          </div>
          <button className="bg-white text-black hover:bg-gray-100 px-5 py-2 rounded-full font-medium text-sm transition-all">
            Start for free
          </button>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 md:px-16 max-w-screen-2xl mx-auto pt-20">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="text-white text-sm font-medium">
            Vertical Agentic AI for Retail
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl text-center text-white mb-8 leading-[1.1] tracking-tight"
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontWeight: 600,
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          The retail-native
          <br />
          <span className="text-gray-400">Agentic Commerce platform</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 text-center max-w-2xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Instant visibility into every customer interaction, conversion
          opportunity, and revenue driver—without ever leaving your e-commerce
          platform.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <button className="bg-white text-black hover:bg-gray-100 py-3 px-8 rounded-full font-semibold text-lg transition-all min-w-[160px]">
            Get Started
          </button>
          <button className="bg-white/5 hover:bg-white/10 text-white py-3 px-8 rounded-full font-semibold text-lg transition-all border border-white/10 min-w-[160px]">
            View More
          </button>
        </motion.div>
      </div>
    </div>
  );
};

const ChosenBySection = () => {
  const companies = [
    {
      name: "Telehealth",
      logo: <FaVideo className="text-white opacity-95" size={32} />,
    },
    {
      name: "Skincare",
      logo: <FaLeaf className="text-white opacity-95" size={32} />,
    },
    {
      name: "Home Décor",
      logo: <FaHome className="text-white opacity-95" size={32} />,
    },
    {
      name: "Fashion",
      logo: <FaTshirt className="text-white opacity-95" size={32} />,
    },
    {
      name: "Healthcare Diagnostics",
      logo: <FaHeartbeat className="text-white opacity-95" size={32} />,
    },
    {
      name: "Performance Apparel",
      logo: <FaRunning className="text-white opacity-95" size={32} />,
    },
    {
      name: "Global Consumer Electronics",
      logo: <FaMobileAlt className="text-white opacity-95" size={32} />,
    },
  ];

  return (
    <div
      className="w-full py-2 pb-20 px-8 md:px-16 relative overflow-hidden bg-[#0a0a16]"
      // style={{
      //   background:
      //     "linear-gradient(to bottom, #0a0a16 0%, #1a1a3e 30%, #0a0a16 100%)",
      // }}
    >
      {/* Gradient overlay at top to blend with hero section */}
      {/* <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[30vh] bg-purple-600/40 blur-[120px] rounded-full pointer-events-none"
        style={{ zIndex: 0, transform: "translate(-50%, -50%)" }}
      ></div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-xl md:text-xl lg:text-2xl text-center text-white mb-12 md:mb-16 font-medium tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by leading global retail, healthcare, lifestyle, and
          electronics brands
        </motion.h2>

        {/* Company Logos - Marquee */}
        <div className="relative w-full overflow-hidden">
          {/* Blur gradients on left and right */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a16] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a16] to-transparent z-10 pointer-events-none"></div>

          <div className="flex items-center gap-12 md:gap-16 lg:gap-20 animate-marquee">
            {/* First set */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center gap-3 flex-shrink-0"
              >
                <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
                  {company.logo}
                </div>
                <span className="text-white text-sm md:text-base font-medium opacity-90 whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center gap-3 flex-shrink-0"
              >
                <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
                  {company.logo}
                </div>
                <span className="text-white text-sm md:text-base font-medium opacity-90 whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

const AboutUsSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Kal Raman",
      role: "Founder & CEO",
      bio: "Amazon S-Team, Samsung CDO, Groupon COO, multiple exits.",
      image: "/team/kal.png",
    },
    {
      id: 2,
      name: "Rick Dalzell",
      role: "Advisor",
      bio: "Former Senior Vice President at Amazon, instrumental in building Amazon's technology and operations platform.",
      image: "/team/rick.png",
    },
    {
      id: 3,
      name: "Peter Neupert",
      role: "Advisor",
      bio: "The former Corporate Vice President of Microsoft currently chairs or advises companies like Fortrea, LabCorp, and Adaptive Biotechnologies",
      image: "/team/peter.png",
    },
    {
      id: 4,
      name: "Jason Child",
      role: "Advisor",
      bio: "Executive Vice President and Chief Financial Officer of Arm, known for scaling high‑growth tech companies and leading major finance and IPO efforts at firms like Amazon, Groupon, Splunk, and Opendoor",
      image: "/team/jason.png",
    },
    {
      id: 5,
      name: "William Kim",
      role: "Advisor",
      bio: "CEO of Shinsegae International, noted executive with major roles in consumer retail and brand management.",
      image: "/team/kim.png",
    },
  ];

  return (
    <div className="w-full py-20 md:py-32 px-8 md:px-16 relative overflow-hidden bg-[#0a0a16]">
      {/* SVG Definitions for Alternating Chamfered Rectangle ClipPaths with Rounded Corners */}
      <svg width="0" height="0" className="absolute">
        <defs>
          {/* Chamfered Left (Top-Left & Bottom-Right cut) */}
          <clipPath id="roundedHexagonLeft" clipPathUnits="objectBoundingBox">
            <path d="M 0 0.3 Q 0 0.28 0.02 0.26 L 0.26 0.02 Q 0.28 0 0.3 0 L 0.92 0 Q 1 0 1 0.08 L 1 0.7 Q 1 0.72 0.98 0.74 L 0.74 0.98 Q 0.72 1 0.7 1 L 0.08 1 Q 0 1 0 0.92 Z" />
          </clipPath>
          {/* Chamfered Right (Top-Right & Bottom-Left cut) */}
          <clipPath id="roundedHexagonRight" clipPathUnits="objectBoundingBox">
            <path d="M 0 0.08 Q 0 0 0.08 0 L 0.7 0 Q 0.72 0 0.74 0.02 L 0.98 0.26 Q 1 0.28 1 0.3 L 1 0.92 Q 1 1 0.92 1 L 0.3 1 Q 0.28 1 0.26 0.98 L 0.02 0.74 Q 0 0.72 0 0.7 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl text-center text-white mb-4 font-semibold tracking-tight pb-24"
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Backed by <span className="text-purple-500">Amazon S Team</span> Leaders
        </motion.h2>

     
        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="flex flex-col items-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image Container - Alternating Rounded Hexagonal Frame */}
              <div
                className="relative w-[240px] h-[240px] mx-auto mb-6 overflow-hidden bg-white"
                style={{
                  clipPath:
                    index % 2 === 0
                      ? "url(#roundedHexagonLeft)"
                      : "url(#roundedHexagonRight)",
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 ease-in-out"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* Name */}
              <h3 className="text-xl md:text-2xl text-white font-bold mb-1 text-center">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-sm md:text-base text-purple-400 font-medium text-center mb-3">
                {member.role}
              </p>

              {/* Bio */}
              <p className="text-xs md:text-sm text-gray-400 text-center leading-relaxed px-2 max-h-0 opacity-0 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
