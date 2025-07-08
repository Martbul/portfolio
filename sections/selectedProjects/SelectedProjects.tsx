import Image from "next/image";

const projects = [
  {
    title: "Apex UI",
    category: "webapp",
    year: 2024,
    description:
      "Fully customizable templates to craft modern websites and apps exactly as you envision them.",
    tags: ["Next.js", "React.js", "Tailwind CSS", "+1"],
    href: "https://apexui.dev/",
    imgSrc: "/projects/apex-ui.png",
    animationDelay: 0,
  },
  {
    title: "JuJu",
    category: "mobileapp",
    year: 2024,
    description:
      "Juju is where creativity comes alive. Share your moments, express yourself, and be part of a vibrant community that celebrates originality.",
    tags: ["Express Js", "Node Js", "AWS", "+4"],
    href: "https://jujuconnect.com",
    imgSrc: "/projects/juju.png",
    animationDelay: 150,
  },
  {
    title: "V Themes",
    category: "others",
    year: 2023,
    description:
      "A professionally crafted color theme based on advanced color theory principles, designed to reduce eye strain and enhance code readability during long coding sessions",
    tags: ["JSON"],
    href: "https://vthemes.nabinkhair.com.np/",
    imgSrc: "/projects/vthemes.png",
    animationDelay: 300,
  },
];
export default function SelectedProjects() {
   return (
     <section className="relative px-6 py-20 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
       <div className="absolute inset-0 opacity-30 dark:opacity-50">
         <div className="absolute top-0 left-0 w-px h-full bg-current" />
         <div className="absolute top-0 left-40 w-px h-full bg-current" />
         <div className="absolute top-0 right-40 w-px h-full bg-current" />
         <div className="absolute top-0 right-0 w-px h-full bg-current" />
       </div>

       <div className="relative z-10 max-w-6xl mx-auto">
         <div className="text-center mb-16">
           <div className="flex items-center justify-center gap-4 mb-6">
             <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
             <span className="text-sm tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono">
               Featured Work
             </span>
             <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
           </div>
           <h2 className="text-4xl md:text-5xl font-light text-zinc-900 dark:text-zinc-100 mb-6 tracking-tight">
             Selected
             <br />
             <span className="font-serif italic">Projects</span>
           </h2>
         </div>

         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
           {projects.map(
             ({
               title,
               category,
               year,
               description,
               tags,
               href,
               imgSrc,
               animationDelay,
             }) => (
               <div
                 key={title}
                 className="group relative overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-700 slide-in-from-bottom-4"
                 style={{ animationDelay: `${animationDelay}ms` }}
               >
                 <div className="absolute inset-0 opacity-5 dark:opacity-10">
                   <div className="absolute top-0 left-0 w-px h-full bg-current" />
                   <div className="absolute top-0 right-0 w-px h-full bg-current" />
                 </div>

                 <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                   <Image
                     src={imgSrc}
                     alt={title}
                     fill
                     sizes="100vw"
                     className="object-cover transition-transform duration-700 group-hover:scale-105"
                     loading="lazy"
                     style={{
                       position: "absolute",
                       inset: 0,
                       color: "transparent",
                     }}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 </div>

                 <div className="relative p-6">
                   <div className="flex items-center gap-2 mb-4">
                     <span className="text-xs tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono">
                       {category}
                     </span>
                     <div className="w-4 h-px bg-zinc-300 dark:bg-zinc-700" />
                     <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                       {year}
                     </span>
                   </div>

                   <h3 className="text-xl font-light text-zinc-900 dark:text-zinc-100 mb-3 tracking-tight group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-300">
                     {title}
                   </h3>

                   <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed line-clamp-2 mb-6">
                     {description}
                   </p>

                   <div className="flex flex-wrap gap-2 mb-6">
                     {tags.map((tag, i) => (
                       <span
                         key={i}
                         className={`px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 font-mono ${
                           tag.startsWith("+")
                             ? "text-zinc-500 dark:text-zinc-400"
                             : "text-zinc-700 dark:text-zinc-300"
                         }`}
                       >
                         {tag}
                       </span>
                     ))}
                   </div>

                   <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                       <a
                         href={href}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="p-2 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors duration-300"
                       >
                         <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width={24}
                           height={24}
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth={2}
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           className="w-4 h-4 text-zinc-700 dark:text-zinc-300"
                         >
                           <path d="M15 3h6v6" />
                           <path d="M10 14 21 3" />
                           <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                         </svg>
                       </a>
                     </div>
                     <div className="w-4 h-px bg-zinc-300 dark:bg-zinc-700 group-hover:w-8 transition-all duration-300" />
                   </div>
                 </div>
               </div>
             )
           )}
         </div>

         <div className="text-center animate-in fade-in duration-700 delay-600">
           <a href="/projects">
             <button className="inline-flex items-center justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 bg-transparent hover:border-zinc-400 dark:hover:border-zinc-600 h-10 group px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-mono text-sm uppercase tracking-wider transition-all duration-300">
               <span className="flex items-center gap-2">
                 View All Projects
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   width={24}
                   height={24}
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="currentColor"
                   strokeWidth={2}
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
                 >
                   <path d="M5 12h14" />
                   <path d="m12 5 7 7-7 7" />
                 </svg>
               </span>
             </button>
           </a>
         </div>
       </div>
     </section>
   );
}