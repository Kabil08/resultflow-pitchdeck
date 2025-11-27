import { motion } from "framer-motion";

const Section = (props: any) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start
  ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero stays on first screen */}
      <HeroSection />
      
      {/* Content sections with background */}
      <div className="w-full bg-gradient-to-b from-black/50 via-black/80 to-black">
        <StatsSection />
        <FeaturesSection />
        <ProductSuiteSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-start p-8 md:p-16 max-w-screen-2xl mx-auto relative">
      <div className="max-w-4xl">
      <motion.div
        className="text-sm font-bold tracking-wider text-blue-500 mb-4"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        RESULTFLOW.AI
      </motion.div>
      <motion.h1 
        className="text-5xl md:text-7xl lg:text-8xl leading-tight text-white"
        style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 600 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        The retail-native
        <br />
        <span className="text-blue-500" style={{ fontWeight: 600 }}>
          Agentic Commerce
        </span>
        <br />
        platform
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-300 mt-6 max-w-3xl"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        Instant visibility into every customer interaction, conversion opportunity, and revenue driver—without ever leaving your e-commerce platform.
      </motion.p>
      <motion.div
        className="flex gap-4 mt-8"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.6 }}
      >
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-lg font-bold text-lg transition-all shadow-lg shadow-blue-600/50 hover:shadow-blue-600/70">
          Book a Demo
        </button>
        <button className="bg-gray-800 hover:bg-gray-700 text-white py-4 px-8 rounded-lg font-bold text-lg transition-all border border-gray-700 hover:border-gray-600">
          Watch Demo
        </button>
      </motion.div>
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="text-blue-500 text-4xl">↓</div>
      </motion.div>
      </div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: "70%", label: "Increase in Revenue and Gross margin" },
    { value: "2X", label: "Cart Recovery" },
    { value: "Zero", label: "integrations to manage" },
    { value: "25%", label: "fewer abandoned carts" },
  ];

  return (
    <Section>
      <motion.div className="w-full" whileInView={"visible"}>
        <h2 className="text-4xl md:text-6xl text-white mb-12" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 600 }}>
          AI-powered retail intelligence
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border border-blue-900/30 p-6 rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: 1 + index * 0.2,
                  },
                },
              }}
            >
              <div className="text-5xl font-bold text-blue-500 mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: "Native integration",
      description: "Built directly into your e-commerce platform. Skip the connector chaos with agentic commerce that scales with you—zero integrations to manage.",
    },
    {
      title: "One system, faster results",
      description: "Eliminate manual work and turn your platform into a growth multiplier with AI-powered agents designed to accelerate conversions and revenue.",
    },
    {
      title: "Brand-safe AI",
      description: "Purpose-built for trust, evolving dynamically while protecting brand integrity at every step. Complete control over agent behavior and responses.",
    },
    {
      title: "Expert support",
      description: "Backed by decades of retail expertise, we enable cross-platform workflows to support your commerce needs anywhere in the world.",
    },
  ];

  return (
    <Section>
      <motion.div className="w-full" whileInView={"visible"}>
        <h2 className="text-4xl md:text-6xl text-white mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 600 }}>
          Best-in-class retail solutions
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          Built to scale with your business—implemented, optimized, and supported to grow with you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border border-blue-900/30 p-8 rounded-xl hover:border-blue-600/50 transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    delay: 1 + index * 0.15,
                  },
                },
              }}
            >
              <h3 className="text-2xl text-blue-500 mb-3" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 500 }}>{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

const ProductSuiteSection = () => {
  const products = [
    {
      title: "Sales",
      description: "Our sales agent helps customers find the exact products they need, leading to higher conversion rates and greater customer satisfaction.",
      features: ["More Conversions", "Bigger Baskets", "Stronger Loyalty"],
    },
    {
      title: "Search",
      description: "Our search agent lets customers shop using natural language—the same way they shop in the real world.",
      features: ["Natural Language Search", "Instant Results", "Higher Relevance"],
    },
    {
      title: "Customer Experience",
      description: "Great support feels invisible. Our CX agent fits right into your existing system, solving issues before they arise.",
      features: ["Proactive Support", "Seamless Integration", "Human Escalation"],
    },
    {
      title: "Copywriter",
      description: "Our copywriter agent crafts optimized product descriptions and creates content for brands to help them rank higher.",
      features: ["SEO Optimized", "Conversion Focused", "Brand Aligned"],
    },
  ];

  return (
    <Section>
      <motion.div className="w-full" whileInView={"visible"}>
        <h2 className="text-4xl md:text-6xl text-white mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 600 }}>
          Product Suite
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-3xl">
          Everything you need for agentic commerce, built into your platform. A full suite of AI agents designed to streamline conversion from start to finish.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-blue-950/30 to-black border border-blue-900/50 p-8 rounded-xl hover:border-blue-600 transition-all"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              variants={{
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.8,
                    delay: 1 + index * 0.2,
                  },
                },
              }}
            >
              <h3 className="text-3xl text-blue-400 mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 500 }}>{product.title}</h3>
              <p className="text-gray-300 mb-6">{product.description}</p>
              <div className="flex flex-wrap gap-3">
                {product.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-900/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      company: "Premium Retailer",
      stat: "70%",
      metric: "increase in search conversion",
      quote: "As their collection grew, customers struggled to find specific products through search, impacting conversions.",
    },
    {
      company: "Fashion Brand",
      stat: "6.76%",
      metric: "conversion rate on Black Friday",
      quote: "Deploying AI that was safe, compliant, and drove serious conversions during the biggest shopping weekend of the year.",
    },
    {
      company: "Beauty Brand",
      stat: "$5M+",
      metric: "in annualized revenue",
      quote: "Customers struggled to find the right products for their needs, impacting conversions and customer satisfaction.",
    },
  ];

  return (
    <Section>
      <motion.div className="w-full" whileInView={"visible"}>
        <h2 className="text-4xl md:text-6xl text-white mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 600 }}>
          Customer success stories
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          Learn how ResultFlow simplifies conversion optimization from discovery to purchase.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-black border border-blue-900/30 p-6 rounded-xl hover:border-blue-600/50 transition-all"
              initial={{ opacity: 0, y: 50 }}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: 1 + index * 0.2,
                  },
                },
              }}
            >
              <h3 className="text-xl font-bold text-white mb-2">{testimonial.company}</h3>
              <div className="text-4xl font-bold text-blue-500 mb-1">{testimonial.stat}</div>
              <div className="text-blue-300 text-sm mb-4">{testimonial.metric}</div>
              <p className="text-gray-400 text-sm">{testimonial.quote}</p>
              <button className="mt-4 text-blue-400 hover:text-blue-300 font-semibold text-sm">
                See Case Study →
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

const CTASection = () => {
  return (
    <Section>
      <div className="w-full max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl text-white mb-6" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 600 }}>
          See ResultFlow in action
        </h2>
        <p className="text-gray-400 text-xl mb-12">
          Your store deserves more than just clicks. Let's unlock its full potential—together.
        </p>
        <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-900/30 p-8 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-blue-500 mb-2">15 mins</div>
              <div className="text-gray-400 text-sm">Average Demo Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-500 mb-2">&lt; 2 weeks</div>
              <div className="text-gray-400 text-sm">Implementation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-500 mb-2">30 days</div>
              <div className="text-gray-400 text-sm">Time to ROI</div>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-12 rounded-lg font-bold text-lg transition-all w-full md:w-auto">
            Get Started
          </button>
        </div>
      </div>
    </Section>
  );
};
