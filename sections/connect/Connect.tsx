"use client";

import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

const ConnectSection = () => {
  return (
    <section
      id="contact"
      className="relative px-6 py-20 bg-white dark:bg-zinc-950"
    >
      <div className="absolute inset-0 opacity-3 dark:opacity-5">
        <div className="absolute top-0 left-0 w-px h-full bg-current"></div>
        <div className="absolute top-0 left-40 w-px h-full bg-current"></div>
        <div className="absolute top-0 right-40 w-px h-full bg-current"></div>
        <div className="absolute top-0 right-0 w-px h-full bg-current"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-12 animate-in fade-in duration-700">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700"></div>
            <span className="text-sm tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono">
              Let's Connect
            </span>
            <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-zinc-900 dark:text-zinc-100 mb-6 tracking-tight">
            Let's Work
            <br />
            <span className="font-serif italic">Together</span>
          </h2>

          <div className="w-20 h-px bg-zinc-900 dark:bg-zinc-100 mx-auto mb-8"></div>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            I'm currently available for freelance projects and full-time
            opportunities. If you're interested in working together or have an
            exciting project in mind, let's have a conversation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-center gap-4 animate-in fade-in duration-700 delay-600">
          <Link href="/hire-me">
            <button className="inline-flex items-center justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 border-zinc-900 dark:border-zinc-100 hover:border-zinc-800 dark:hover:border-zinc-200 h-10 group px-8 w-full py-4 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 border-0 font-mono text-sm uppercase tracking-wider transition-all duration-300">
              <span className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                Get in Touch
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </Link>

          <Link href="/projects">
            <button className="inline-flex items-center justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 bg-transparent hover:border-zinc-400 dark:hover:border-zinc-600 h-10 group px-6 w-full py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-mono text-sm uppercase tracking-wider transition-all duration-300">
              View My Work
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 animate-in fade-in duration-700 delay-500">
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <div className="text-center">
              <div className="text-sm font-mono uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-2">
                Email
              </div>
              <div className="font-light text-zinc-900 dark:text-zinc-100">
                martbul01@gmail.com
              </div>
            </div>
          </div>

          <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <div className="text-center">
              <div className="text-sm font-mono uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-2">
                Response Time
              </div>
              <div className="font-light text-zinc-900 dark:text-zinc-100">
                Within a few hours
              </div>
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
  );
};

export default ConnectSection;
