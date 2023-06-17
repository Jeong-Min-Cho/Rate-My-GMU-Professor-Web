import Image from "next/image";

import CeramicDrip from "@/public/userIcons/CeramicDrip.png";
import ctols from "@/public/userIcons/ctols.png";
import GravyFiesta from "@/public/userIcons/GravyFiesta.png";
import Gumbo67 from "@/public/userIcons/Gumbo67.png";
import HelloSpork from "@/public/userIcons/HelloSpork.png";
import kyeommie from "@/public/userIcons/kyeommie.png";
import nhamralizoda from "@/public/userIcons/nhamralizoda.png";
import pet_cheeto from "@/public/userIcons/pet_cheeto.png";
import Shishjakob from "@/public/userIcons/Shishjakob.png";
import stxlights from "@/public/userIcons/stxlights.png";
import tartilj from "@/public/userIcons/tartilj.png";
import wiriux from "@/public/userIcons/wiriux.png";

const testimonials = [
  [
    [
      {
        body: "Well done!! Just added the extension and it works great!",
        author: {
          name: "HelloSpork",
          handle: "u/HelloSpork",
          imageUrl: HelloSpork,
        },
      },
      {
        body: "This is awesome! Just tested it and it works great. So nice to have a snapshot right on the registration page. Thank you!",
        author: {
          name: "ctols",
          handle: "u/ctols",
          imageUrl: ctols,
        },
      },
      {
        body: "What a stupidly freaking amazing idea! I’m jealous I didn’t think of it Lolol.",
        author: {
          name: "wiriux",
          handle: "u/wiriux",
          imageUrl: wiriux,
        },
      },

      // More testimonials...
    ],
    [
      {
        body: "Damn I wish it wasn’t my last semester. This is invaluable.",
        author: {
          name: "Gumbo67",
          handle: "u/Gumbo67",
          imageUrl: Gumbo67,
        },
      },
      {
        body: "This extension has been saving my ass for years, thank you sm!!",
        author: {
          name: "kyeommie",
          handle: "u/kyeommie",
          imageUrl: kyeommie,
        },
      },
      {
        body: "On one hand I am incredibly glad for future students who can use this, on the other hand, I'm entering into my last semester and this would have saved me so much time in years past, so I'm a bit salty nothing like this existed for me. Either way, great job!",
        author: {
          name: "Shishjakob",
          handle: "u/Shishjakob",
          imageUrl: Shishjakob,
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: "Brilliant. I wish I had this the last few semesters! Would’ve saved me so much time",
        author: {
          name: "tartilj",
          handle: "u/tartilj",
          imageUrl: tartilj,
        },
      },
      {
        body: "I used it on the classic PatriotWeb registration and it works great!! Thank you so much for this, it'll be very useful to lots of students.",
        author: {
          name: "stxrlights",
          handle: "u/stxrlights",
          imageUrl: stxlights,
        },
      },
      {
        body: "Hey, just want to thank you for this tool. It is a huge time saver when browsing and registering for classes.",
        author: {
          name: "pet_cheeto",
          handle: "u/pet_cheeto",
          imageUrl: pet_cheeto,
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "This is so incredibly helpful! So much of the time I spend scheduling is looking up professors to ensure I’m not stuck with.",
        author: {
          name: "GravyFiesta",
          handle: "u/GravyFiesta",
          imageUrl: GravyFiesta,
        },
      },
      {
        body: "I have already graduated, but I just wanted to say thank you, because I used it while registering and it was really helpful. Thank you!",
        author: {
          name: "nhamralizoda",
          handle: "u/nhamralizoda",
          imageUrl: nhamralizoda,
        },
      },
      {
        body: "You are an absolute legend mate. Imma get it asap.",
        author: {
          name: "CeramicDrip",
          handle: "u/CeramicDrip",
          imageUrl: CeramicDrip,
        },
      },
      // More testimonials...
    ],
  ],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Testimonials() {
  return (
    <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#e7fc89] to-[#8bff80]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        aria-hidden="true"
      >
        <div
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#e7fc89] to-[#8bff80] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-green-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hear from students who have used Rate My GMU Professors
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <Image
                          className="h-10 w-10 rounded-full bg-gray-50"
                          src={testimonial.author.imageUrl}
                          alt=""
                          width={40}
                          height={40}
                        />
                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                          <div className="text-gray-600">{`${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
