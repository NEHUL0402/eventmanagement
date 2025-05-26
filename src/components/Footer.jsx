import React from 'react'

const Footer = () => {
  return (
    <div
    id="section8"
    className="bg-[#f7f7f7] w-full h-screen px-20 py-30 flex flex-col gap-40 justify-between"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/couple.avif')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div>
      <h1 className="text-7xl w-[50%] text-white">
        Your dream event is just a step away
      </h1>
      <div className="mt-10">
        <button className="bg-white text-black px-5 py-3 rounded-3xl">
          Schedule a Call →
        </button>
        <button className="text-white ml-5 bg-black/45 px-5 py-3 rounded-3xl ">
          Email Us
        </button>
      </div>
    </div>
    <div className="bg-black/70 flex justify-between px-8 py-10 pb-18 rounded-2xl h-[39vh]">
      <div>
        <h1 className="text-2xl text-white">Planza ℗</h1>
        <p className="text-white opacity-50 text-lg mt-2">
          Your trusted partner for extraordinary events
        </p>
      </div>
      <div className="flex gap-15">
        <div className="text-white flex flex-col gap-3 text-md">
          <h2 className="opacity-50">Events</h2>
          <h1 className="text-sm">Wedding</h1>
          <h1 className="text-sm">Corporate Event</h1>
          <h1 className="text-sm">Private Parties</h1>
          <h1 className="text-sm">Shows and Exibitions</h1>
        </div>
        <div className="text-white flex flex-col gap-3">
          <h2 className="opacity-50">Comapany</h2>
          <h1 className="text-sm">Projects</h1>
          <h1 className="text-sm">Pricing</h1>
          <h1 className="text-sm">Contact</h1>
          <h1 className="text-sm">Shedule a call</h1>
        </div>
        <div className="text-white flex flex-col gap-3">
          <h2 className="opacity-50">Social Links</h2>
          <h1 className="text-sm">Instagaram</h1>
          <h1 className="text-sm">Facebook</h1>
          <h1 className="text-sm">Email us</h1>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer