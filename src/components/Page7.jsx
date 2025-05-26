import React, { useState } from "react";

const testimonials = [
  {
    tag: "Wedding",
    quote:
      "Planza made our dream wedding a reality. Every detail was handled with care, and we couldn’t have asked for a more perfect day.",
    name: "Sarah & James",
    avatar: "https://i.pravatar.cc/40?img=12",
  },
  {
    tag: "Birthday",
    quote:
      "My daughter's birthday party was magical thanks to Planza. From balloons to cake, everything was perfect!",
    name: "Priya Sharma",
    avatar: "https://i.pravatar.cc/40?img=32",
  },
  {
    tag: "Corporate Event",
    quote:
      "We hosted a flawless annual meetup with Planza’s help. Professional, on-time, and impressive.",
    name: "Amit Mehta",
    avatar: "https://i.pravatar.cc/40?img=45",
  },
  {
    tag: "Baby Shower",
    quote:
      "The baby shower decorations and planning were beyond beautiful. Highly recommend Planza!",
    name: "Neha & Rohit",
    avatar: "https://i.pravatar.cc/40?img=27",
  },
  {
    tag: "Engagement",
    quote:
      "Planza turned our engagement day into a fairytale. Elegant decor and smooth coordination.",
    name: "Ritika & Karan",
    avatar: "https://i.pravatar.cc/40?img=21",
  },
  {
    tag: "Anniversary",
    quote:
      "Our 25th anniversary celebration was unforgettable, all thanks to the Planza team’s efforts.",
    name: "Anita & Rajesh",
    avatar: "https://i.pravatar.cc/40?img=38",
  },
];
const pricingData = [
  {
    type: "Weddings",
    price: "$5,000",
    features: [
      "Comprehensive planning and coordination",
      "Customized timelines and vendor management",
      "Exquisite venue styling and décor advice",
      "Seamless day-of coordination",
      "RSVP and guest list management",
    ],
  },
  {
    type: "Corporate Events",
    price: "$3,500",
    features: [
      "Expert planning for conferences, launches, and more",
      "Budget-friendly vendor negotiations",
      "Smooth tech setup for live streams and presentations",
      "Branding and promotional support",
      "On-site management for flawless execution",
    ],
  },
  {
    type: "Private Parties",
    price: "$1,800",
    features: [
      "Theme selection and decoration",
      "Entertainment and activities coordination",
      "Food and beverage management",
      "Custom invitations and digital RSVP",
      "Venue booking support",
    ],
  },
  {
    type: "Shows & Exhibitions",
    price: "$7,000",
    features: [
      "Large-scale venue coordination",
      "Logistics and exhibitor management",
      "Promotional campaign assistance",
      "Audio-visual and tech setup",
      "On-site staff and supervision",
    ],
  },
];
const faqs = [
  {
    question: "How far in advance should I book your services?",
    answer:
      "We recommend booking at least 3–6 months in advance to ensure availability.",
  },
  {
    question: "Do you offer customized packages?",
    answer:
      "Yes! We tailor our services to fit your specific needs and budget.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve all major cities across the country and also offer destination planning.",
  },
  {
    question: "Can I make changes after booking?",
    answer: "Absolutely. We allow changes up to two weeks before the event.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellations within 30 days of the event may incur a fee. Please contact us for full details.",
  },
];
const Page7 = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div id="section7" className="bg-[#f7f7f7] w-full pt-30 px-20 pb-30">
      <h1 className="text-yellow-700 tracking-widest">TESTIMONIALS</h1>
      <h1 className="text-7xl mt-8 w-[65%]">
        Hear how we’ve made every event truly unforgettable
      </h1>
      <div className="page7contaiiners mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="relative bg-white p-6 rounded-2xl shadow-md h-[45vh] flex flex-col justify-between mt-8"
          >
            {/* Top tag */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1 text-lg font-light rounded-full shadow">
              {item.tag}
            </div>

            {/* Quote + Text */}
            <div>
              <div className="text-gray-400 text-3xl mb-4">❝</div>
              <p className="text-gray-800 text-2xl">{item.quote}</p>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-2 pt-4 border-t border-gray-200 mt-10">
              <img
                src={item.avatar}
                alt="user avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-medium text-gray-700">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-yellow-700 tracking-widest mt-40">PRICING</h1>
      <h1 className="text-6xl mt-8 w-[65%]">
        Our flexible packages designed to fit your needs and vision
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
        {pricingData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 shadow-md flex flex-col justify-between"
          >
            <div className="mb-4">
              <span className="bg-gray-50 text-lg  px-4 py-2 rounded-lg font-light">
                {item.type}
              </span>
              <p className="text-md text-gray-400 mt-6">Starting at</p>
              <h2 className="text-6xl font-medium text-gray-900 mt-2">
                {item.price}
              </h2>
              <button className="mt-9 w-full bg-black text-white py-2 rounded-full font-medium hover:bg-yellow-700  transition">
                Schedule a Call
              </button>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              {item.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-40 flex gap-10">
        <div className="w-[45%]">
          <h4 className="text-yellow-700 tracking-widest ">
            FREQUENTLY ASKED QUESTIONS
          </h4>
          <h1 className="text-6xl mt-8">
            The most common questions about our services, processes, and more
          </h1>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white px-5 py-5 rounded-xl text-lg shadow transition-all duration-300 cursor-pointer"
              onClick={() => toggleFAQ(i)}
            >
              <div className="flex items-center justify-between">
                <h1 className="font-medium">{faq.question}</h1>
                <span className="text-2xl">{openIndex === i ? "−" : "+"}</span>
              </div>
              {openIndex === i && (
                <p className="text-gray-600 mt-4 text-base">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page7;
