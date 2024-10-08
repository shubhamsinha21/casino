import React, { useState } from "react";

// Sample FAQ data
const faqData = [
  {
    id: 1,
    question: "Is there a dress code for visiting the casino?",
    answer:
      "Yes, we have a smart casual dress code policy which means no shorts, sleeveless shirts, flip-flops, or sandals are allowed. Additionally, guests are not allowed to wear hats or sunglasses inside the casino.",
  },
  {
    id: 2,
    question: "Are there any age restrictions for visiting the casino?",
    answer: "Yes, guests must be at least 21 years old to enter the casino.",
  },
  {
    id: 3,
    question: "What types of games are available at the casino?",
    answer:
      "We offer a variety of games including slot machines, table games such as blackjack, baccarat, roulette, and craps, as well as live poker and sports betting.",
  },
  {
    id: 4,
    question: "Is there a loyalty program for frequent visitors?",
    answer:
      "Yes, we have a loyalty program called the Rewards Club. Members can earn points by playing games and redeem them for various rewards such as free play, complimentary meals, and hotel stays.",
  },
  {
    id: 5,
    question: "Are there any dining options available at the casino?",
    answer:
      "Yes, we have several dining options ranging from casual to fine dining. Guests can choose from a variety of cuisines and restaurants including buffets, cafes, and steak houses.",
  },
];

const Faq = () => {
  const [activeTab, setActiveTab] = useState("tab2"); // Default active tab
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-black mt-10">
      <div className="container mx-auto px-20">
        <h4 className="text-5xl font-semibold mb-8 text-center gradient-text">
          FAQ’S
        </h4>
        <div className="faq-wrap">
          <div className="faq-tab-wrap mb-6">
            <ul className="flex border-b border-gray-300">
              <li
                className={`cursor-pointer px-4 py-2 text-xl ${
                  activeTab === "tab2"
                    ? "border-b-1 gradient-text font-bold"
                    : "text-gray-600"
                }`}
                onClick={() => handleTabChange("tab2")}
              >
                Casino
              </li>
            </ul>
          </div>
          <div
            className={`tab_container ${
              activeTab === "tab2" ? "block" : "hidden"
            }`}
          >
            <div className="faq-acc">
              <div className="acc-container">
                {faqData.map((faq, index) => (
                  <div
                    key={faq.id}
                    className="acc-item border-b border-gray-300 "
                  >
                    <h3
                      className={`accordion cursor-pointer flex items-center justify-between px-4 py-3 space-x-24 md:space-x-0 bg-black 
                      }`}
                      onClick={() => handleAccordionClick(index)}
                    >
                      <span className="font-semibold text-white mt-2 mb-4 text-sm md:text-2xl ">{`${String(
                        index + 1
                      ).padStart(2, "0")}. ${faq.question}`}</span>
                      <svg
                        className={` w-16 h-16 md:w-6 md:h-6 transition-transform duration-300 ${
                          activeIndex === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="white"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </h3>
                    <div
                      className={`panel px-4 py-0 text-left bg-black text-white transition-max-height duration-500 ease-in-out overflow-hidden ${
                        activeIndex === index ? "max-h-screen" : "max-h-0"
                      }`}
                    >
                      <p className="py-8">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
