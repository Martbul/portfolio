import {  IconDocker, IconGoLang, IconNextJs, IconNodeJs, IconReact } from "@/public/icons";

export default function SkillsAndTechnologies() {
   return (
     <section className="relative px-6 py-20 bg-white dark:bg-zinc-950">
       <div className="absolute inset-0 opacity-3 dark:opacity-5">
         <div className="absolute top-0 left-0 w-px h-full bg-current"></div>
         <div className="absolute top-0 left-40 w-px h-full bg-current"></div>
         <div className="absolute top-0 right-40 w-px h-full bg-current"></div>
         <div className="absolute top-0 right-0 w-px h-full bg-current"></div>
       </div>

       <div className="relative z-10 max-w-6xl mx-auto">
         <div className="flex items-start justify-between mb-16 flex-wrap gap-8">
           <div className="max-w-2xl">
             <div className="flex items-center gap-4 mb-6">
               <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700"></div>
               <span className="text-sm tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono">
                 Core Technologies
               </span>
             </div>
             <h2 className="text-4xl md:text-5xl font-light text-zinc-900 dark:text-zinc-100 mb-6 tracking-tight">
               Skills &amp;
               <br />
               <span className="font-serif italic">Technologies</span>
             </h2>
             <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
               Technologies I work with daily to build scalable and efficient
               web applications.
             </p>
           </div>
           <div className="animate-in fade-in duration-700 delay-300">
             <a href="/about" aria-label="View All Skills">
               <button
                 className="inline-flex items-center justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 bg-transparent hover:border-zinc-400 dark:hover:border-zinc-600 h-10 group px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-mono text-sm uppercase tracking-wider transition-all duration-300"
                 type="button"
               >
                 <span className="flex items-center gap-2">
                   View All Skills
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="lucide lucide-arrow-right h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
                   >
                     <path d="M5 12h14"></path>
                     <path d="m12 5 7 7-7 7"></path>
                   </svg>
                 </span>
               </button>
             </a>
           </div>
         </div>

         <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
           {/* React Skill */}
           <div
             className="group relative flex flex-col items-center gap-4 p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-700 animate-in fade-in duration-700 slide-in-from-bottom-4"
             style={{ animationDelay: "0ms" }}
           >
             <div className="absolute inset-0 opacity-5 dark:opacity-10">
               <div className="absolute top-0 left-0 w-px h-full bg-current"></div>
               <div className="absolute top-0 right-0 w-px h-full bg-current"></div>
             </div>
             <div className="relative flex h-16 w-16 items-center justify-center bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 transition-all duration-300">
               <IconReact />
             </div>
             <div className="relative text-zinc-900 dark:text-zinc-100 text-sm font-medium">
               React
             </div>
           </div>

           {/* Vue Skill */}
           <div
             className="group relative flex flex-col items-center gap-4 p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-700 animate-in fade-in duration-700 slide-in-from-bottom-4"
             style={{ animationDelay: "150ms" }}
           >
             <div className="absolute inset-0 opacity-5 dark:opacity-10">
               <div className="absolute top-0 left-0 w-px h-full bg-current"></div>
               <div className="absolute top-0 right-0 w-px h-full bg-current"></div>
             </div>
             <div className="relative flex h-16 w-16 items-center justify-center bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 transition-all duration-300">
               <svg
                 stroke="currentColor"
                 fill="currentColor"
                 strokeWidth="0"
                 role="img"
                 viewBox="0 0 24 24"
                 className="h-8 w-8 transition-all duration-300 group-hover:scale-110"
                 height="1em"
                 width="1em"
                 xmlns="http://www.w3.org/2000/svg"
                 style={{ color: "rgb(65, 184, 131)" }}
               >
                 <path d="m12 2.4-9 15.6h18l-9-15.6zm0 5.94 3.17 5.49H8.83L12 8.34z"></path>
               </svg>
             </div>
             <div className="relative text-zinc-900 dark:text-zinc-100 text-sm font-medium">
               Vue
             </div>
           </div>

           {/* Tailwind Skill */}
           <div
             className="group relative flex flex-col items-center gap-4 p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-700 animate-in fade-in duration-700 slide-in-from-bottom-4"
             style={{ animationDelay: "300ms" }}
           >
             <div className="absolute inset-0 opacity-5 dark:opacity-10">
               <div className="absolute top-0 left-0 w-px h-full bg-current"></div>
               <div className="absolute top-0 right-0 w-px h-full bg-current"></div>
             </div>
             <div className="relative flex h-16 w-16 items-center justify-center bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 transition-all duration-300">
               <IconGoLang />
             </div>
             <div className="relative text-zinc-900 dark:text-zinc-100 text-sm font-medium">
               Tailwind
             </div>
           </div>

           {/* Node.js Skill */}
           <div
             className="group relative flex flex-col items-center gap-4 p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-700 animate-in fade-in duration-700 slide-in-from-bottom-4"
             style={{ animationDelay: "450ms" }}
           >
             <div className="absolute inset-0 opacity-5 dark:opacity-10">
               <div className="absolute top-0 left-0 w-px h-full bg-current"></div>
               <div className="absolute top-0 right-0 w-px h-full bg-current"></div>
             </div>
             <div className="relative flex h-16 w-16 items-center justify-center bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 transition-all duration-300">
              <IconNodeJs/>
             </div>
             <div className="relative text-zinc-900 dark:text-zinc-100 text-sm font-medium">
               Node.js
             </div>
           </div>

           {/* Python Skill */}
           <div
             className="group relative flex flex-col items-center gap-4 p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-700 animate-in fade-in duration-700 slide-in-from-bottom-4"
             style={{ animationDelay: "600ms" }}
           >
             <div className="absolute inset-0 opacity-5 dark:opacity-10">
               <div className="absolute top-0 left-0 w-px h-full bg-current"></div>
               <div className="absolute top-0 right-0 w-px h-full bg-current"></div>
             </div>
             <div className="relative flex h-16 w-16 items-center justify-center bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 transition-all duration-300">
               <IconNextJs/>
             </div>
             <div className="relative text-zinc-900 dark:text-zinc-100 text-sm font-medium">
               Python
             </div>
           </div>

           {/* Docker Skill */}
           <div
             className="group relative flex flex-col items-center gap-4 p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-700 animate-in fade-in duration-700 slide-in-from-bottom-4"
             style={{ animationDelay: "750ms" }}
           >
             <div className="absolute inset-0 opacity-5 dark:opacity-10">
               <div className="absolute top-0 left-0 w-px h-full bg-current"></div>
               <div className="absolute top-0 right-0 w-px h-full bg-current"></div>
             </div>
             <div className="relative flex h-16 w-16 items-center justify-center bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 transition-all duration-300">
             <IconDocker/>
             </div>
             <div className="relative text-zinc-900 dark:text-zinc-100 text-sm font-medium">
               Docker
             </div>
           </div>
         </div>
       </div>
     </section>
   );
}