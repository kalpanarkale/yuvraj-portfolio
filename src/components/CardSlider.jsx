import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
  {
    id: 1,
    title: "Understanding Brief",
    emoji: "✏️",
    step: "1",
    description:
      "So, the first step is to really dig into the project. This means figuring out what the client's goals are. Who's actually going to be using this design? And are there any rules we need to follow, like specific brand colours or fonts?",
    image: "/assets/understanding.png",
  },
  {
    id: 2,
    title: "Research and Brainstorm",
    emoji: "🧠",
    step: "2",
    description:
      "Next, research and brainstorming begin. Gathering inspiration, looking at competitors, and sketching ideas to align creativity with objectives.",
    image: "/assets/research.png",
  },
  {
    id: 3,
    title: "Design and Iterate",
    emoji: "🎨",
    step: "3",
    description:
      "Now, it's time to create! Initial designs are made, feedback is gathered, and iterations refine the work into its final form.",
    image: "/assets/design.png",
  },
  {
    id: 4,
    title: "Finalize and Deliver",
    emoji: "🚀",
    step: "4",
    description:
      "Finally, the designs are polished and handed over, ensuring everything is aligned with the client's vision and ready to launch.",
    image: "/assets/finalize.png",
  },
];

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-4 py-10 bg-black text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 uppercase">
        Crafting Brilliance in 4 Steps
      </h2>
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="p-4">
            <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">
                  {card.emoji} {card.title}
                </h3>
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold text-lg">
                  {card.step}
                </span>
              </div>
              <p className="text-gray-300">{card.description}</p>
              <div className="mt-4 flex justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-40 h-40 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;