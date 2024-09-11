import React from "react";

const reviewData = [
  {
    id: 1,
    title: "Shooting Stars",
    description:
      "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.",
    icon: "M22 12h-4l-3 9L9 3l-3 9H2",
    link: "#",
    linkText: "Learn More",
  },
  {
    id: 2,
    title: "The Catalyzer",
    description:
      "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.",
    icon: "M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12",
    link: "#",
    linkText: "Learn More",
  },
  {
    id: 3,
    title: "Neptune",
    description:
      "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.",
    icon: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 7a4 4 0 100-8 4 4 0 000 8z",
    link: "#",
    linkText: "Learn More",
  },
];

const Review = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-white mb-20">
          Raw Denim Heirloom Man Braid
          <br className="hidden sm:block" />
          Selfies Wayfarers
        </h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {reviewData.map((item) => (
            <div key={item.id} className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d={item.icon}></path>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-white text-lg title-font font-medium mb-2">
                  {item.title}
                </h2>
                <p className="leading-relaxed text-base">{item.description}</p>
                {/* {item.link && (
                  <a
                    className="mt-3 text-indigo-400 inline-flex items-center"
                    href={item.link}
                  >
                    {item.linkText}
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
