import React, { useState } from "react";

const Page4 = () => {
  const [page4Bg, setPage4Bg] = useState("/fourth.avif");
  return (
    <div
      className="w-full h-screen mt-20 px-20 py-20 transition-all duration-500"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${page4Bg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h3 className="text-yellow-500 text-lg">SERVICES</h3>
      <h1 className="text-white text-6xl mt-4">
        Creating joyful moments with events that matter, perfectly planned
      </h1>
      <div className="flex gap-5 mt-40">
        {[
          { title: "Weddings", img: "/wedding-bg.avif" },
          { title: "Corporate Events", img: "/shows.avif" },
          { title: "Private Parties", img: "/privateparty.avif" },
          { title: "Shows and Exhibitions", img: "singer.avif" },
        ].map((item, i) => (
          <div
            key={i}
            className="w-1/4 h-[45vh] rounded-2xl bg-[rgba(0,0,0,0.6)] backdrop-blur-md flex px-7 font-light py-6 text-2xl items-end text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            onMouseEnter={() => setPage4Bg(item.img)}
            onMouseLeave={() => setPage4Bg("/fourth.avif")}
          >
            <h1>{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page4;
