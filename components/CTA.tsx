import React from "react";

import Downloads from "./Downloads";
import { Carousel } from "flowbite-react";

export default function CTA() {
  return (
    <section className="bg-green-500 dark:bg-gray-900">
      <div className="flex justify-center py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">
        <div className="max-w-3xl p-6 bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Take Your GMU Course Selection to the Next Level!
            </h2>
            <p className="mb-6 lg:mb-8 font-medium text-gray-500 dark:text-gray-400 md:text-lg">
              Say goodbye to endless tab-switching and hello to a smoother, more
              informed course selection process. Your ideal academic experience
              is just a click away.
            </p>
          </div>
          <Downloads />
        </div>
      </div>
    </section>
  );
}
