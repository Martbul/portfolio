"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PenTool, Star } from "lucide-react";
import SelectedProjects from "@/sections/selectedProjects/SelectedProjects";
import SkillsAndTechnologies from "@/sections/skillsAndTechnologies/SkillsAndTechnologies";
import { GitHubActivity } from "@/sections/githubActivity/GitHubActivity";
import ConnectSection from "@/sections/connect/Connect";
import Footer from "@/sections/footer/Footer";
import Navbar from "@/sections/navigation/Navigation";

const Portfolio = () => {
  const GridOverlay = () => (
    <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
      <div className="max-w-7xl mx-auto h-full grid grid-cols-12">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-zinc-200 last:border-r-0" />
        ))}
      </div>
    </div>
  );

  const articles = [
    {
      href: "/blog/allow-all-domains-nextjs-images",
      imageSrc: "/blogs/Next.Js-Image-Config.webp",
      imageAlt: "How to Allow All Domains for Image Configuration in Next.js?",
      date: "Jan 8, 2025",
      title: "How to Allow All Domains for Image Configuration in Next.js?",
      description:
        "Learn how to configure Next.js to allow specific or all domains for external images using the Image component.",
      authorName: "Nabin Khair",
      authorImg: "/nabin.png",
      animationDelay: 0,
    },
    {
      href: "/blog/brutalist-minimalism-architectural-web-design",
      imageSrc: "/blogs/brutalist-minimalism.webp",
      imageAlt: "Brutalist Minimalism: The Art of Architectural Web Design",
      date: "Jun 6, 2025",
      title: "Brutalist Minimalism: The Art of Architectural Web Design",
      description:
        "Explore the blend of brutalist design principles with minimalism for impactful web experiences.",
      authorName: "Nabin Khair",
      authorImg: "/nabin.png",
      animationDelay: 150,
    },
    {
      href: "/blog/challenges-of-graphql",
      imageSrc: "/blogs/graphql-challenges.webp",
      imageAlt: "Challenges of Implementing GraphQL in Modern Web Applications",
      date: "Feb 15, 2025",
      title: "Challenges of Implementing GraphQL in Modern Web Applications",
      description:
        "Understand the common hurdles developers face when integrating GraphQL into complex web projects.",
      authorName: "Nabin Khair",
      authorImg: "/nabin.png",
      animationDelay: 300,
    },
  ];

  return (
    <div className="text-zinc-900 bg-white">

      <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          {[0, 20, 40].map((left) => (
            <div
              key={left}
              className={`absolute top-0 left-[${left}px] w-px h-full bg-current`}
            />
          ))}
          {[40, 20, 0].map((right) => (
            <div
              key={right}
              className={`absolute top-0 right-[${right}px] w-px h-full bg-current`}
            />
          ))}
        </div>
        <div className="absolute inset-0 opacity-3 dark:opacity-5">
          <div className="absolute top-1/4 left-0 w-full h-px bg-current" />
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-current" />
        </div>
        <div className="container relative z-10 px-4 md:px-6 max-w-6xl mx-auto py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8 animate-in fade-in duration-1000 slide-in-from-bottom-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 w-fit animate-in fade-in duration-700 delay-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-mono tracking-wider uppercase text-zinc-700 dark:text-zinc-300">
                  Open to Work
                </span>
              </div>
              <div className="space-y-6 animate-in fade-in duration-700 delay-300">
                <div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight leading-tight">
                    Martin
                    <br />
                    <span className="font-serif italic">Kovachki</span>
                  </h1>
                  <div className="w-20 h-px bg-zinc-900 dark:bg-zinc-100 mt-6"></div>
                </div>
              </div>
              <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-xl animate-in fade-in duration-700 delay-400">
                Web Developer building modern applications with Next.js,
                TypeScript, and React. Currently learning backend technologies
                and focusing on creating functional, accessible web experiences.
              </p>
              <div className="flex flex-col gap-4 animate-in fade-in duration-700 delay-500">
                {[
                  {
                    icon: PenTool,
                    title: "Focus",
                    desc: "Web development",
                  },
                  {
                    icon: Star,
                    title: "Learning",
                    desc: "Backend technologies & cloud platforms",
                  },
                  {
                    icon: Star,
                    title: "Interested",
                    desc: "Low level programing",
                  },
                ].map(({ icon: Icon, title, desc }, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
                  >
                    <div className="p-2 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                      <Icon className="h-4 w-4 text-zinc-700 dark:text-zinc-300" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono">
                        {title}
                      </div>
                      <div className="font-light text-zinc-900 dark:text-zinc-100">
                        {desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in duration-700 delay-600">
                 
                <Link href="/nabin_khair.pdf" target="_blank" download>
                  <Button  className="w-full sm:w-auto">
                    📄 My Resume
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:flex items-center justify-center animate-in fade-in duration-1000 delay-400 slide-in-from-bottom-4">
              <div className="relative">
                <div className="absolute -inset-8 opacity-20 dark:opacity-30">
                  <div className="absolute top-0 left-0 w-4 h-4 border border-zinc-400 dark:border-zinc-600 rotate-45"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border border-zinc-400 dark:border-zinc-600"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border border-zinc-400 dark:border-zinc-600"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border border-zinc-400 dark:border-zinc-600 rotate-45"></div>
                </div>
                <div className="relative overflow-hidden border border-zinc-200 dark:border-zinc-800">
                  <Image
                    alt="Nabin Khair"
                    width={380}
                    height={380}
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    src="/nabin.png"
                  />
                </div>
                <div className="absolute top-4 -left-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-3 py-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-zinc-900 dark:bg-zinc-100"></div>
                  <span className="text-xs font-mono uppercase tracking-wide text-zinc-700 dark:text-zinc-300">
                    Frontend
                  </span>
                </div>
                <div className="absolute bottom-4 -right-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-3 py-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-zinc-900 dark:bg-zinc-100"></div>
                  <span className="text-xs font-mono uppercase tracking-wide text-zinc-700 dark:text-zinc-300">
                    Backend
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SelectedProjects />

      <SkillsAndTechnologies />

      {/* Section: GitHub Activity */}
      <section className="relative bg-zinc-50 px-6 py-20">
        <GridOverlay />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="w-10 h-px bg-zinc-300" />
              <span className="text-sm uppercase tracking-wider font-mono text-zinc-500">
                GitHub Activity
              </span>
              <div className="w-10 h-px bg-zinc-300" />
            </div>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Contributing to open-source, building side projects, and solving
              real-world problems.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <GitHubActivity />
          </div>
        </div>
      </section>

      <section className="relative px-6 py-20 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
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
                  Latest Articles
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-zinc-900 dark:text-zinc-100 mb-6 tracking-tight">
                Recent
                <br />
                <span className="font-serif italic">Blog Posts</span>
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                Insights, tutorials, and thoughts on web development, design,
                and technology trends.
              </p>
            </div>
            <div className="animate-in fade-in duration-700 delay-300">
              <a href="/blog" aria-label="Explore more blog posts">
                <button className="inline-flex items-center justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 bg-transparent hover:border-zinc-400 dark:hover:border-zinc-600 h-10 group px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-mono text-sm uppercase tracking-wider transition-all duration-300">
                  <span className="flex items-center gap-2">
                    Explore More
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
                      className="lucide lucide-arrow-right h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <div
                key={article.href}
                className="animate-in fade-in duration-700 slide-in-from-bottom-4"
                style={{ animationDelay: `${article.animationDelay}ms` }}
              >
                <a
                  href={article.href}
                  className="group block relative overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700"
                >
                  <div className="absolute inset-0 opacity-5 dark:opacity-10">
                    <div className="absolute top-0 left-0 w-px h-full bg-current"></div>
                    <div className="absolute top-0 right-0 w-px h-full bg-current"></div>
                  </div>
                  <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <img
                      alt={article.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="100vw"
                      src={article.imageSrc}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="relative p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
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
                          className="lucide lucide-calendar w-3 h-3"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect
                            width={18}
                            height={18}
                            x={3}
                            y={4}
                            rx={2}
                          ></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                        <span className="font-mono uppercase tracking-wide">
                          {article.date}
                        </span>
                      </div>
                      <div className="flex items-center -space-x-2">
                        <span
                          className="relative shrink-0 overflow-hidden rounded-full inline-block border-2 w-8 h-8 border-background"
                          data-state="closed"
                          aria-label={`Author: ${article.authorName}`}
                        >
                          <img
                            className="aspect-square h-full w-full"
                            alt={article.authorName}
                            src={article.authorImg}
                          />
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-light text-zinc-900 dark:text-zinc-100 mb-3 tracking-tight group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed line-clamp-2 mb-6">
                      {article.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-zinc-700 dark:text-zinc-300 group-hover:gap-3 transition-all duration-300">
                      <span className="text-xs tracking-wide font-mono uppercase">
                        Read Article
                      </span>
                      <div className="w-4 h-px bg-zinc-700 dark:bg-zinc-300 group-hover:w-6 transition-all duration-300"></div>
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
                        className="lucide lucide-arrow-right w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConnectSection />

    </div>
  );
};

export default Portfolio;
