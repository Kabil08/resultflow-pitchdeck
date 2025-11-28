import { motion } from "framer-motion";
import {
  FaVideo,
  FaLeaf,
  FaHome,
  FaTshirt,
  FaHeartbeat,
  FaRunning,
  FaMobileAlt,
} from "react-icons/fa";

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero stays on first screen */}
      <HeroSection />

      <ChosenBySection />

      <AboutUsSection />
      <BrandsStatsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <LanternEngineSection />
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

const BrandsStatsSection = () => {
  return (
    <div className="min-h-screen w-full px-8 md:px-16 py-16 max-w-screen-2xl mx-auto flex flex-col justify-between">
      {/* Brands Section */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-400 text-center text-sm mb-12">
          Chosen by over 9000 leading global brands and organizations
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {/* Logo placeholders - using text for now */}
          <div className="flex items-center gap-3 text-white text-xl font-semibold opacity-70 hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 rounded-full border-2 border-white"></div>
            Spherule
          </div>
          <div className="flex items-center gap-3 text-white text-xl font-semibold opacity-70 hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-white/10"></div>
            Nietzsche
          </div>
          <div className="flex items-center gap-3 text-white text-xl font-semibold opacity-70 hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 rounded-full border-2 border-white"></div>
            Interlock
          </div>
          <div className="flex items-center gap-3 text-white text-xl font-semibold opacity-70 hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 bg-white/10" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}></div>
            Acme Corp
          </div>
          <div className="flex items-center gap-3 text-white text-xl font-semibold opacity-70 hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 bg-white/10" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}></div>
            Biosynthesis
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        {/* Left Side - Heading and Description */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1 bg-purple-900/30 border border-purple-500/30 rounded-full text-purple-300 text-xs font-medium mb-6">
            THE ROAD WE'VE TRAVELED
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontWeight: 600,
            }}
          >
            Building Smarter Connections Through{" "}
            <span className="text-purple-400">Innovative AI Agents</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            We create intelligent solutions that empower businesses, enhance user
            experiences, and drive lasting digital transformation worldwide.
          </p>
          <button className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all">
            Get Started
          </button>
        </motion.div>

        {/* Right Side - Stats */}
        <motion.div
          className="space-y-12 lg:col-span-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Stat 1 */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-purple-500/30"></div>
            <p className="text-6xl md:text-7xl font-bold text-white mb-2">2X</p>
            <p className="text-gray-400 text-sm">conversion rate.</p>
          </div>

          {/* Stat 2 */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-green-500/30"></div>
            <p className="text-6xl md:text-7xl font-bold text-violet-400 mb-2">2X</p>
            <p className="text-gray-400 text-sm">cart recovery.</p>
          </div>

          {/* Stat 3 */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-purple-500/30"></div>
            <p className="text-6xl md:text-7xl font-bold text-white mb-2">25%</p>
            <p className="text-gray-400 text-sm">fewer abandoned carts.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <div className="min-h-screen w-full px-8 md:px-16 py-16 max-w-screen-2xl mx-auto flex flex-col justify-between">
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="inline-block px-4 py-1 bg-purple-900/30 border border-purple-500/30 rounded-full text-purple-300 text-xs font-medium mb-6">
          FEATURE
        </div>
        <h2
          className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight max-w-4xl mx-auto"
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontWeight: 600,
          }}
        >
          Empowering Every Website{" "}
          <span className="text-gray-400">With Smarter AI Features</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Unlock seamless automation, real-time support, and personalized digital
          experiences designed to transform how users interact and connect.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Feature 1 - Autonomous Task Execution */}
        <motion.div
          className="bg-white/5 border border-white/10 p-8 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-3">
            Autonomous Task Execution
          </h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Aivora can seamlessly perform complex multi-step tasks without requiring any manual intervention, intelligently
            following predefined goals and adapting to various scenarios.
          </p>
          {/* Visual representation */}
          <div className="relative h-64 bg-black/30 rounded-xl p-6 overflow-hidden">
            <div className="flex items-center justify-between h-full gap-6 relative">
              {/* Task 1 - Left Side */}
              <div className="flex-1 h-full z-10">
                <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-4 h-full flex flex-col justify-center">
                  <div className="text-sm text-gray-400 mb-3">Task 1</div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-700 rounded-full w-full"></div>
                    <div className="h-3 bg-gray-700 rounded-full w-2/3"></div>
                    <div className="h-3 bg-gray-600 rounded-full w-1/2"></div>
                  </div>
                </div>
              </div>

              {/* Connecting Line - Task 1 to Green Icon */}
              <div className="absolute left-[calc(33.33%+0.5rem)] top-1/2 w-12 h-0.5 bg-gradient-to-r from-purple-500/60 to-purple-500/30 -translate-y-1/2 z-0"></div>

              {/* Green Icon - Center */}
              <div className="flex-shrink-0 z-10 relative">
                <div className="w-16 h-16 bg-green-500/20 border-2 border-green-500/50 rounded-full flex items-center justify-center relative overflow-visible">
                  {/* Center circle */}
                  <div className="w-6 h-6 bg-green-400 rounded-full absolute"></div>

                  {/* Orbiting elements */}
                  {[0, 1, 2, 3].map((i) => {
                    const angle = (i * 90);
                    const radius = 20;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    return (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-green-300 rounded-full"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          transform: 'translate(-50%, -50%)',
                          animation: `orbit ${2 + i * 0.5}s linear infinite`,
                          animationDelay: `${i * 0.25}s`,
                        }}
                      ></div>
                    );
                  })}

                  {/* Rotating outer ring */}
                  <svg className="absolute w-16 h-16 animate-spin" style={{ animationDuration: '8s' }}>
                    <circle
                      cx="32"
                      cy="32"
                      r="26"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      className="text-violet-400/30"
                    />
                  </svg>
                </div>

                {/* Animation keyframes */}
                <style>{`
                  @keyframes orbit {
                    0% {
                      transform: translate(-50%, -50%) scale(1);
                      opacity: 1;
                    }
                    50% {
                      transform: translate(-50%, -50%) scale(1.5);
                      opacity: 0.5;
                    }
                    100% {
                      transform: translate(-50%, -50%) scale(1);
                      opacity: 1;
                    }
                  }
                `}</style>
              </div>

              {/* Connecting Lines - Green Icon to Task 2 and Task 3 */}
              <div className="absolute left-[50%] top-[calc(30%-0.25rem)] w-16 h-0.5 bg-gradient-to-r from-purple-500/30 to-purple-500/60 z-0"></div>
              <div className="absolute left-[50%] top-[calc(70%-0.25rem)] w-16 h-0.5 bg-gradient-to-r from-purple-500/30 to-purple-500/60 z-0"></div>

              {/* Task 2 and Task 3 - Right Side Stacked */}
              <div className="flex-1 h-full flex flex-col gap-3 z-10">
                {/* Task 2 */}
                <div className="flex-1 bg-purple-900/20 border border-purple-500/20 rounded-xl p-4">
                  <div className="text-sm text-gray-400 mb-2">Task 2</div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-700 rounded-full w-full"></div>
                    <div className="h-2 bg-gray-700 rounded-full w-3/4"></div>
                  </div>
                </div>

                {/* Task 3 */}
                <div className="flex-1 bg-purple-900/20 border border-purple-500/20 rounded-xl p-4">
                  <div className="text-sm text-gray-500 mb-2">Task 3</div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-800 rounded-full w-5/6"></div>
                    <div className="h-2 bg-gray-800 rounded-full w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature 2 - Multi-Agent Collaboration */}
        <motion.div
          className="bg-white/5 border border-white/10 p-8 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-3">
            Multi-Agent Collaboration
          </h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Multiple AI agents working together seamlessly to complete interconnected
            workflows and deliver better outcomes.
          </p>
          {/* Visual representation - network of avatars */}
          <div className="relative h-48 bg-black/30 rounded-xl p-6 flex flex-col justify-center gap-8 overflow-hidden">
            {/* Connecting lines */}
            <div className="absolute inset-0 pointer-events-none">
               {/* Horizontal line top */}
               <div className="absolute top-[35%] left-[25%] right-[25%] h-px bg-purple-500/30"></div>
               {/* Horizontal line bottom */}
               <div className="absolute top-[65%] left-[15%] right-[15%] h-px bg-purple-500/30"></div>
               {/* Vertical connection */}
               <div className="absolute top-[35%] bottom-[35%] left-1/2 w-px bg-purple-500/30"></div>
            </div>

            {/* Top Row */}
            <div className="flex justify-center gap-12 relative z-10">
              {[0, 1, 2].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/80 to-indigo-600/80 border-2 border-purple-400/30 flex items-center justify-center shadow-lg shadow-purple-500/20">
                   <div className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm"></div>
                </div>
              ))}
            </div>

            {/* Bottom Row */}
            <div className="flex justify-center gap-8 relative z-10">
               {[0, 1, 2, 3].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600/80 to-purple-500/80 border-2 border-purple-400/30 flex items-center justify-center shadow-lg shadow-purple-500/20">
                   <div className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm"></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Feature 3 - Analytics & Insights */}
        <motion.div
          className="bg-white/5 border border-white/10 p-8 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-3">
            Analytics & Insights
          </h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Gain actionable insights through AI-driven analytics that empower smarter
            decisions and continuous improvements.
          </p>
          {/* Visual representation - bar chart */}
          <div className="relative h-48 bg-black/30 rounded-xl p-6 flex items-end justify-around gap-3">
            {[30, 45, 60, 75, 50, 65, 40].map((height, i) => (
              <div
                key={i}
                className={`flex-1 rounded ${
                  i === 2 || i === 3 ? 'bg-gray-600' : 'bg-gray-800'
                }`}
                style={{
                  height: `${height}%`,
                  maxWidth: '40px',
                }}
              ></div>
            ))}
          </div>
        </motion.div>

        {/* Feature 4 - Workflow Automation */}
        <motion.div
          className="bg-white/5 border border-white/10 p-8 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-3">
            Workflow Automation
          </h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Gain actionable insights through AI-driven analytics that empower smarter
            decisions and continuous improvements.
          </p>
          {/* Visual representation - workflow list */}
          <div className="relative h-48 bg-black/30 rounded-xl p-8 flex flex-col justify-center">
            <div className="relative z-10 space-y-8">
              {/* Item 1 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="h-2 bg-gray-700 rounded-full w-3/4"></div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-500/10 border border-purple-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="h-2 bg-gray-800 rounded-full w-2/3"></div>
                  <div className="h-2 bg-gray-800 rounded-full w-full"></div>
                </div>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="absolute left-[calc(2rem+1.25rem)] top-12 bottom-12 w-0.5 bg-gray-800 -translate-x-1/2 z-0"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const HowItWorksSection = () => {
  return (
    <div className="min-h-screen w-full px-8 md:px-16 py-16 max-w-screen-2xl mx-auto flex flex-col justify-center">
      {/* Section Header */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="inline-block px-4 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 text-xs font-medium mb-6 tracking-wider">
          YOUR MARKETING RUNS ITSELF
        </div>
        <h2
          className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontWeight: 600,
          }}
        >
          <span className="text-violet-400">How</span> It Works
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 - Connect */}
        <motion.div
          className="bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1e] border border-white/10 p-8 rounded-3xl relative overflow-hidden group h-[500px] flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 mb-6">1</div>
            <h3 className="text-2xl text-white mb-3">
              <span className="text-violet-400">Connect</span> your stack
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lantern plugs into your CRM, MAP, and data tools
            </p>
          </div>

          {/* Visual - Funnel/Connection */}
          <div
            className="mt-auto relative h-64 w-full"
            style={{
              backgroundImage: 'url(https://res.cloudinary.com/dbtapyfau/image/upload/v1764346679/Screenshot_2025-11-28_at_9.47.36_PM_kkrfym.png)',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
          </div>
        </motion.div>

        {/* Card 2 - Deploy */}
        <motion.div
          className="bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1e] border border-white/10 p-8 rounded-3xl relative overflow-hidden group h-[500px] flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 mb-6">2</div>
            <h3 className="text-2xl text-white mb-3">
              <span className="text-violet-400">Deploy</span> your agents
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Choose the right agents based on your goals
            </p>
          </div>

          {/* Visual - Rocket */}
          <div
            className="mt-auto relative h-64 w-full"
            style={{
              backgroundImage: 'url(https://res.cloudinary.com/dbtapyfau/image/upload/v1764346679/Screenshot_2025-11-28_at_9.47.16_PM_gdoh08.png)',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
          </div>
        </motion.div>

        {/* Card 3 - Create */}
        <motion.div
          className="bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1e] border border-white/10 p-8 rounded-3xl relative overflow-hidden group h-[500px] flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 mb-6">3</div>
            <h3 className="text-2xl text-white mb-3">
              Boost your <span className="text-violet-400">sales</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              While AI handles the execution, you focus on strategy
            </p>
          </div>

          {/* Visual - Dashboard */}
          <div
            className="mt-auto relative h-64 w-full"
            style={{
              backgroundImage: 'url(https://res.cloudinary.com/dbtapyfau/image/upload/v1764346679/Screenshot_2025-11-28_at_9.47.28_PM_evyact.png)',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const LanternEngineSection = () => {
  return (
    <div className="min-h-screen w-full px-8 md:px-16 py-16 max-w-screen-2xl mx-auto flex flex-col justify-center">
      {/* Section Header */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontWeight: 600,
          }}
        >
          Lantern <span className="text-violet-400">Engine</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
          From data collection to revenue generation, our three-layer architecture turns signals into sales
        </p>
      </motion.div>

      {/* Engine Diagram Container */}
      <motion.div
        className="w-full bg-[#131320] border border-white/5 rounded-3xl p-8 md:p-12 relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">

          {/* Column 1: Data Layer */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#1a1a2e] border border-white/5 rounded-2xl p-8 h-[400px] relative flex flex-col justify-center">
              {/* Connecting Lines Container */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Lines from items to right edge */}
                <path d="M180 100 L 1000 100" stroke="#4ade80" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                <path d="M220 170 L 1000 170" stroke="#4ade80" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                <path d="M180 240 L 1000 240" stroke="#4ade80" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                <path d="M220 310 L 1000 310" stroke="#4ade80" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="4 4" fill="none" />
              </svg>

              {/* Items */}
              <div className="space-y-8 relative z-10">
                {/* CRM - Left */}
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg w-32 backdrop-blur-sm">
                  <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-[10px]">🔗</div>
                  <span className="text-xs font-medium text-gray-300">CRM</span>
                </div>

                {/* P.DATA - Indented */}
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg w-32 ml-12 backdrop-blur-sm">
                  <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-[10px]">🔗</div>
                  <span className="text-xs font-medium text-gray-300">P.DATA</span>
                </div>

                {/* +30 TOOLS - Left */}
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg w-32 backdrop-blur-sm">
                  <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-[10px]">🔗</div>
                  <span className="text-xs font-medium text-gray-300">+30 TOOLS</span>
                </div>

                {/* SIGNALS - Indented */}
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg w-32 ml-12 backdrop-blur-sm">
                  <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-[10px]">🔗</div>
                  <span className="text-xs font-medium text-gray-300">SIGNALS</span>
                </div>
              </div>
            </div>

            {/* Footer Label */}
            <div className="px-6 py-3 bg-[#1a1a2e] border border-white/5 rounded-full flex items-center gap-3 w-full justify-center">
              <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs text-gray-400">1</div>
              <span className="text-sm text-violet-400 font-medium">Data layer</span>
            </div>
          </div>

          {/* Column 2: Orchestration Layer */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#1a1a2e] border border-white/5 rounded-2xl p-8 h-[400px] relative flex items-center justify-center">
              {/* Central Hub */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Center Square */}
                <div className="w-32 h-32 bg-[#131320] border border-white/10 rounded-2xl flex items-center justify-center z-20 shadow-2xl relative">
                  <span className="text-violet-400 font-semibold text-sm tracking-widest">SYMBOLS</span>
                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-green-500/5 rounded-2xl"></div>
                </div>

                {/* Surrounding Nodes */}
                <div className="absolute top-12 w-32 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center z-10">
                  <span className="text-[10px] font-medium text-gray-300 tracking-wider">SIGNAL</span>
                </div>
                <div className="absolute bottom-12 w-32 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center z-10">
                  <span className="text-[10px] font-medium text-gray-300 tracking-wider">SYNC</span>
                </div>
                <div className="absolute left-8 h-32 w-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center z-10">
                  <span className="text-[10px] font-medium text-gray-300 -rotate-90 tracking-wider whitespace-nowrap">WORKFLOWS</span>
                </div>
                <div className="absolute right-8 h-32 w-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center z-10">
                  <span className="text-[10px] font-medium text-gray-300 rotate-90 tracking-wider whitespace-nowrap">WATERFALLS DATA</span>
                </div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                   {/* Top connections */}
                   <path d="M100 80 L 100 130" stroke="white" strokeOpacity="0.2" strokeDasharray="4 4" />
                   <path d="M240 80 L 240 130" stroke="white" strokeOpacity="0.2" strokeDasharray="4 4" />
                   {/* Bottom connections */}
                   <path d="M100 270 L 100 320" stroke="white" strokeOpacity="0.2" strokeDasharray="4 4" />
                   <path d="M240 270 L 240 320" stroke="white" strokeOpacity="0.2" strokeDasharray="4 4" />
                </svg>
              </div>
            </div>

            {/* Footer Label */}
            <div className="px-6 py-3 bg-[#1a1a2e] border border-white/5 rounded-full flex items-center gap-3 w-full justify-center">
              <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs text-gray-400">2</div>
              <span className="text-sm text-violet-400 font-medium">Orchestration layer</span>
            </div>
          </div>

          {/* Column 3: Agent Layer */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#1a1a2e] border border-white/5 rounded-2xl p-8 h-[400px] relative flex flex-col justify-center">
              {/* Connecting Lines Container */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Incoming lines from left */}
                <path d="M0 100 L 120 100" stroke="#4ade80" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                <path d="M0 170 L 120 170" stroke="#4ade80" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                <path d="M0 240 L 120 240" stroke="#4ade80" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                <path d="M0 310 L 120 310" stroke="#4ade80" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="4 4" fill="none" />

                {/* Feedback Loops (Right side) */}
                {/* Attract -> Convert */}
                <path d="M260 100 C 300 100, 300 170, 260 170" stroke="#4ade80" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                {/* Convert -> Champion */}
                <path d="M260 170 C 320 170, 320 240, 260 240" stroke="#4ade80" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                {/* Champion -> Optimize */}
                <path d="M260 240 C 300 240, 300 310, 260 310" stroke="#4ade80" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                {/* Optimize -> Attract (Long loop) */}
                <path d="M260 310 C 340 310, 340 100, 260 100" stroke="#4ade80" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 4" fill="none" />
              </svg>

              {/* Items */}
              <div className="space-y-8 relative z-10 flex flex-col items-end pr-8">
                {/* ATTRACT */}
                <div className="flex items-center justify-between bg-white/5 border border-white/10 p-3 rounded-lg w-36 backdrop-blur-sm">
                  <span className="text-xs font-medium text-gray-300 pl-2">ATTRACT</span>
                  <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-[10px]">🔗</div>
                </div>

                {/* CONVERT */}
                <div className="flex items-center justify-between bg-white/5 border border-white/10 p-3 rounded-lg w-36 backdrop-blur-sm">
                  <span className="text-xs font-medium text-gray-300 pl-2">CONVERT</span>
                  <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-[10px]">🔄</div>
                </div>

                {/* CHAMPION */}
                <div className="flex items-center justify-between bg-white/5 border border-white/10 p-3 rounded-lg w-36 backdrop-blur-sm">
                  <span className="text-xs font-medium text-gray-300 pl-2">CHAMPION</span>
                  <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-[10px]">👤+</div>
                </div>

                {/* OPTIMIZE */}
                <div className="flex items-center justify-between bg-white/5 border border-white/10 p-3 rounded-lg w-36 backdrop-blur-sm">
                  <span className="text-xs font-medium text-gray-300 pl-2">OPTIMIZE</span>
                  <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-[10px]">↗</div>
                </div>
              </div>
            </div>

            {/* Footer Label */}
            <div className="px-6 py-3 bg-[#1a1a2e] border border-white/5 rounded-full flex items-center gap-3 w-full justify-center">
              <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs text-gray-400">3</div>
              <span className="text-sm text-violet-400 font-medium">Agent layer</span>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};
