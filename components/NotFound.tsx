import React from "react";

import Image from "next/image";
import NotFoundImage from "@/public/NotFoundImage.png";

export default function NotFound() {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="py-16 px-4 mx-auto max-w-screen-xl lg:py-32 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <Image
            src={NotFoundImage}
            width={500}
            height={500}
            className="mx-auto mb-4"
            alt="404 Not Found"
          />

          <h1 className="mb-4 text-2xl font-extrabold text-green-600 dark:text-green-500">
            404 Not Found
          </h1>
          <p className="mb-10 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Whoops! That page doesn’t exist.
          </p>
          <p className="mb-4 text-gray-500 dark:text-gray-400">
            Are you sure you typed in the correct URL?
          </p>
        </div>
      </div>
    </section>
  );
}
