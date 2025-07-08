import React from "react";

export default function AboutPage() {
   return (
     <>
       <section className="relative px-6 py-24 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-50 dark:bg-zinc-900">
         {/* Vertical Lines */}
         <div className="absolute inset-0 opacity-5 dark:opacity-10">
           <div className="absolute top-0 left-0 w-px h-full bg-current" />
           <div className="absolute top-0 left-20 w-px h-full bg-current" />
           <div className="absolute top-0 left-40 w-px h-full bg-current" />
           <div className="absolute top-0 right-40 w-px h-full bg-current" />
           <div className="absolute top-0 right-20 w-px h-full bg-current" />
           <div className="absolute top-0 right-0 w-px h-full bg-current" />
         </div>

         {/* Horizontal Lines */}
         <div className="absolute inset-0 opacity-3 dark:opacity-5">
           <div className="absolute top-16 left-0 w-full h-px bg-current" />
           <div className="absolute bottom-16 left-0 w-full h-px bg-current" />
         </div>

         {/* Content */}
         <div className="relative z-10 max-w-4xl mx-auto text-center animate-in fade-in duration-1000 slide-in-from-bottom-4">
           {/* "About Me" heading row */}
           <div className="flex items-center justify-center gap-4 mb-8 animate-in fade-in duration-700 delay-200">
             <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
             <span className="text-sm tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono">
               About Me
             </span>
             <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
           </div>

           {/* Main Heading */}
           <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-zinc-900 dark:text-zinc-100 mb-8 tracking-tight leading-tight animate-in fade-in duration-700 delay-300">
             Behind the
             <br />
             <span className="font-serif italic">Code</span>
           </h1>

           {/* Description Paragraphs */}
           <div className="space-y-6 text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto animate-in fade-in duration-700 delay-400">
             <p>
               MERN and Next.js Developer with hands-on experience in DevOps,
               cloud platforms like AWS and Cloudflare, and a strong foundation
               in full-stack development.
             </p>
             <p>
               3+ years of expertise in UI/UX design and two year of full-stack
               development, collaborating with clients to deliver high-quality
               projects. Adept at deploying, managing, and scaling applications
               using Vercel, Cloudflare Pages, and AWS.
             </p>
           </div>
         </div>

         {/* Decorative Shapes */}
         <div className="absolute bottom-8 left-8 opacity-20 dark:opacity-30">
           <div className="w-4 h-4 border border-zinc-400 dark:border-zinc-600 rotate-45" />
         </div>
         <div className="absolute top-8 right-8 opacity-20 dark:opacity-30">
           <div className="w-6 h-6 border border-zinc-400 dark:border-zinc-600" />
         </div>
       </section>

       <TechnologiesSection />
       <OnlinePresenceSection />
       <EducationSection />
       <RecognitionSection />
     </>
   );
};


const TechnologiesSection: React.FC = () => {
  return (
    <section className="relative px-6 py-20 bg-white dark:bg-zinc-950">
      <div className="absolute inset-0 opacity-3 dark:opacity-5">
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
              Technical Skills
            </span>
            <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-zinc-900 dark:text-zinc-100 mb-6 tracking-tight">
            Technologies I
            <br />
            <span className="font-serif italic">Work With</span>
          </h2>
        </div>

        <div className="space-y-12">
          {/* Frontend Development */}
          <div
            className="animate-in fade-in duration-700 slide-in-from-bottom-4"
            style={{ animationDelay: "0ms" }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight">
                Frontend Development
              </h3>
              <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800"></div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase tracking-wide">
                5 Skills
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {/* React.js */}
              <div
                className="group relative overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-500"
                style={{ animationDelay: "0ms" }}
              >
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute top-0 left-0 w-px h-full bg-current"></div>
                  <div className="absolute top-0 right-0 w-px h-full bg-current"></div>
                </div>
                <div className="relative p-4 text-center">
                  <div className="flex items-center justify-center mb-3">
                    {/* Placeholder React icon */}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Insert React icon paths here */}
                      <circle cx="12" cy="12" r="2" fill="currentColor" />
                    </svg>
                  </div>
                  <h4 className="text-xs text-zinc-700 dark:text-zinc-300 font-light group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors duration-300">
                    React.js
                  </h4>
                </div>
              </div>

              {/* Next.js */}
              <div
                className="group relative overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-500"
                style={{ animationDelay: "50ms" }}
              >
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute top-0 left-0 w-px h-full bg-current"></div>
                  <div className="absolute top-0 right-0 w-px h-full bg-current"></div>
                </div>
                <div className="relative p-4 text-center">
                  <div className="flex items-center justify-center mb-3">
                    {/* Placeholder Next.js icon */}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Insert Next.js icon paths here */}
                      <path d="M5 3v18l14-9L5 3z" />
                    </svg>
                  </div>
                  <h4 className="text-xs text-zinc-700 dark:text-zinc-300 font-light group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors duration-300">
                    Next.js
                  </h4>
                </div>
              </div>

              {/* Tailwind CSS */}
              <div
                className="group relative overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-500"
                style={{ animationDelay: "100ms" }}
              >
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute top-0 left-0 w-px h-full bg-current"></div>
                  <div className="absolute top-0 right-0 w-px h-full bg-current"></div>
                </div>
                <div className="relative p-4 text-center">
                  <div className="flex items-center justify-center mb-3">
                    {/* Tailwind icon */}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: "rgb(6, 182, 212)" }}
                    >
                      {/* Placeholder path */}
                      <path d="M2 12C8 2 16 2 22 12C16 22 8 22 2 12Z" />
                    </svg>
                  </div>
                  <h4 className="text-xs text-zinc-700 dark:text-zinc-300 font-light group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors duration-300">
                    Tailwind CSS
                  </h4>
                </div>
              </div>

              {/* Framer Motion */}
              <div
                className="group relative overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-500"
                style={{ animationDelay: "150ms" }}
              >
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute top-0 left-0 w-px h-full bg-current"></div>
                  <div className="absolute top-0 right-0 w-px h-full bg-current"></div>
                </div>
                <div className="relative p-4 text-center">
                  <div className="flex items-center justify-center mb-3">
                    {/* Framer Motion icon */}
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: "rgb(255, 0, 85)" }}
                    >
                      <path d="M12 12l-8 -8v16l16 -16v16l-4 -4"></path>
                      <path d="M20 12l-8 8l-4 -4"></path>
                    </svg>
                  </div>
                  <h4 className="text-xs text-zinc-700 dark:text-zinc-300 font-light group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors duration-300">
                    Framer Motion
                  </h4>
                </div>
              </div>

              {/* JavaScript */}
              <div
                className="group relative overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-500"
                style={{ animationDelay: "200ms" }}
              >
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute top-0 left-0 w-px h-full bg-current"></div>
                  <div className="absolute top-0 right-0 w-px h-full bg-current"></div>
                </div>
                <div className="relative p-4 text-center">
                  <div className="flex items-center justify-center mb-3">
                    {/* JavaScript icon */}
                    <svg
                      stroke="none"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: "rgb(241, 224, 90)" }}
                    >
                      <path d="M2 2h20v20H2z" fill="none"></path>
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm4.5 13.75c-.25.5-.75.75-1.25.75s-.75-.25-.75-.75v-6.5h-1.5v6.75c0 1.5 1 2.5 2.5 2.5 1.25 0 2.25-.75 2.25-2 0-1.25-1-1.75-1.25-1.75zM8.75 11.25h1.5v1.5h-1.5v-1.5z"></path>
                    </svg>
                  </div>
                  <h4 className="text-xs text-zinc-700 dark:text-zinc-300 font-light group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors duration-300">
                    JavaScript
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Backend Development */}
          <div
            className="animate-in fade-in duration-700 slide-in-from-bottom-4"
            style={{ animationDelay: "100ms" }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight">
                Backend Development
              </h3>
              <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800"></div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase tracking-wide">
                3 Skills
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {/* Node.js */}
              <div
                className="group relative overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-500"
                style={{ animationDelay: "0ms" }}
              >
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute top-0 left-0 w-px h-full bg-current"></div>
                  <div className="absolute top-0 right-0 w-px h-full bg-current"></div>
                </div>
                <div className="relative p-4 text-center">
                  <div className="flex items-center justify-center mb-3">
                    {/* Node.js icon */}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: "rgb(135, 201, 80)" }}
                    >
                      <path d="M12 2L2 7v10l10 5 10-5V7z" />
                    </svg>
                  </div>
                  <h4 className="text-xs text-zinc-700 dark:text-zinc-300 font-light group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors duration-300">
                    Node.js
                  </h4>
                </div>
              </div>

              {/* Express.js */}
              <div
                className="group relative overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-500"
                style={{ animationDelay: "50ms" }}
              >
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute top-0 left-0 w-px h-full bg-current"></div>
                  <div className="absolute top-0 right-0 w-px h-full bg-current"></div>
                </div>
                <div className="relative p-4 text-center">
                  <div className="flex items-center justify-center mb-3">
                    {/* Placeholder Express.js icon */}
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: "rgb(30, 30, 30)" }}
                    >
                      <path d="M4 12h16"></path>
                      <path d="M4 16h16"></path>
                      <path d="M4 8h16"></path>
                    </svg>
                  </div>
                  <h4 className="text-xs text-zinc-700 dark:text-zinc-300 font-light group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors duration-300">
                    Express.js
                  </h4>
                </div>
              </div>

              {/* MongoDB */}
              <div
                className="group relative overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-500"
                style={{ animationDelay: "100ms" }}
              >
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute top-0 left-0 w-px h-full bg-current"></div>
                  <div className="absolute top-0 right-0 w-px h-full bg-current"></div>
                </div>
                <div className="relative p-4 text-center">
                  <div className="flex items-center justify-center mb-3">
                    {/* MongoDB icon */}
                    <svg
                      stroke="none"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: "rgb(0, 255, 128)" }}
                    >
                      <path d="M12 2L4 21l8 1 8-1-8-19z" />
                    </svg>
                  </div>
                  <h4 className="text-xs text-zinc-700 dark:text-zinc-300 font-light group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors duration-300">
                    MongoDB
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export const OnlinePresenceSection: React.FC = () => {
  return (
    <section className="relative px-6 py-20 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-0 w-px h-full bg-current" />
        <div className="absolute top-0 left-20 w-px h-full bg-current" />
        <div className="absolute top-0 right-20 w-px h-full bg-current" />
        <div className="absolute top-0 right-0 w-px h-full bg-current" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
            <span className="text-sm tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono">
              Online Presence
            </span>
            <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-zinc-900 dark:text-zinc-100 mb-6 tracking-tight">
            Find Me
            <br />
            <span className="font-serif italic">Online</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* AWS */}
          <div
            className="animate-in fade-in duration-700 slide-in-from-bottom-4"
            style={{ animationDelay: "0ms" }}
          >
            <a
              href="https://aws.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700"
            >
              <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div className="absolute top-0 left-0 w-px h-full bg-current" />
                <div className="absolute top-0 right-0 w-px h-full bg-current" />
              </div>
              <div className="relative p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 transition-colors duration-300">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-zinc-700 dark:text-zinc-300"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.051-.13zm6.565-6.218c0-1.005.247-1.863.743-2.577.495-.71 1.17-1.25 2.04-1.615.796-.335 1.756-.575 2.912-.72.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875-.302-.43-.78-.65-1.44-.65h-.182c-.48.046-.896.196-1.246.46-.35.27-.575.63-.675 1.096-.06.3-.206.465-.435.51l-2.52-.315c-.248-.06-.372-.18-.372-.39 0-.046.007-.09.022-.15.247-1.29.855-2.25 1.82-2.88.976-.616 2.1-.975 3.39-1.05h.54c1.65 0 2.957.434 3.888 1.29.135.15.27.3.405.48.12.165.224.314.283.45.075.134.15.33.195.57.06.254.105.42.135.51.03.104.062.3.076.615.01.313.02.493.02.553v5.28c0 .376.06.72.165 1.036.105.313.21.54.315.674l.51.674c.09.136.136.256.136.36 0 .12-.06.226-.18.314-1.2 1.05-1.86 1.62-1.963 1.71-.165.135-.375.15-.63.045a6.062 6.062 0 01-.526-.496l-.31-.347a9.391 9.391 0 01-.317-.42l-.3-.435c-.81.886-1.603 1.44-2.4 1.665-.494.15-1.093.227-1.83.227-1.11 0-2.04-.343-2.76-1.034-.72-.69-1.08-1.665-1.08-2.94l-.05-.076zm3.753-.438c0 .566.14 1.02.425 1.364.285.34.675.512 1.155.512.045 0 .106-.007.195-.02.09-.016.134-.023.166-.023.614-.16 1.08-.553 1.424-1.178.165-.28.285-.58.36-.91.09-.32.12-.59.135-.8.015-.195.015-.54.015-1.005v-.54c-.84 0-1.484.06-1.92.18-1.275.36-1.92 1.17-1.92 2.43l-.035-.02zm9.162 7.027c.03-.06.075-.11.132-.17.362-.243.714-.41 1.05-.5a8.094 8.094 0 011.612-.24c.14-.012.28 0 .41.03.65.06 1.05.168 1.172.33.063.09.099.228.099.39v.15c0 .51-.149 1.11-.424 1.8-.278.69-.664 1.248-1.156 1.68-.073.06-.14.09-.197.09-.03 0-.06 0-.09-.012-.09-.044-.107-.12-.064-.24.54-1.26.806-2.143.806-2.64 0-.15-.03-.27-.087-.344-.145-.166-.55-.257-1.224-.257-.243 0-.533.016-.87.046-.363.045-.7.09-1 .135-.09 0-.148-.014-.18-.044-.03-.03-.036-.047-.02-.077 0-.017.006-.03.02-.063v-.06z" />
                    </svg>
                  </div>
                  <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700 group-hover:w-12 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-light text-zinc-900 dark:text-zinc-100 mb-3 tracking-tight group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-300">
                  AWS
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-4">
                  Cloud infrastructure and services for scalable applications
                </p>
                <div className="inline-flex items-center gap-2 text-zinc-700 dark:text-zinc-300 group-hover:gap-3 transition-all duration-300">
                  <span className="text-xs tracking-wide font-mono uppercase">
                    Visit Profile
                  </span>
                  <div className="w-4 h-px bg-zinc-700 dark:bg-zinc-300 group-hover:w-6 transition-all duration-300" />
                  <svg
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          {/* Cloudflare */}
          <div
            className="animate-in fade-in duration-700 slide-in-from-bottom-4"
            style={{ animationDelay: "150ms" }}
          >
            <a
              href="https://cloudflare.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700"
            >
              <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div className="absolute top-0 left-0 w-px h-full bg-current" />
                <div className="absolute top-0 right-0 w-px h-full bg-current" />
              </div>
              <div className="relative p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 transition-colors duration-300">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-zinc-700 dark:text-zinc-300"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.345 1.887C3.285 3.043.203 7.564.2 12.636a11.3 11.3 0 005.842 9.888l.065-.12c.66-1.12 1.36-2.26 2.103-3.42a11.04 11.04 0 01-3.3-7.53c0-4.91 3.71-8.91 8.86-9.46zM23.77 9.71c-.03-.06-.1-.06-.15-.06-1.33.03-2.71.1-4.13.23a17.566 17.566 0 00-2.29.37 12.917 12.917 0 014.8 4.06l.17.23a15.337 15.337 0 01-2.56 2.74c-.36.29-.76.56-1.18.79a14.21 14.21 0 004.36-7.4zm-9.02 4.13a4.4 4.4 0 01-1.3 2.2l.7.73a6.52 6.52 0 002.4-3.67c0-.03 0-.06-.01-.09l-.09-.05c-.96-.54-1.93-1.05-2.93-1.5-.02.2-.02.44-.02.65 0 .37.05.71.22 1.13zm-5.36-2.87a5.76 5.76 0 012.17-1.7 3.57 3.57 0 01-3.08 3.5 4.6 4.6 0 01.9-1.8zm6.39 7.04l-.03.01a2.88 2.88 0 01-1.05 1.32 1.52 1.52 0 01-1.66-.13 6.64 6.64 0 01-3.46-6.3 6.3 6.3 0 013.1-5.43c.11-.08.22-.16.33-.23a5.6 5.6 0 00-.18 2.41 4.98 4.98 0 001.94 4.2 4.88 4.88 0 002.56 1.07zm2.66-2.24a6.5 6.5 0 00-3.23-3.88 1.04 1.04 0 01-.32-.18l-.04.03a.58.58 0 01-.2.07 6.44 6.44 0 00-.02 1.54 6.16 6.16 0 002.6 4.14 7.21 7.21 0 004.49 1.52 8.22 8.22 0 01-3.58-3.24zm5.97-7.66a3.49 3.49 0 00-3.8-1.37c-2.03.7-3.3 2.25-3.94 4.11a5.38 5.38 0 014.22-1.27 5.4 5.4 0 013.6 2.43zm-7.18 3.66c-.02.07-.04.16-.05.27-.03.14-.03.27-.03.41a6.25 6.25 0 001.97 4.25 6.12 6.12 0 002.75 1.63 4.62 4.62 0 01-4.64-6.56z" />
                    </svg>
                  </div>
                  <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700 group-hover:w-12 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-light text-zinc-900 dark:text-zinc-100 mb-3 tracking-tight group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-300">
                  Cloudflare
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-4">
                  Internet security and performance services
                </p>
                <div className="inline-flex items-center gap-2 text-zinc-700 dark:text-zinc-300 group-hover:gap-3 transition-all duration-300">
                  <span className="text-xs tracking-wide font-mono uppercase">
                    Visit Profile
                  </span>
                  <div className="w-4 h-px bg-zinc-700 dark:bg-zinc-300 group-hover:w-6 transition-all duration-300" />
                  <svg
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          {/* LinkedIn */}
          <div
            className="animate-in fade-in duration-700 slide-in-from-bottom-4"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700"
            >
              <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div className="absolute top-0 left-0 w-px h-full bg-current" />
                <div className="absolute top-0 right-0 w-px h-full bg-current" />
              </div>
              <div className="relative p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 transition-colors duration-300">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-zinc-700 dark:text-zinc-300"
                    >
                      <path d="M20.447 20.452H16.9v-5.569c0-1.328-.026-3.04-1.852-3.04-1.853 0-2.136 1.445-2.136 2.94v5.669h-3.546V9h3.405v1.561h.05c.474-.897 1.633-1.848 3.362-1.848 3.597 0 4.262 2.368 4.262 5.451v6.288zM5.337 7.433c-1.144 0-2.069-.927-2.069-2.069 0-1.144.925-2.069 2.069-2.069s2.069.925 2.069 2.069c0 1.142-.925 2.069-2.069 2.069zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.98 0 1.778-.773 1.778-1.729V1.729C24 .774 23.205 0 22.225 0z" />
                    </svg>
                  </div>
                  <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700 group-hover:w-12 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-light text-zinc-900 dark:text-zinc-100 mb-3 tracking-tight group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-300">
                  LinkedIn
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-4">
                  Professional networking and career development
                </p>
                <div className="inline-flex items-center gap-2 text-zinc-700 dark:text-zinc-300 group-hover:gap-3 transition-all duration-300">
                  <span className="text-xs tracking-wide font-mono uppercase">
                    Visit Profile
                  </span>
                  <div className="w-4 h-px bg-zinc-700 dark:bg-zinc-300 group-hover:w-6 transition-all duration-300" />
                  <svg
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};



const EducationSection: React.FC = () => {
  return (
    <section className="relative px-6 py-20 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="absolute inset-0 opacity-30 dark:opacity-50">
        <div className="absolute top-0 left-0 w-px h-full bg-current" />
        <div className="absolute top-0 left-40 w-px h-full bg-current" />
        <div className="absolute top-0 right-40 w-px h-full bg-current" />
        <div className="absolute top-0 right-0 w-px h-full bg-current" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
            <span className="text-sm tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono">
              Academic Background
            </span>
            <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-zinc-900 dark:text-zinc-100 mb-6 tracking-tight">
            Education &amp;
            <br />
            <span className="font-serif italic">Learning</span>
          </h2>
        </div>

        <div className="space-y-8">
          {/* Bachelor Degree */}
          <div
            className="group relative overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-700 slide-in-from-bottom-4"
            style={{ animationDelay: "0ms" }}
          >
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
              <div className="absolute top-0 left-0 w-px h-full bg-current" />
              <div className="absolute top-0 right-0 w-px h-full bg-current" />
            </div>

            <div className="relative p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-300">
                    Bachelor of Computer Engineering
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 font-light mt-1">
                    IOE Purwanchal Campus, Dharan
                  </p>
                </div>

                <div className="text-right">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase tracking-wide">
                      2023 - 2027
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                Currently pursuing Computer Engineering with focus on software
                development and system design.
              </p>
            </div>
          </div>

          {/* High School */}
          <div
            className="group relative overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-700 slide-in-from-bottom-4"
            style={{ animationDelay: "200ms" }}
          >
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
              <div className="absolute top-0 left-0 w-px h-full bg-current" />
              <div className="absolute top-0 right-0 w-px h-full bg-current" />
            </div>

            <div className="relative p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-300">
                    High School (+2)
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 font-light mt-1">
                    Galaxy Secondary School, Dhangadhi
                  </p>
                </div>

                <div className="text-right">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase tracking-wide">
                      2021 - 2023
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                Completed higher secondary education with distinction in Science
                stream.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};




export  function RecognitionSection() {
  return (
    <section className="relative px-6 py-20 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-0 w-px h-full bg-current"></div>
        <div className="absolute top-0 left-20 w-px h-full bg-current"></div>
        <div className="absolute top-0 right-20 w-px h-full bg-current"></div>
        <div className="absolute top-0 right-0 w-px h-full bg-current"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700"></div>
            <span className="text-sm tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono">
              Recognition
            </span>
            <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-zinc-900 dark:text-zinc-100 mb-6 tracking-tight">
            Achievements &amp;
            <br />
            <span className="font-serif italic">Milestones</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1 */}
          <div
            className="group relative overflow-hidden bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-700 slide-in-from-bottom-4"
            style={{ animationDelay: "0ms" }}
          >
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
              <div className="absolute top-0 left-0 w-px h-full bg-current"></div>
              <div className="absolute top-0 right-0 w-px h-full bg-current"></div>
            </div>
            <div className="relative p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 transition-colors duration-300">
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
                    className="lucide lucide-trophy w-6 h-6 text-zinc-700 dark:text-zinc-300"
                  >
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                    <path d="M4 22h16"></path>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                  </svg>
                </div>
                <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700 group-hover:w-12 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-light text-zinc-900 dark:text-zinc-100 mb-3 tracking-tight group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-300">
                Nepali Educate Platform
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-4">
                Built a content platform achieving 100,000+ monthly visits
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase tracking-wide">
                  2023
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="group relative overflow-hidden bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-700 slide-in-from-bottom-4"
            style={{ animationDelay: "150ms" }}
          >
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
              <div className="absolute top-0 left-0 w-px h-full bg-current"></div>
              <div className="absolute top-0 right-0 w-px h-full bg-current"></div>
            </div>
            <div className="relative p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 transition-colors duration-300">
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
                    className="lucide lucide-code-xml w-6 h-6 text-zinc-700 dark:text-zinc-300"
                  >
                    <path d="m18 16 4-4-4-4"></path>
                    <path d="m6 8-4 4 4 4"></path>
                    <path d="m14.5 4-5 16"></path>
                  </svg>
                </div>
                <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700 group-hover:w-12 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-light text-zinc-900 dark:text-zinc-100 mb-3 tracking-tight group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-300">
                Chrome Extension
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-4">
                Successfully developed and published Google Bulk Photos Deleter
                with Stripe integration
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase tracking-wide">
                  2024
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="group relative overflow-hidden bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-700 slide-in-from-bottom-4"
            style={{ animationDelay: "300ms" }}
          >
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
              <div className="absolute top-0 left-0 w-px h-full bg-current"></div>
              <div className="absolute top-0 right-0 w-px h-full bg-current"></div>
            </div>
            <div className="relative p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 transition-colors duration-300">
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
                    className="lucide lucide-users w-6 h-6 text-zinc-700 dark:text-zinc-300"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700 group-hover:w-12 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-light text-zinc-900 dark:text-zinc-100 mb-3 tracking-tight group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-300">
                Client Projects
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-4">
                Delivered multiple successful projects including Express News,
                UncleSams Tech, and Receipt Vault
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase tracking-wide">
                  2023-2024
                </span>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="group relative overflow-hidden bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-700 slide-in-from-bottom-4"
            style={{ animationDelay: "450ms" }}
          >
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
              <div className="absolute top-0 left-0 w-px h-full bg-current"></div>
              <div className="absolute top-0 right-0 w-px h-full bg-current"></div>
            </div>
            <div className="relative p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 transition-colors duration-300">
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
                    className="lucide lucide-book-open w-6 h-6 text-zinc-700 dark:text-zinc-300"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700 group-hover:w-12 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-light text-zinc-900 dark:text-zinc-100 mb-3 tracking-tight group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-300">
                Technical Writing
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-4">
                Published comprehensive technical documentation and tutorials
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase tracking-wide">
                  2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
