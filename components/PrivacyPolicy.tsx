import { CheckCircleIcon } from "@heroicons/react/24/solid";

import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-green-600">
          Rate My GMU Professors
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-6 text-xl leading-8">
          At Rate My GMU Professor, we are committed to maintaining the trust
          and confidence of our users. This Privacy Policy outlines our firm
          commitment to your privacy and the protection of your information.
        </p>
        <div className="mt-10 max-w-2xl">
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Information We Do Not Collect
          </h2>
          <p>
            Rate My GMU Professor does not collect, transmit, distribute, or
            sell your personal data. We believe that such information is a
            private matter and should remain so. As such, we've taken the
            following steps to protect your privacy:
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-green-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  No Personal Information Storage or Transmission
                </strong>{" "}
                We do not collect, store, or transmit any of your personal
                details while you use our extension.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-green-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  No Advertising or Analytics Software
                </strong>{" "}
                We do not incorporate any advertising or analytics software that
                communicates with third parties into our extension.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-green-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  No Tracking Software.
                </strong>{" "}
                Our extension does not include any software that tracks or
                monitors your browsing behavior.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-green-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  No Social Media Plugins
                </strong>{" "}
                We do not integrate any social media plugins into our extension.
                We understand that these plugins can potentially infringe on
                user privacy, so we have opted to exclude them.
              </span>
            </li>
          </ul>
          <p className="mt-8">
            This policy means that you can use our extension with full
            confidence that your privacy will remain intact.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Contact Information
          </h2>
          <p className="mt-6">
            If you have any questions or concerns regarding our privacy policy
            or practices, please feel free to contact us at{" "}
            <Link
              href="mailto:jeongmincho@outlook.com"
              className="text-blue-400 hover:underline"
            >
              jeongmincho@outlook.com
            </Link>
            . Your trust is important to us, and we will make every effort to
            resolve your concerns.
          </p>
        </div>
      </div>
    </div>
  );
}
