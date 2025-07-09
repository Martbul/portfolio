import Image from "next/image";

export default function Projects() {
   return (
     <>
       <section className="relative px-6 py-24 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-50 dark:bg-zinc-900">
         <div className="absolute inset-0 opacity-5 dark:opacity-10">
           <div className="absolute top-0 left-0 w-px h-full bg-current"></div>
           <div className="absolute top-0 left-20 w-px h-full bg-current"></div>
           <div className="absolute top-0 left-40 w-px h-full bg-current"></div>
           <div className="absolute top-0 right-40 w-px h-full bg-current"></div>
           <div className="absolute top-0 right-20 w-px h-full bg-current"></div>
           <div className="absolute top-0 right-0 w-px h-full bg-current"></div>
         </div>

         <div className="absolute inset-0 opacity-3 dark:opacity-5">
           <div className="absolute top-16 left-0 w-full h-px bg-current"></div>
           <div className="absolute bottom-16 left-0 w-full h-px bg-current"></div>
         </div>

         <div className="relative z-10 max-w-4xl mx-auto text-center animate-in fade-in duration-1000 slide-in-from-bottom-4">
           <div className="flex items-center justify-center gap-4 mb-8 animate-in fade-in duration-700 delay-200">
             <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700"></div>
             <span className="text-sm tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono">
               Work Portfolio
             </span>
             <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700"></div>
           </div>

           <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-zinc-900 dark:text-zinc-100 mb-8 tracking-tight leading-tight animate-in fade-in duration-700 delay-300">
             Selected
             <br />
             <span className="font-serif italic">Projects</span>
           </h1>

           <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto mb-12 animate-in fade-in duration-700 delay-500">
             A curated collection of digital experiences, ranging from web
             applications to browser extensions. Each project represents a
             unique challenge solved through thoughtful design and engineering.
           </p>

           <div className="flex items-center flex-wrap justify-center gap-12 text-center animate-in fade-in duration-700 delay-700">
             <div className="space-y-1">
               <div className="text-2xl font-light text-zinc-900 dark:text-zinc-100 font-mono">
                 15+
               </div>
               <div className="text-sm tracking-wide uppercase text-zinc-500 dark:text-zinc-400 font-mono">
                 Projects
               </div>
             </div>
             <div className="w-px h-8 bg-zinc-300 dark:bg-zinc-700"></div>
             <div className="space-y-1">
               <div className="text-2xl font-light text-zinc-900 dark:text-zinc-100 font-mono">
                 3+
               </div>
               <div className="text-sm tracking-wide uppercase text-zinc-500 dark:text-zinc-400 font-mono">
                 Years
               </div>
             </div>
             <div className="w-px h-8 bg-zinc-300 dark:bg-zinc-700"></div>
             <div className="space-y-1">
               <div className="text-2xl font-light text-zinc-900 dark:text-zinc-100 font-mono">
                 ∞
               </div>
               <div className="text-sm tracking-wide uppercase text-zinc-500 dark:text-zinc-400 font-mono">
                 Learning
               </div>
             </div>
           </div>
         </div>

         <div className="absolute bottom-8 left-8 opacity-20 dark:opacity-30">
           <div className="w-4 h-4 border border-zinc-400 dark:border-zinc-600 rotate-45"></div>
         </div>

         <div className="absolute top-8 right-8 opacity-20 dark:opacity-30">
           <div className="w-6 h-6 border border-zinc-400 dark:border-zinc-600"></div>
         </div>
       </section>

       <FilterProjectsSection />
       <ProjectsSection />
       <FigmaPortfolio />
     </>
   );
};


const FilterProjectsSection = () => {
  return (
    <section className="relative px-6 py-16 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
      <div className="absolute inset-0 opacity-[0.008] dark:opacity-[0.012] pointer-events-none">
        <div className="absolute top-0 left-0 w-px h-full bg-zinc-400 dark:bg-zinc-600"></div>
        <div className="absolute top-0 left-20 w-px h-full bg-zinc-400 dark:bg-zinc-600"></div>
        <div className="absolute top-0 left-40 w-px h-full bg-zinc-400 dark:bg-zinc-600"></div>
        <div className="absolute top-0 right-40 w-px h-full bg-zinc-400 dark:bg-zinc-600"></div>
        <div className="absolute top-0 right-20 w-px h-full bg-zinc-400 dark:bg-zinc-600"></div>
        <div className="absolute top-0 right-0 w-px h-full bg-zinc-400 dark:bg-zinc-600"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-zinc-400 dark:bg-zinc-600 opacity-50"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-zinc-400 dark:bg-zinc-600 opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-px bg-zinc-300 dark:bg-zinc-700"></div>
          <div className="w-2 h-2 bg-zinc-400 dark:bg-zinc-600 rotate-45"></div>
          <span className="text-sm tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono">
            Filter Projects
          </span>
          <div className="w-2 h-2 bg-zinc-400 dark:bg-zinc-600 rotate-45"></div>
          <div className="w-12 h-px bg-zinc-300 dark:bg-zinc-700"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <div
            className="animate-in fade-in duration-500"
            style={{ animationDelay: "0ms" }}
          >
            <button className="inline-flex items-center justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 border hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:border-zinc-800 dark:hover:border-zinc-200 h-10 relative overflow-hidden transition-all duration-300 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 font-mono text-sm tracking-wide uppercase px-6 py-2">
              All
              <div className="absolute bottom-0 left-0 w-full h-px bg-zinc-100 dark:bg-zinc-900"></div>
            </button>
          </div>

          <div
            className="animate-in fade-in duration-500"
            style={{ animationDelay: "100ms" }}
          >
            <button className="inline-flex items-center justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 border hover:bg-zinc-100 dark:hover:bg-zinc-800 h-10 relative overflow-hidden transition-all duration-300 bg-transparent border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 font-mono text-sm tracking-wide uppercase px-6 py-2">
              Web App
            </button>
          </div>

          <div
            className="animate-in fade-in duration-500"
            style={{ animationDelay: "200ms" }}
          >
            <button className="inline-flex items-center justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 border hover:bg-zinc-100 dark:hover:bg-zinc-800 h-10 relative overflow-hidden transition-all duration-300 bg-transparent border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 font-mono text-sm tracking-wide uppercase px-6 py-2">
              Mobile App
            </button>
          </div>

          <div
            className="animate-in fade-in duration-500"
            style={{ animationDelay: "300ms" }}
          >
            <button className="inline-flex items-center justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 border hover:bg-zinc-100 dark:hover:bg-zinc-800 h-10 relative overflow-hidden transition-all duration-300 bg-transparent border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 font-mono text-sm tracking-wide uppercase px-6 py-2">
              Others
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};





const ProjectsSection: React.FC = () => {
  return (
    <section className="relative px-6 py-20 bg-white dark:bg-zinc-950">
      <div className="absolute inset-0 opacity-30 dark:opacity-50">
        <div className="absolute top-0 left-0 w-px h-full bg-current"></div>
        <div className="absolute top-0 left-40 w-px h-full bg-current"></div>
        <div className="absolute top-0 right-40 w-px h-full bg-current"></div>
        <div className="absolute top-0 right-0 w-px h-full bg-current"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700"></div>
            <span className="text-sm tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono">
              14 Projects
            </span>
            <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700"></div>
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div
              className="flex items-center justify-center w-8 h-8 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 transition-colors duration-300"
              title="Chrome Web Store"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                role="img"
                viewBox="0 0 24 24"
                className="w-4 h-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(66, 133, 244)" }}
              >
                <path d="M0 1.637v19.09c0 .9.736 1.636 1.636 1.636h.131a10.4 10.4 0 0 1-.13-1.636 10.3 10.3 0 0 1 1.667-5.64l4.202 7.276h1.128A3.77 3.77 0 0 1 12 16.958a3.77 3.77 0 0 1 3.366 5.406h1.048a4.7 4.7 0 0 0-1.587-5.406h6.83a10.34 10.34 0 0 1 .577 5.406h.13c.9 0 1.636-.737 1.636-1.637V1.637Zm9.273 2.181h5.454a1.09 1.09 0 1 1 0 2.182H9.273a1.09 1.09 0 1 1 0-2.182M12 10.364a10.36 10.36 0 0 1 9.233 5.652H12a4.71 4.71 0 0 0-4.677 4.149L3.91 14.25A10.34 10.34 0 0 1 12 10.364"></path>
              </svg>
            </div>

            <div
              className="flex items-center justify-center w-8 h-8 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 transition-colors duration-300"
              title="Stripe"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                role="img"
                viewBox="0 0 24 24"
                className="w-4 h-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(81, 103, 252)" }}
              >
                <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"></path>
              </svg>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 text-zinc-700 dark:text-zinc-300 group-hover:gap-3 transition-all duration-300">
            <span className="text-xs tracking-wide font-mono uppercase">
              View Details
            </span>
            <div className="w-4 h-px bg-zinc-700 dark:bg-zinc-300 group-hover:w-6 transition-all duration-300"></div>
            <svg
              className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </div>
        </div>
      </div>

      <div
        className="animate-in fade-in duration-700 slide-in-from-bottom-4"
        style={{ animationDelay: "1350ms" }}
      >
        <div
          className="group relative cursor-pointer overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xl"
          role="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:r77:"
          data-state="closed"
        >
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <div className="absolute top-0 left-0 w-px h-full bg-current"></div>
            <div className="absolute top-0 right-0 w-px h-full bg-current"></div>
          </div>

          <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
            <Image
              alt="Nepali Educate"
              loading="lazy"
              decoding="async"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="100vw"
              src="/projects/nepali-educate.png"
            //   decoding="async"
            />
          </div>

          <div className="p-8 space-y-2">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              Nepali Educate
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              A community-driven platform to empower Nepali students, educators,
              and institutions with open educational resources and collaborative
              learning tools.
            </p>
            <div className="inline-flex items-center gap-2 text-zinc-700 dark:text-zinc-300 group-hover:gap-3 transition-all duration-300">
              <span className="text-xs tracking-wide font-mono uppercase">
                View Details
              </span>
              <div className="w-4 h-px bg-zinc-700 dark:bg-zinc-300 group-hover:w-6 transition-all duration-300"></div>
              <svg
                className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const FigmaPortfolio: React.FC = () => {
  return (
    <div className="w-full py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <a
          href="https://figma.com/@nabinkhair"
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <div className="relative overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700">
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
              <div className="absolute top-0 left-0 w-px h-full bg-current"></div>
              <div className="absolute top-0 left-20 w-px h-full bg-current"></div>
              <div className="absolute top-0 left-40 w-px h-full bg-current"></div>
              <div className="absolute top-0 right-20 w-px h-full bg-current"></div>
              <div className="absolute top-0 right-0 w-px h-full bg-current"></div>
            </div>

            <div className="relative p-12 md:p-16">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-8">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 24C10.21 24 12 22.21 12 20V16H8C5.79 16 4 17.79 4 20S5.79 24 8 24Z"
                        fill="#0ACF83"
                      />
                      <path
                        d="M4 12C4 9.79 5.79 8 8 8H12V16H8C5.79 16 4 14.21 4 12Z"
                        fill="#A259FF"
                      />
                      <path
                        d="M4 4C4 1.79 5.79 0 8 0H12V8H8C5.79 8 4 6.21 4 4Z"
                        fill="#F24E1E"
                      />
                      <path
                        d="M12 0H16C18.21 0 20 1.79 20 4S18.21 8 16 8H12V0Z"
                        fill="#FF7262"
                      />
                      <path
                        d="M20 12C20 14.21 18.21 16 16 16S12 14.21 12 12S13.79 8 16 8S20 9.79 20 12Z"
                        fill="#1ABCFE"
                      />
                    </svg>
                    <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700"></div>
                    <span className="text-sm tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono">
                      Design Portfolio
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-light text-zinc-900 dark:text-zinc-100 mb-6 tracking-tight">
                    Figma Works
                  </h2>

                  <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-2xl mb-8">
                    Curated collection of design systems, prototypes, and user
                    experiences. From concept to execution, exploring the
                    intersection of form and function.
                  </p>

                  <div className="inline-flex items-center gap-3 text-zinc-900 dark:text-zinc-100 group-hover:gap-5 transition-all duration-300">
                    <span className="text-sm tracking-wide font-mono uppercase">
                      View Collection
                    </span>
                    <div className="w-12 h-px bg-zinc-900 dark:bg-zinc-100 group-hover:w-16 transition-all duration-300"></div>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                <div className="hidden md:block ml-12">
                  <div className="w-32 h-32 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700 group-hover:rotate-45 transition-transform duration-700 ease-out"></div>
                    <div className="absolute inset-2 bg-zinc-50 dark:bg-zinc-900 group-hover:rotate-12 transition-transform duration-500 ease-out"></div>
                    <div className="absolute inset-4 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 group-hover:-rotate-12 transition-transform duration-700 ease-out"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

