import React from "react";

export default function ContactSection() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
          <div className="relative">
            <main className="max-w-5xl mx-auto border-l border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
              <section className="relative px-6 py-24 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-50 dark:bg-zinc-900">
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute top-0 left-0 w-px h-full bg-current" />
                  <div className="absolute top-0 left-20 w-px h-full bg-current" />
                  <div className="absolute top-0 left-40 w-px h-full bg-current" />
                  <div className="absolute top-0 right-40 w-px h-full bg-current" />
                  <div className="absolute top-0 right-20 w-px h-full bg-current" />
                  <div className="absolute top-0 right-0 w-px h-full bg-current" />
                </div>
                <div className="absolute inset-0 opacity-3 dark:opacity-5">
                  <div className="absolute top-16 left-0 w-full h-px bg-current" />
                  <div className="absolute bottom-16 left-0 w-full h-px bg-current" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto text-center animate-in fade-in duration-1000 slide-in-from-bottom-4">
                  <div className="flex items-center justify-center gap-4 mb-8 animate-in fade-in duration-700 delay-200">
                    <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
                    <span className="text-sm tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono">
                      Let&apos;s Connect
                    </span>
                    <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-zinc-900 dark:text-zinc-100 mb-8 tracking-tight leading-tight animate-in fade-in duration-700 delay-300">
                    Get in
                    <br />
                    <span className="font-serif italic">Touch</span>
                  </h1>
                  <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto animate-in fade-in duration-700 delay-400">
                    Have a project in mind or just want to chat? I&apos;d love
                    to hear from you. Let&apos;s discuss how we can bring your
                    ideas to life.
                  </p>
                </div>
                <div className="absolute bottom-8 left-8 opacity-20 dark:opacity-30">
                  <div className="w-4 h-4 border border-zinc-400 dark:border-zinc-600 rotate-45" />
                </div>
                <div className="absolute top-8 right-8 opacity-20 dark:opacity-30">
                  <div className="w-6 h-6 border border-zinc-400 dark:border-zinc-600" />
                </div>
              </section>
              <div className="grid gap-0 md:grid-cols-[1fr,1.5fr]">
                <div className="order-last md:order-first">
                  <section className="relative px-6 py-20 bg-zinc-50 dark:bg-zinc-900">
                    <div className="absolute inset-0 opacity-5 dark:opacity-10">
                      <div className="absolute top-0 left-0 w-px h-full bg-current" />
                      <div className="absolute top-0 left-20 w-px h-full bg-current" />
                      <div className="absolute top-0 right-0 w-px h-full bg-current" />
                    </div>
                    <div className="relative z-10 max-w-lg mx-auto space-y-12">
                      <div>
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
                          <span className="text-sm tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono">
                            Contact Info
                          </span>
                        </div>
                        <div className="space-y-6">
                          <div
                            className="group animate-in fade-in duration-700 slide-in-from-bottom-4"
                            style={{ animationDelay: "0ms" }}
                          >
                            <a
                              href="mailto:nabinkhair12@gmail.com"
                              className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
                            >
                              <div className="flex h-12 w-12 items-center justify-center bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 transition-colors duration-300">
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
                                  className="lucide lucide-mail h-5 w-5 text-zinc-700 dark:text-zinc-300"
                                >
                                  <rect
                                    width="20"
                                    height="16"
                                    x="2"
                                    y="4"
                                    rx="2"
                                  />
                                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <div className="text-xs tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono mb-1">
                                  Email
                                </div>
                                <div className="text-zinc-900 dark:text-zinc-100 font-light group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-300">
                                  nabinkhair12@gmail.com
                                </div>
                              </div>
                              <div className="w-4 h-px bg-zinc-300 dark:bg-zinc-700 group-hover:w-6 transition-all duration-300" />
                            </a>
                          </div>
                          <div
                            className="group animate-in fade-in duration-700 slide-in-from-bottom-4"
                            style={{ animationDelay: "150ms" }}
                          >
                            <a
                              href="https://maps.google.com/?q=Dharan,Nepal"
                              className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
                            >
                              <div className="flex h-12 w-12 items-center justify-center bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 transition-colors duration-300">
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
                                  className="lucide lucide-map-pin h-5 w-5 text-zinc-700 dark:text-zinc-300"
                                >
                                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                  <circle cx="12" cy="10" r="3" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <div className="text-xs tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono mb-1">
                                  Location
                                </div>
                                <div className="text-zinc-900 dark:text-zinc-100 font-light group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-300">
                                  Dharan, Nepal
                                </div>
                              </div>
                              <div className="w-4 h-px bg-zinc-300 dark:bg-zinc-700 group-hover:w-6 transition-all duration-300" />
                            </a>
                          </div>
                          <div
                            className="group animate-in fade-in duration-700 slide-in-from-bottom-4"
                            style={{ animationDelay: "300ms" }}
                          >
                            <a
                              href="tel:+9779866824524"
                              className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
                            >
                              <div className="flex h-12 w-12 items-center justify-center bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 transition-colors duration-300">
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
                                  className="lucide lucide-phone-call h-5 w-5 text-zinc-700 dark:text-zinc-300"
                                >
                                  <path d="M15 7c0-1.657-1.343-3-3-3m0 0c-.633 0-1.208.254-1.623.66M12 4c-.635 0-1.208.255-1.622.66M15 7v1a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1.5a1 1 0 0 1 1 1v2" />
                                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <div className="text-xs tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono mb-1">
                                  Phone
                                </div>
                                <div className="text-zinc-900 dark:text-zinc-100 font-light group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-300">
                                  +977 9866824524
                                </div>
                              </div>
                              <div className="w-4 h-px bg-zinc-300 dark:bg-zinc-700 group-hover:w-6 transition-all duration-300" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div>
                  <section className="px-6 py-20 bg-white dark:bg-zinc-950">
                    <h2 className="text-2xl font-light text-zinc-900 dark:text-zinc-100 mb-12 tracking-tight leading-tight">
                      Send me a message
                    </h2>
                    <form
                      action="https://formsubmit.co/nabinkhair12@gmail.com"
                      method="POST"
                      className="max-w-xl"
                    >
                      <input type="hidden" name="_captcha" value="false" />
                      <div className="mb-6">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="Your full name"
                          className="w-full p-3 border border-zinc-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="Your email address"
                          className="w-full p-3 border border-zinc-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          placeholder="Write your message here..."
                          className="w-full p-3 border border-zinc-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors duration-300"
                      >
                        Send Message
                      </button>
                    </form>
                  </section>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </main>
  );
};

