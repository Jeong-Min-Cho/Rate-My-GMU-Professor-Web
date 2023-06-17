import React from "react";

import { BoltIcon } from "@heroicons/react/24/solid";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

export default function Features() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Enhanced Features for an Unparalleled User Experience
        </h2>
        <p className="text-gray-500 sm:text-xl dark:text-gray-400">
          Our extension stands out with unique functionalities designed to
          deliver efficiency, elegance, and optimal performance
        </p>
        <div className="mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <BoltIcon className="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500" />
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Lightweight and Efficient
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Our extension, with a size of just 214 KB, ensures quick loading
              and seamless integration without slowing down your system.
            </p>
          </div>
          <div>
            <SparklesIcon className="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500" />
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Aesthetic Design
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Our extension transforms the existing instructor column into a
              customized, visually appealing format that's easy on the eyes and
              simple to navigate.
            </p>
          </div>
          <div>
            <CheckBadgeIcon className="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500" />
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Optimized Performance
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Our extension efficiently fetches professor data through GraphQL
              queries and caching mechanisms, minimizing the server load and
              ensuring rapid data retrieval.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
