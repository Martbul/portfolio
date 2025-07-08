"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, FileIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 h-16 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-zinc-400 dark:bg-zinc-600"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-zinc-400 dark:bg-zinc-600"></div>
      </div>

      <div className="relative mx-auto flex h-full items-center justify-between px-6 max-w-5xl">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-3 group transition-all duration-300"
          >
            <div className="relative p-1 border border-zinc-200 dark:border-zinc-800 group-hover:border-zinc-300 dark:group-hover:border-zinc-700 transition-colors duration-300">
              <Image
                alt="Martin Kovachki"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon.35491b33.png&w=48&q=75"
                width={24}
                height={24}
                className="grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-medium text-zinc-900 dark:text-zinc-100 text-sm tracking-wide">
                M.Kovachki
              </span>
              <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 group-hover:bg-zinc-400 dark:group-hover:bg-zinc-600 transition-colors duration-300"></div>
            </div>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-light font-mono uppercase tracking-wide transition-all duration-300 hover:scale-[1.02] ${
                    isActive
                      ? "text-zinc-900 dark:text-zinc-100 font-semibold"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="#contact">
            <Button
              variant="default"
              size="sm"
              className="h-8 px-3 font-mono text-xs uppercase tracking-wider gap-2"
            >
              <Mail className="w-3 h-3" />
            </Button>
          </a>

          <div className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 text-zinc-900 dark:text-zinc-100 border-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="mobile-menu"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>

          <a href="#contact">
            <Button
              variant="default"
              size="sm"
              className="h-8 px-3 font-mono text-xs uppercase tracking-wider gap-2"
            >
              <FileIcon className="w-3 h-3" />
            </Button>
          </a>

          <div className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 text-zinc-900 dark:text-zinc-100 border-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="mobile-menu"
            >
              <FileIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
