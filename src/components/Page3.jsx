import React from "react";

const Page3 = () => {
  return (
    <div  className="page3 flex flex-col items-end w-full mt-40 ">
      <div className="contentpage3 flex flex-col w-[55%] mr-20">
        <h2 className="text-lg  text-yellow-600 tracking-widest">ABOUT US</h2>
        <h1 className="text-6xl mt-7">
          No matter the event, we bring expertise, creativity, and passion to
          make your moments unforgettable
        </h1>
        <img src="/second.avif" className="mt-13 rounded-2xl" alt="" />
        <div className="mt-10 bg-[#f7f7f7] px-5 py-5 rounded-2xl">
          <h1 className="text-2xl mb-5">Our Vision</h1>
          <p className="opacity-50 text-xl">
            At Planza, we envision a world where every event is a masterpiece,
            crafted with passion, precision, and purpose. We believe that
            celebrations, whether grand or intimate, should be stress-free,
            inspiring, and unforgettable.
          </p>
        </div>
        <div className="flex gap-10">
          <div className="page3left">
            <div className="mt-10 bg-[#f7f7f7] px-5 py-5 rounded-2xl">
              <h1 className="text-2xl mb-5">Our Values</h1>
              <p className="opacity-50 text-xl">
                We are guided by creativity, precision, and a deep commitment to
                excellence. We believe that every event should be a seamless
                blend of innovation and meticulous planning, ensuring a
                stress-free experience for our clients.
              </p>
            </div>
          </div>
          <div className="page3right">
            <div className="mt-10 bg-[#f7f7f7] px-5 py-5 rounded-2xl">
              <h1 className="text-2xl mb-5">Our Goals</h1>
              <p className="opacity-50 text-xl">
                Our mission is simple, to make your vision a reality. Whether
                it’s an elegant wedding, a corporate conference, a private
                celebration, or a large-scale exhibition, we bring meticulous
                planning to ensure everything runs.
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-[100%] h-[70vh] mt-10 rounded-2xl bg-cover bg-center"
          style={{
            backgroundImage: "url('/third.webp')",
          }}
        >
          <div className="px-10 py-10 flex flex-col justify-end h-full rounded-2xl">
            <div className="bg-white px-6 py-6 font-light rounded-2xl text-2xl flex gap-8 flex-col">
              <p>
                "Every event tells a story, and our passion is turning those
                stories into unforgettable experiences. Your moments deserve to
                be celebrated, and we’re here to make them extraordinary."
              </p>
              <span className="text-lg flex items-center">
                Daniel Reeves,{" "}
                <span className="opacity-50"> Founder of Planza</span>{" "}
                <button className="px-2 py-2 bg-[#f7f7f7] rounded-2xl ml-74">
                  @denialr →
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
