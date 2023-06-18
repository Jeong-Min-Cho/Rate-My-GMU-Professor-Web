import React from "react";

import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 py-8 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
        <div className="grid lg:grid-cols-3">
          <Link
            href="#"
            className="flex items-center mb-4 text-2xl font-semibold text-gray-900 lg:mb-0 dark:text-white"
          >
            <Image
              src={Logo}
              width={64}
              height={64}
              className="mr-2 h-8 w-8"
              alt="Rate My GMU Professors logo"
            />
            Rate My GMU Professors
          </Link>
          <ul className="flex flex-wrap items-center mb-4 text-sm text-gray-500 lg:mb-0 dark:text-gray-400">
            <li>
              <Link
                href="/privacy-policy"
                className="mr-4 hover:underline md:mr-6"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Jeong-Min-Cho/Rate-My-GMU-Professors/blob/main/LICENSE"
                className="mr-4 hover:underline md:mr-6"
              >
                Licensing
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:items-center sm:justify-between sm:flex">
          <span className="block text-sm text-gray-500 dark:text-gray-400">
            © 2023{" "}
            <a
              href="mailto:jeongmincho@outlook.com"
              className="text-blue-600 font-bold hover:underline"
            >
              Jeong Min Cho
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex justify-center mt-4 space-x-6 sm:mt-0">
            <Link
              href="https://github.com/Jeong-Min-Cho"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
