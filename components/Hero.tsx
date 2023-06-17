"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

import Image from "next/image";
import Chrome from "@/public/chrome.svg";
import FireFox from "@/public/firefox.svg";
import Edge from "@/public/edge.svg";
import Screenshot from "@/public/screenshot.png";
import Logo from "@/public/logo.png";

import NAVIGATION from "../constants/navigation";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white h-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Rate My GMU Professors</span>
              <Image
                priority
                src={Logo}
                className="h-8 w-auto"
                alt="Rate My GMU Professors Logo"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {NAVIGATION.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Contact Us <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Rate My GMU Professors</span>
                {/* <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                /> */}

                <Image
                  priority
                  src={Logo}
                  className="h-8 w-auto"
                  alt="Rate My GMU Professors Logo"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {NAVIGATION.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <main>
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-green-100/20">
          <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
            <div className="px-6 lg:px-0 lg:pt-4">
              <div className="mx-auto max-w-2xl">
                <div className="max-w-lg">
                  <div className="mt-24 sm:mt-32 lg:mt-16">
                    <a href="#" className="inline-flex space-x-6">
                      <span className="rounded-full bg-green-600/10 px-3 py-1 text-sm font-semibold leading-6 text-green-600 ring-1 ring-inset ring-green-600/10">
                        What's new
                      </span>
                      <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                        <span>Just shipped v2.2.0</span>
                        <ChevronRightIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </a>
                  </div>
                  <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Rate My GMU Professors
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Our extension seamlessly integrates Rate My Professor scores
                    and reviews onto GMU Patriot Web, helping you choose the
                    best courses and professors, every time!
                  </p>

                  <div className="flex items-center justify-center gap-4 mt-8 mx-auto">
                    <a
                      href="#"
                      title=""
                      className="inline-flex items-center justify-center w-full px-2 sm:px-4 py-3 text-left text-white bg-gray-900 rounded-lg sm:w-auto hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
                      role="button"
                    >
                      <Image
                        priority
                        src={Chrome}
                        className="h-8 w-8 sm:w-10 sm:h-10"
                        alt="Follow us on Twitter"
                      />
                      <div className="ml-2.5">
                        <span className="block text-xs font-normal leading-none">
                          Download For
                        </span>
                        <span className="block text-lg font-bold leading-tight">
                          Chrome
                        </span>
                      </div>
                    </a>

                    <a
                      href="#"
                      title=""
                      className="inline-flex items-center justify-center w-full px-2 sm:px-4 py-3 text-left text-white bg-gray-900 rounded-lg sm:w-auto hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
                      role="button"
                    >
                      <Image
                        priority
                        src={FireFox}
                        className="h-8 w-8 sm:w-10 sm:h-10"
                        alt="Follow us on Twitter"
                      />

                      <div className="ml-2.5">
                        <span className="block text-xs font-normal leading-none">
                          Download For
                        </span>
                        <span className="block text-lg font-bold leading-tight">
                          FireFox
                        </span>
                      </div>
                    </a>

                    <a
                      href="#"
                      title=""
                      className="inline-flex items-center justify-center w-full px-2 sm:px-4 py-3 text-left text-white bg-gray-900 rounded-lg sm:w-auto hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
                      role="button"
                    >
                      <Image
                        priority
                        src={Edge}
                        className="h-8 w-8 sm:w-10 sm:h-10"
                        alt="Follow us on Twitter"
                      />

                      <div className="ml-2.5">
                        <span className="block text-xs font-normal leading-none">
                          Download For
                        </span>
                        <span className="block text-lg font-bold leading-tight">
                          Edge
                        </span>
                      </div>
                    </a>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
            <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
              <div
                className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-green-600/10 ring-1 ring-green-50 md:-mr-20 lg:-mr-36"
                aria-hidden="true"
              />
              <div className="shadow-lg md:rounded-3xl">
                <div className="bg-green-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                  <div
                    className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-green-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                    aria-hidden="true"
                  />

                  {/* <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                  <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                    <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                      <img
                        src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                        alt="App screenshot"
                        width={800}
                        height={600}
                        className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                      />
                    </div>
                  </div>
                </div> */}
                  <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                    <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                      {/* <img
                      src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                      alt="App screenshot"
                      width={800}
                      height={600}
                      className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                    /> */}

                      <Image
                        priority
                        src={Screenshot}
                        className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                        alt="Follow us on Twitter"
                      />
                    </div>
                    <div
                      className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>
      </main>
    </div>
  );
}
