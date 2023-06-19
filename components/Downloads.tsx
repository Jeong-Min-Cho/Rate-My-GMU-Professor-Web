import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import BROWSERS from "@/constants/browsers";

function DownloadButton({
  href,
  title,
  imageSrc,
}: {
  href: string;
  title: string;
  imageSrc: StaticImageData;
}) {
  return (
    <Link
      href={href}
      title={title}
      className="inline-flex items-center justify-center w-full px-2 sm:px-4 py-3 text-left text-white bg-gray-900 rounded-lg sm:w-auto hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
    >
      <Image
        priority
        src={imageSrc}
        className="h-8 w-8 sm:w-10 sm:h-10"
        alt="Follow us on Twitter"
      />
      <div className="ml-2.5">
        <span className="block text-xs font-normal leading-none">
          Download For
        </span>
        <span className="block text-lg font-bold leading-tight">{title}</span>
      </div>
    </Link>
  );
}

export default function Downloads() {
  return (
    <div className="grid grid-flow-col sm:grid-rows-1 grid-rows-2 items-center sm:justify-start md:justify-center gap-3 mt-8 mx-auto">
      {BROWSERS.map(({ href, title, imageSrc }) => (
        <DownloadButton
          key={title}
          href={href}
          title={title}
          imageSrc={imageSrc}
        />
      ))}
    </div>
  );
}
