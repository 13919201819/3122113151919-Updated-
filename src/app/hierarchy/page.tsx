// import React from "react";
// import ReactFlow, { Background, Controls} from "reactflow";
// import "reactflow/dist/style.css";

// const nodeStyle = {
//   border: "2px solid #9b5df7",
//   background: "#111",
//   color: "white",
//   borderRadius: "10px",
//   padding: "10px",
//   textAlign: "center",
//   width: 250,
// };

// const nodes = [
//   { id: "1", position: { x: 600, y: 50 }, data: { label: "CLUMOSS" }, type: "default", style: nodeStyle },

//   { id: "2", position: { x: 300, y: 200 }, data: { label: "Automata" }, type: "default", style: nodeStyle },
//   { id: "3", position: { x: 900, y: 200 }, data: { label: "Agrani" }, type: "default", style: nodeStyle },

//   { id: "4", position: { x: 600, y: 300 }, data: { label: "Mistr AI" }, type: "default", style: nodeStyle },

//   { id: "5", position: { x: 200, y: 450 }, data: { label: "Peveleon" }, type: "default", style: nodeStyle },
//   { id: "6", position: { x: 1000, y: 450 }, data: { label: "Ela" }, type: "default", style: nodeStyle },

//   { id: "7", position: { x: 600, y: 500 }, data: { label: "HighClass" }, type: "default", style: nodeStyle },

//   { id: "8", position: { x: 600, y: 650 }, data: { label: "Provides cutting edge AI-driven solutions in every sector using automation and SaaS Products" }, type: "default", style: nodeStyle },
// ];

// const edges = [
//   { id: "e1-4", source: "1", target: "4" },
//   { id: "e1-2", source: "1", target: "2" },
//   { id: "e1-3", source: "1", target: "3" },
  
//   { id: "e4-5", source: "4", target: "5" },
//   { id: "e4-6", source: "4", target: "6" },
//   { id: "e4-7", source: "4", target: "7" },

//   { id: "e7-8", source: "7", target: "8" },
// ];

// export default function Hierarchy() {
//   return (
//     <div style={{ width: "100vw", height: "90vh", background: "black", padding: "20px" }}>
//       <h1 style={{ color: "white", textAlign: "center", marginBottom: "10px" }}>
//         Clusters of Multi Organizations for Support and Services
//       </h1>
//       <ReactFlow nodes={nodes} edges={edges} fitView>
//         <Background />
//         <Controls />
//       </ReactFlow>
//     </div>
//   );
// }


// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaInfoCircle, FaArrowDown, FaExpandAlt } from "react-icons/fa";

// // Hierarchy data based on the provided diagram
// const hierarchy = {
//   parent: {
//     name: "CLUMOSS",
//     description:
//       "The visionary heart of innovation, CLUMOSS orchestrates a symphony of cutting-edge solutions, uniting subsidiaries to empower industries worldwide with unparalleled expertise and passion.",
//   },
//   subsidiaries: [
//     {
//       name: "Automata",
//       description:
//         "A trailblazer in AI-driven SaaS products, Automata streamlines supply chain management, grouping activities for seamless commission and dealer operations, making business flow effortlessly.",
//       details:
//         "Specializes in AI-powered logistics and automation, delivering real-time insights to optimize supply chains and enhance decision-making for global enterprises.",
//     },
//     {
//       name: "Mist AI",
//       description:
//         "A beacon of intelligence, Mist AI crafts world-first generated menswear brands, offering unique, customized designs tailored along cutting-edge trends that captivate the fashion world.",
//       details:
//         "Leverages advanced AI to create bespoke fashion lines, blending technology with artistry to set new standards in personalized menswear.",
//     },
//     {
//       name: "Reveleon",
//       description:
//         "Reveleon simplifies life with precision, making studying abroad and getting real-time clothing suggestions easier through specific data using AI, igniting confidence in every decision.",
//       details:
//         "Focuses on AI-driven educational and lifestyle tools, providing tailored recommendations and insights for students and fashion enthusiasts globally.",
//     },
//     {
//       name: "HighClass",
//       description:
//         "HighClass provides cutting-edge AI-driven solutions and SaaS products, elevating industries with innovative automation and data-driven strategies that inspire excellence.",
//       details:
//         "Excels in delivering high-quality AI solutions across sectors, from automation to analytics, empowering organizations with transformative technology.",
//     },
//     {
//       name: "Ela",
//       description:
//         "Ela brings next-gen solutions for real-time terror activities detection using AI and Computer Vision, ensuring safety with a vigilant, protective embrace.",
//       details:
//         "Pioneers in AI and Computer Vision for security, offering real-time monitoring and threat detection to safeguard communities and businesses.",
//     },
//     {
//       name: "Agrani",
//       description:
//         "Agrani leads with next-gen content generation in video format for studying purposes and knowledge gaming, fostering education and engagement with immersive experiences.",
//       details:
//         "Specializes in AI-generated educational video content and interactive gaming, revolutionizing learning and knowledge retention worldwide.",
//     },
//   ],
// };

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2, delayChildren: 0.5 },
//   },
// };

// const nodeVariants = {
//   hidden: { scale: 0, opacity: 0 },
//   visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100 } },
// };

// const expandVariants = {
//   hidden: { height: 0, opacity: 0 },
//   visible: { height: "auto", opacity: 1, transition: { duration: 0.4 } },
// };

// export default function Hierarchy() {
//   const [expanded, setExpanded] = useState<string | null>(null);

//   return (
//     <div className="min-h-screen overflow-hidden text-white bg-gradient-to-br from-black via-gray-900 to-black">
//       {/* Hero Section */}
//       <motion.section
//         className="relative min-h-[60vh] flex items-center justify-center text-center px-6 py-20 bg-[url('/placeholder-hierarchy.jpg')] bg-cover bg-center bg-no-repeat"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         <div className="absolute inset-0 bg-black/60" />
//         <motion.div className="relative z-10">
//           <motion.h1
//             className="text-5xl md:text-7xl font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 drop-shadow-[0_0_30px_rgba(79,70,229,0.8)]"
//             variants={nodeVariants}
//           >
//             Our Grand Legacy
//           </motion.h1>
//           <motion.p
//             className="max-w-2xl mt-4 text-xl text-gray-300 md:text-2xl"
//             variants={nodeVariants}
//           >
//             Explore the intricate tapestry of CLUMOSS, where each subsidiary weaves a story of innovation and excellence.
//           </motion.p>
//           <motion.div
//             className="mt-8"
//             variants={nodeVariants}
//             whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
//           >
//             <FaArrowDown className="text-4xl text-indigo-400 animate-bounce" />
//           </motion.div>
//         </motion.div>
//       </motion.section>

//       {/* Hierarchy Visualization */}
//       <div className="container px-4 py-16 mx-auto">
//         <motion.div
//           className="relative flex items-center justify-center"
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//         >
//           {/* Central Node (CLUMOSS) */}
//           <motion.div
//             className="absolute text-center p-6 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 shadow-[0_0_20px_rgba(79,70,229,0.5)]"
//             style={{ width: "200px", height: "200px" }}
//             variants={nodeVariants}
//           >
//             <h2 className="text-2xl font-bold">{hierarchy.parent.name}</h2>
//             <p className="mt-2 text-gray-300 line-clamp-3">{hierarchy.parent.description}</p>
//           </motion.div>

//           {/* Subsidiary Nodes */}
//           {hierarchy.subsidiaries.map((subsidiary, index) => {
//             const angle = (index / hierarchy.subsidiaries.length) * 2 * Math.PI - Math.PI / 2;
//             const radius = 300;
//             const x = Math.cos(angle) * radius;
//             const y = Math.sin(angle) * radius;

//             return (
//               <motion.div
//                 key={subsidiary.name}
//                 className="absolute p-4 text-center transition-shadow duration-300 border rounded-lg shadow-md bg-gray-800/50 border-indigo-600/30 hover:shadow-lg"
//                 style={{
//                   left: `50%`,
//                   top: `50%`,
//                   transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
//                   width: "180px",
//                   height: "180px",
//                 }}
//                 variants={nodeVariants}
//               >
//                 <h3 className="text-xl font-semibold">{subsidiary.name}</h3>
//                 <p className="mt-2 text-gray-400 line-clamp-2">{subsidiary.description}</p>
//                 <motion.button
//                   onClick={() => setExpanded(expanded === subsidiary.name ? null : subsidiary.name)}
//                   className="flex items-center justify-center mt-2 text-indigo-400 hover:text-white"
//                   variants={nodeVariants}
//                 >
//                   <FaExpandAlt className="mr-1" /> {expanded === subsidiary.name ? "Hide" : "Learn More"}
//                 </motion.button>
//                 <AnimatePresence>
//                   {expanded === subsidiary.name && (
//                     <motion.div
//                       className="mt-4 text-sm text-gray-300"
//                       initial="hidden"
//                       animate="visible"
//                       exit="hidden"
//                       variants={expandVariants}
//                     >
//                       {subsidiary.details}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//                 <motion.div
//                   className="absolute w-1 h-1 bg-white rounded-full"
//                   style={{
//                     left: "50%",
//                     top: "100%",
//                     transform: "translateX(-50%)",
//                   }}
//                 />
//                 <motion.div
//                   className="absolute w-full h-1 bg-indigo-600/30"
//                   style={{
//                     top: "50%",
//                     left: "50%",
//                     transform: `translate(-50%, -50%) rotate(${angle + Math.PI / 2}rad)`,
//                     transformOrigin: "0 0",
//                   }}
//                 />
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>

//       {/* Call to Action */}
//       <motion.div
//         className="py-16 mx-4 mb-8 text-center border bg-gray-900/50 rounded-xl border-indigo-600/30"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//         variants={containerVariants}
//       >
//         <h2 className="mb-6 text-4xl font-bold text-white">
//           Partner with Our Legacy
//         </h2>
//         <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-300">
//           Dive into the strength of CLUMOSS and its subsidiaries. Let’s build your future together.
//         </p>
//         <motion.a
//           href="/contact"
//           className="inline-block px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-lg shadow-lg bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800"
//           whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(79, 70, 229, 0.6)" }}
//           whileTap={{ scale: 0.98 }}
//         >
//           Connect Now
//         </motion.a>
//       </motion.div>
//     </div>
//   );
// }


"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExpandAlt } from "react-icons/fa";

// Hierarchy data with detailed descriptions
const hierarchy = {
  parent: {
    name: "CLUMOSS",
    description:
      "CLUMOSS is a global conglomerate driving innovation across industries through its diverse subsidiaries, delivering cutting-edge solutions with a focus on excellence and strategic growth.",
    overview:
      "As the visionary leader, CLUMOSS orchestrates a network of specialized subsidiaries, each contributing to a transformative ecosystem. From AI-driven logistics to advanced security and education, CLUMOSS empowers global industries with unparalleled expertise.",
  },
  subsidiaries: [
    {
      name: "Automata",
      description:
        "Automata enhances supply chain efficiency with AI-driven SaaS solutions for seamless operations.",
      details:
        "Specializing in AI-powered logistics and automation, Automata provides real-time insights to optimize supply chains, streamline dealer operations, and enhance decision-making for global enterprises.",
    },
    {
      name: "Mist AI",
      description:
        "Mist AI revolutionizes fashion with AI-generated menswear brands and bespoke designs.",
      details:
        "Mist AI leverages advanced AI to craft customized menswear, blending technology with artistry to set new standards in personalized fashion for a global audience.",
    },
    {
      name: "Reveleon",
      description:
        "Reveleon simplifies decisions with AI tools for studying abroad and clothing suggestions.",
      details:
        "Reveleon uses AI to provide tailored recommendations, empowering students and fashion enthusiasts with data-driven insights for education and lifestyle choices worldwide.",
    },
    {
      name: "HighClass",
      description:
        "HighClass delivers advanced AI solutions and SaaS products to elevate industries.",
      details:
        "HighClass offers enterprise-grade AI tools, from automation to analytics, enabling organizations to achieve operational excellence and maintain a competitive edge across sectors.",
    },
    {
      name: "Ela",
      description:
        "Ela ensures safety with AI and Computer Vision for real-time threat detection.",
      details:
        "Ela pioneers security solutions, using AI and Computer Vision to monitor and mitigate risks, safeguarding communities and businesses with proactive, real-time capabilities.",
    },
    {
      name: "Agrani",
      description:
        "Agrani transforms education with AI-generated video content and interactive platforms.",
      details:
        "Agrani creates AI-powered educational content and gamified learning experiences, revolutionizing knowledge retention and engagement for learners globally.",
    },
  ],
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const nodeVariants = {
  hidden: { scale: 0.8, opacity: 0, y: 20 },
  visible: { scale: 1, opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
};

const expandVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
};

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
};

export default function Hierarchy() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-gray-900 to-black">
      {/* Header Section */}
      <motion.header
        className="relative min-h-[30vh] flex items-center justify-center text-center px-6 py-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div className="relative z-10">
          <motion.h1
            className="text-4xl font-bold text-purple-400 uppercase md:text-5xl drop-shadow-md"
            variants={nodeVariants}
          >
            Clusters of Multi-Organizations for Support and Services
          </motion.h1>
          <motion.p
            className="max-w-3xl mt-4 text-lg text-gray-300 md:text-xl"
            variants={nodeVariants}
          >
            Explore the CLUMOSS ecosystem, a network of innovation and excellence shaping the future of global industries.
          </motion.p>
        </motion.div>
      </motion.header>

      {/* Hierarchy Visualization */}
      <div className="container px-6 py-20 mx-auto">
        <motion.div
          className="relative flex flex-col items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ minHeight: "800px" }}
        >
          {/* Central Node (CLUMOSS) */}
          <motion.div
            className="relative z-10 p-6 text-center rounded-full shadow-lg bg-gradient-to-br from-purple-600 to-indigo-700"
            style={{ width: "250px", height: "250px" }}
            variants={nodeVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <h2 className="text-2xl font-semibold">{hierarchy.parent.name}</h2>
            <p className="mt-2 text-sm text-gray-300 line-clamp-3">{hierarchy.parent.description}</p>
            <motion.button
              onClick={() => setExpanded(expanded === "parent" ? null : "parent")}
              className="flex items-center justify-center mt-3 text-sm text-purple-400 hover:text-white"
              variants={nodeVariants}
            >
              <FaExpandAlt className="mr-2" /> {expanded === "parent" ? "Close" : "Learn More"}
            </motion.button>
            <AnimatePresence>
              {expanded === "parent" && (
                <motion.div
                  className="absolute z-20 w-64 p-4 mt-4 transform -translate-x-1/2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg top-full left-1/2"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={expandVariants}
                >
                  <p className="text-xs leading-relaxed text-gray-400">{hierarchy.parent.overview}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Subsidiary Nodes */}
          <div className="relative flex justify-around w-full mt-32">
            {hierarchy.subsidiaries.map((subsidiary, index) => {
              const totalSubsidiaries = hierarchy.subsidiaries.length;
              const spacing = 100 / (totalSubsidiaries - 1); // Evenly distribute subsidiaries
              const positionX = index * spacing; // Position along X-axis

              return (
                <div key={subsidiary.name} className="relative flex flex-col items-center">
                  {/* Connecting Line */}
                  <svg
                    className="absolute top-[-120px] left-1/2 transform -translate-x-1/2"
                    width="2"
                    height="120"
                    style={{ overflow: "visible" }}
                  >
                    <motion.line
                      x1="1"
                      y1="0"
                      x2="1"
                      y2="120"
                      stroke="rgba(255, 255, 255, 0.3)"
                      strokeWidth="2"
                      variants={lineVariants}
                    />
                  </svg>
                  {/* Diagonal Line from CLUMOSS */}
                  <svg
                    className="absolute top-[-120px] left-1/2 transform -translate-x-1/2"
                    style={{ width: "100vw", height: "120px", overflow: "visible", zIndex: 0 }}
                  >
                    <motion.line
                      x1={`${50 - positionX + 50}%`} // Start at CLUMOSS (center)
                      y1="0"
                      x2="50%" // End at subsidiary
                      y2="120"
                      stroke="rgba(255, 255, 255, 0.3)"
                      strokeWidth="2"
                      variants={lineVariants}
                    />
                  </svg>

                  {/* Subsidiary Node */}
                  <motion.div
                    className="relative z-10 p-4 text-center transition-shadow duration-300 bg-gray-800 border border-gray-700 rounded-lg shadow-md hover:shadow-xl"
                    style={{ width: "200px", height: "200px" }}
                    variants={nodeVariants}
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  >
                    <h3 className="text-lg font-medium text-white">{subsidiary.name}</h3>
                    <p className="mt-2 text-sm text-gray-400 line-clamp-2">{subsidiary.description}</p>
                    <motion.button
                      onClick={() =>
                        setExpanded(expanded === subsidiary.name ? null : subsidiary.name)
                      }
                      className="flex items-center justify-center mt-3 text-sm text-purple-400 hover:text-white"
                      variants={nodeVariants}
                    >
                      <FaExpandAlt className="mr-2" /> {expanded === subsidiary.name ? "Close" : "Learn More"}
                    </motion.button>
                    <AnimatePresence>
                      {expanded === subsidiary.name && (
                        <motion.div
                          className="absolute z-20 w-64 p-4 mt-4 transform -translate-x-1/2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg top-full left-1/2"
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={expandVariants}
                        >
                          <p className="text-xs leading-relaxed text-gray-400">{subsidiary.details}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="py-16 mx-6 mb-12 text-center bg-gray-800 rounded-lg shadow-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <h2 className="mb-4 text-3xl font-semibold text-white">
          Partner with CLUMOSS
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg text-gray-300">
          Join our innovative ecosystem to unlock transformative solutions for your business.
        </p>
        <motion.a
          href="/contact"
          className="inline-block px-6 py-3 text-base font-medium text-white transition-colors duration-300 bg-purple-600 rounded-md hover:bg-purple-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Contact Us
        </motion.a>
      </motion.div>
    </div>
  );
}