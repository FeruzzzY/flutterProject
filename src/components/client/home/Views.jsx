import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TextSize20 from "../../texts/TextSize20";
import TextSize60 from "../../texts/TextSize60";

const Views = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    spaceBetween: 30,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    swipeToSlide: true,
    focusOnSelect: true,
    //     swipe: false,
    //     draggable: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  const items = [
    {
      name: "Tanya Freeman, 25 y.o",
    },
    {
      name: "Tanya Freeman, 25 y.o",
    },
    {
      name: "Tanya Freeman, 25 y.o",
    },
    {
      name: "Tanya Freeman, 25 y.o",
    },
    {
      name: "Tanya Freeman, 25 y.o",
    },
    {
      name: "Tanya Freeman, 25 y.o",
    },
  ];

  return (
    <>
      <div className="container md:pt-[100px] pt-[60px]" id="our-testimonials">
        <TextSize60 className="mb-10">The opinion of our readers</TextSize60>
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="">
              <div className="w-[calc(100%_-_24px)] ml-3 rounded-2xl overflow-hidden relative h-[403px]">
                <img
                  src="/images/user_bg.png"
                  className="w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute bottom-0 left-0 z-10 w-full">
                  <div className="backdrop-blur-sm bg-black/40 absolute top-0 left-0 w-full h-full z-10"></div>
                  <div className="relative z-20 p-5">
                    <TextSize20 className="text-white font-semibold ">
                      {item?.name}
                    </TextSize20>
                    <i className="text-sm font-medium !font-inter text-white mt-2">
                      “In the system, each student has the opportunity to
                      interact with the mentor in the form of text, video and
                      audio.”
                    </i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Views;
