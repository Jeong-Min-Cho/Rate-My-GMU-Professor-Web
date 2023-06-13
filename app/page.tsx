import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <body>
        <h1 className="text-4xl font-bold text-center">
          Rate My GMU Professor
        </h1>
        <div className="p-4 flex-row text-center items-center justify-center">
          <p className="font-bold">
            Rate My GMU Professors <u>DOES NOT</u> <br />
            Collect, Transmit, Distribute or Sell your data.
          </p>
          <p className="mt-4">
            We are not interested in collecting any personal information. <br />
            We believe such information is yours and yours alone.
            <br />
            We do not store or transmit your personal details.
            <br />
            We do not include any advertising or analytics software that talks
            to third parties.
            <br />
            We do not include any tracking software.
            <br />
            We do not include any social media plugins.
          </p>
        </div>

        <p className="text-center">
          If you have any questions, please contact us at{" "}
          <a
            href="mailto:jeongmincho@outlook.com"
            className="text-blue-500 hover:underline"
          >
            jeongmincho@outlook.com
          </a>
        </p>
      </body>
    </main>
  );
}
