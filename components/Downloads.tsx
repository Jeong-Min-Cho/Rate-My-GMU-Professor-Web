import Image from "next/image";
import Chrome from "@/public/chrome.svg";
import FireFox from "@/public/firefox.svg";
import Edge from "@/public/edge.svg";

export default function Downloads() {
  return (
    <div className="grid grid-flow-col sm:grid-rows-1 grid-rows-2 items-center justify-center gap-4 mt-8 mx-auto">
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
          <span className="block text-lg font-bold leading-tight">Chrome</span>
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
          <span className="block text-lg font-bold leading-tight">FireFox</span>
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
          <span className="block text-lg font-bold leading-tight">Edge</span>
        </div>
      </a>
    </div>
  );
}
