const faqs = [
  {
    id: 1,
    question: "Does this extension work with other websites?",
    answer:
      "Our extension is targeted specifically to enhance your experience on the GMU Patriot Web. It is not designed to activate on other websites.",
  },
  {
    id: 2,
    question: "Is there any risk in using this extension?",
    answer:
      "No, this extension does not communicate with the GMU Patriot web. It only displays information on the Patriot web data grids.",
  },
  {
    id: 3,
    question:
      "Is this extension burdening for the server of Rate My Professors?",
    answer:
      "Most likely, No. Theoretically, it actually uses less data than regular users. Our extension saves the data for later uses, but regular users will request new data every time they use Rate My Professors.",
  },
  {
    id: 4,
    question: "What browsers is this extension compatible with?",
    answer:
      "Currently, this extension can be used on Google Chrome, Microsoft Edge, and Mozilla Firefox. We are working to make it available on other browsers as well.",
  },
  {
    id: 5,
    question: "Does the extension automatically update with new ratings?",
    answer:
      "Yes, our extension updates regularly to provide you with the latest ratings and reviews.",
  },
  {
    id: 6,
    question: "Will this extension slow down my browser?",
    answer:
      "Absolutely not. Our extension is lightweight and designed to run efficiently, minimizing any impact on browser performance.",
  },
  {
    id: 7,
    question: "I installed the extension but it's not showing any ratings.",
    answer:
      "If you're not seeing ratings, first ensure you're on GMU Patriot web as the extension is designed to work specifically there. If the problem persists, contact us through the email provided, and we'll help troubleshoot the issue.",
  },
  {
    id: 8,
    question: "Can I customize the display settings of the extension?",
    answer:
      "Currently, our extension offers a standard display. However, we are constantly working to improve user experience, and customizable settings might be a part of future updates.",
  },
  {
    id: 9,
    question: "Is my personal data safe with this extension?",
    answer:
      "Yes, your data security is our priority. Our extension does not collect or store any personal information.",
  },
  {
    id: 10,
    question:
      "I really like this extension. How can I support its development?",
    answer:
      "We appreciate your enthusiasm! Sharing the extension with friends and leaving a positive review on the Chrome Web Store are two great ways to support us. We're also open to suggestions for improvement, so don't hesitate to share your ideas.",
  },
  // More questions...
];

export default function FAQs() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-green-500 dark:text-white">
          Frequently asked questions
        </h2>
        <div className="grid pt-8 text-left border-t border-gray-200 md:gap-8 dark:border-gray-700 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-green-600 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                {faq.question}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
