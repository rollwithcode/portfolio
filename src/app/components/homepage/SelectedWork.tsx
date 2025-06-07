type Project = {
  title: string;
  subtitle: string;
  tags: string[];
  gradient: string;
  content: JSX.Element;
  textColor?: string;
  textColorFaded?: string;
  borderColor?: string;
};

const projects: Project[] = [
  {
    title: "Leo Design Solution Website",
    subtitle: "Showcasing Creativity and Design Excellence",
    tags: ["Web Design", "UI/UX", "Responsive Design"],
    gradient: "from-indigo-500 to-purple-700",
    content: (
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-indigo-600 text-2xl font-semibold mb-4">
            Leo Design Solution
          </div>
          <div className="text-gray-700 text-sm mb-4">
            We collaborated with Leo Design Solution to develop their online presence, focusing on a clean and modern aesthetic that reflects their creative expertise. The website features a responsive design, intuitive navigation, and showcases their portfolio seamlessly.
          </div>
          <div className="text-gray-700 text-sm mb-4">
            Key Features:
            <ul className="list-disc list-inside">
              <li>Responsive design for optimal viewing on all devices</li>
              <li>Interactive portfolio gallery to highlight projects</li>
              <li>Custom animations and transitions for enhanced user experience</li>
              <li>SEO optimization for increased online visibility</li>
            </ul>
          </div>
          <a
            href="https://www.leodesignsolution.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Visit Live Site
          </a>
        </div>
      </div>
    ),
  },

  {
    title: "ArtSpiree Website",
    subtitle: "Empowering Creative Visions for Causemakers and Gamechangers",
    tags: ["Web Design", "UI/UX", "Responsive Design"],
    gradient: "from-blue-500 to-red-700",
    content: (
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-blue-600 text-2xl font-semibold mb-4">
            ArtSpiree
          </div>
          <div className="text-gray-700 text-sm mb-4">
            We collaborated with ArtSpiree to develop their online presence, focusing on a clean and modern aesthetic that reflects their creative expertise. The website features a responsive design, intuitive navigation, and showcases their portfolio seamlessly.
          </div>
          <div className="text-gray-700 text-sm mb-4">
            Key Features:
            <ul className="list-disc list-inside">
              <li>Responsive design for optimal viewing on all devices</li>
              <li>Interactive gallery to highlight diverse projects</li>
              <li>Custom animations and transitions for enhanced user experience</li>
              <li>SEO optimization for increased online visibility</li>
            </ul>
          </div>
          <a
            href="https://artspiree.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Visit Live Site
          </a>
        </div>
      </div>
    ),
  }
  ,
  // {
  //   title: "STACKLY",
  //   subtitle: "Stack Crypto over time",
  //   tags: ["DESIGN SYSTEM", "UI", "BRANDING"],
  //   gradient: "from-green-600 to-green-800",
  //   content: (
  //     <div className="bg-black/20 rounded-2xl p-6 backdrop-blur-sm border border-white/10 w-full max-w-sm">
  //       <div className="bg-black rounded-xl p-4">
  //         <div className="text-green-400 text-xl font-bold mb-4">STACKLY</div>
  //         <div className="text-white text-sm mb-4">Stack WETH every</div>
  //         <div className="flex gap-2 mb-4">
  //           {["Hour", "Day", "Week", "Monthly"].map((label, i) => (
  //             <button
  //               key={i}
  //               className={`px-3 py-1 rounded-full text-sm ${i === 0
  //                 ? "bg-green-500 text-black font-medium"
  //                 : "text-white"
  //                 }`}
  //             >
  //               {label}
  //             </button>
  //           ))}
  //         </div>
  //         <div className="text-green-400 text-sm">
  //           📈 Stacks WETH, averaging 5.41 USDC every hour for 23 days
  //         </div>
  //         <button className="w-full bg-green-500 text-black font-medium py-3 rounded-lg mt-4">
  //           Stack Now
  //         </button>
  //       </div>
  //     </div>
  //   ),
  // },
  // {
  //   title: "ATOMIZE",
  //   subtitle: "Design System for Figma",
  //   tags: ["DESIGN SYSTEM", "BRANDING"],
  //   gradient: "from-blue-500 to-blue-700",
  //   content: (
  //     <div className="text-white text-center">
  //       <div className="text-5xl font-bold mb-2 flex items-center gap-3">
  //         <div className="w-4 h-4 bg-green-400 rounded-full"></div>
  //         <span>ATOMIZE</span>
  //       </div>
  //       <div className="text-white/80 text-lg">Design System for Figma</div>
  //     </div>
  //   ),
  // },
];

export default function SelectedWork() {
  return (
    <div className="bg-black min-h-screen py-20 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-red text-7xl md:text-9xl font-bold mb-2 tracking-tight">
          Selected
        </h2>
        <h2 className="text-white text-7xl md:text-9xl font-bold tracking-tight">
          WORK
        </h2>
        <div className="mt-12 flex justify-center">
          <div className="w-16 h-16 rounded-full border border-gray-600 flex items-center justify-center animate-bounce">
            <svg
              className="w-6 h-6 text-red"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((proj, i) => (
          <div
            key={i}
            className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${proj.gradient} p-8 md:p-12 min-h-[600px] cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
          >
            <div className="flex flex-col h-full">
              {/* Tags */}


              {/* Content */}
              <div className="flex-1 flex items-center justify-center mb-8">
                {proj.content}
              </div>

              {/* Title + Subtitle */}
              <div>
                <h3
                  className={`${proj.textColor || "text-white"
                    } text-4xl md:text-5xl font-bold mb-2`}
                >
                  {proj.title}
                </h3>
                <p
                  className={`${proj.textColorFaded || "text-white/80"
                    } text-lg`}
                >
                  {proj.subtitle}
                </p>
              </div>

            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {proj.tags.map((tag, j) => (
                <span
                  key={j}
                  className={`px-3 py-1 text-xs font-medium ${proj.textColor || "text-black"
                    } border ${proj.borderColor || "border-white/30"} rounded-full`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
