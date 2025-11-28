import { motion } from "framer-motion";

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero stays on first screen */}
      <HeroSection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="h-screen w-screen relative overflow-hidden bg-[#0a0a16]">
      {/* Background Gradient - Deep purple to lighter purple at the ring */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 120%, #4c1d95 0%, #1e1b4b 40%, #020617 80%)",
        }}
      ></div>

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
        style={{ height: "22vh", zIndex: 1 }}
      >
        {/* Atmospheric Blend Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-[#0a0a16] via-[#1e1b4b]/50 to-transparent pointer-events-none"></div>

        {/* The Glow behind the ring */}
        <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[100vw] h-[35vh] bg-purple-600/30 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative w-full h-full">
          {/* Main Ring Arc */}
          <svg
            className="absolute bottom-0 left-0 w-full h-full"
            viewBox="0 0 1000 300"
            preserveAspectRatio="none"
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
                <stop offset="10%" stopColor="rgba(139, 92, 246, 0.4)" />
                <stop offset="30%" stopColor="rgba(168, 85, 247, 1)" />
                <stop offset="70%" stopColor="rgba(168, 85, 247, 1)" />
                <stop offset="90%" stopColor="rgba(139, 92, 246, 0.4)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
              </linearGradient>
              <linearGradient
                id="glowToBlack"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="rgba(168, 85, 247, 0.6)" />
                <stop offset="80%" stopColor="#000000" />
                <stop offset="100%" stopColor="#000000" />
              </linearGradient>
              <filter
                id="glow-blur"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="15" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Glow Effect - Thick blurred stroke along the curve, shifted down */}
            <path
              d="M 0,0 Q 500,300 1000,0"
              stroke="url(#ringGradient)"
              strokeWidth="60"
              fill="none"
              className="opacity-60"
              filter="url(#glow-blur)"
              transform="translate(0, 30)"
            />

            {/* The solid curve - Flipped to be a "U" shape / Valley, spanning full width */}
            <path
              d="M 0,0 Q 500,300 1000,0"
              stroke="url(#ringGradient)"
              strokeWidth="4"
              fill="none"
              className="opacity-100"
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
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
              fill="white"
              fillOpacity="0.1"
            />
            <path
              d="M21.3333 10.6667C21.3333 10.6667 18.6667 10.6667 18.6667 14.6667C18.6667 18.6667 16 18.6667 16 18.6667C16 18.6667 13.3333 18.6667 13.3333 14.6667C13.3333 10.6667 10.6667 10.6667 10.6667 10.6667"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M10.6667 21.3333C10.6667 21.3333 13.3333 21.3333 13.3333 17.3333C13.3333 13.3333 16 13.3333 16 13.3333C16 13.3333 18.6667 13.3333 18.6667 17.3333C18.6667 21.3333 21.3333 21.3333 21.3333 21.3333"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
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
          Empowering Websites with
          <br />
          <span className="text-gray-400">Intelligent AI Agents</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 text-center max-w-2xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Deliver smarter interactions, instant assistance, and personalized
          experiences that transform every visitor into a lasting connection
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
