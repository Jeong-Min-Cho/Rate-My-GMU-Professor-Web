"use client";

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Carousel } from "flowbite-react";

import Image from "next/image";
import Link from "next/link";

import WebOne from "@/public/mockups/web-1.png";
import WebTwo from "@/public/mockups/web-2.png";
import WebThree from "@/public/mockups/web-3.png";

import Downloads from "@/components/Downloads";
import Header from "@/components/Header";

export default function Hero() {
  return (
    <section id="overview">
      <div className="bg-white lg:h-screen">
        <Header />
        <main>
          <div className="relative isolate overflow-hidden bg-gradient-to-b from-green-100/20">
            <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
              <div className="px-6 lg:px-0 lg:pt-4">
                <div className="mx-auto max-w-2xl">
                  <div className="max-w-lg">
                    <div className="mt-24 sm:mt-32 lg:mt-16">
                      <Link
                        href="https://github.com/Jeong-Min-Cho/Rate-My-GMU-Professors/releases"
                        className="inline-flex space-x-6"
                      >
                        <span className="rounded-full bg-green-600/10 px-3 py-1 text-sm font-semibold leading-6 text-green-600 ring-1 ring-inset ring-green-600/10">
                          What&apos;s new
                        </span>
                        <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                          <span>v2.3.0</span>
                          <ChevronRightIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Link>
                    </div>
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                      Rate My GMU Professors
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      Our extension seamlessly integrates Rate My Professor
                      scores and reviews onto GMU Patriot Web, helping you
                      choose the best courses and professors, every time!
                    </p>

                    <Downloads />
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
                    <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                      <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                        <div className="flex aspect-auto md:h-[55vh] h-[35vh]">
                          <Carousel
                            slideInterval={3000}
                            className="h-full"
                            indicators={false}
                            leftControl={false}
                            rightControl={false}
                          >
                            <Image
                              priority
                              src={WebOne}
                              className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10 h-full"
                              alt="Rate My GMU Professors Screenshot-1"
                              width={800}
                              height={600}
                            />
                            <Image
                              priority
                              src={WebTwo}
                              className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10 h-full"
                              alt="Rate My GMU Professors Screenshot-2"
                              width={800}
                              height={600}
                            />
                            <Image
                              priority
                              src={WebThree}
                              className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10 h-full"
                              alt="Rate My GMU Professors Screenshot-3"
                              width={800}
                              height={600}
                            />
                          </Carousel>
                        </div>
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
    </section>
  );
}
