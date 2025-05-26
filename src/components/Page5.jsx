import React from 'react'

const Page5 = () => {
  return (
    <div className="w-full mt-35">
        <h5 className="px-20 text-yellow-700 text-lg">WHO WE SERVE</h5>
        <h1 className="px-20 text-6xl w-[72%] mt-5">
          Our clients are as diverse as the events we create, each one crafted
          with care, creativity, and purpose
        </h1>
        <div className="flex mt-20 overflow-scroll">
          {/* Image Card 1 */}
          <div className="w-1/3 h-[88vh] relative overflow-hidden  min-w-[33.3333%]">
            <img src="/1.avif" className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/99 via-black/60 to-transparent z-10" />
            <h1 className="absolute bottom-5 left-5 text-white text-2xl font-semibold z-20  px-4 py-2 rounded-xl">
              Brides & Grooms-to-Be
            </h1>
          </div>

          {/* Image Card 2 */}
          <div className="w-1/3 h-[88vh] relative overflow-hidden  min-w-[33.3333%]">
            <img src="/2.avif" className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/99 via-black/60 to-transparent z-10" />
            <h1 className="absolute bottom-5 left-5 text-white text-2xl font-semibold z-20  px-4 py-2 rounded-xl">
              Corporate Teams & Leaders
            </h1>
          </div>

          {/* Image Card 3 */}
          <div className="w-1/3 h-[88vh] relative overflow-hidden  min-w-[33.3333%]">
            <img src="/3.avif" className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/99 via-black/30 to-transparent z-10" />
            <h1 className="absolute bottom-5 left-5 text-white text-2xl font-semibold z-20  px-4 py-2 rounded-xl">
              Families & Friends
            </h1>
          </div>

          {/* Image Card 4 */}
          <div className="w-1/3 h-[88vh] relative overflow-hidden  min-w-[33.3333%]">
            <img src="/4.avif" className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/99 via-black/60 to-transparent z-10" />
            <h1 className="absolute bottom-5 left-5 text-white text-2xl font-semibold z-20 bg-black/50 px-4 py-2 rounded-xl">
              Your Heading Here
            </h1>
          </div>

          {/* Image Card 5 */}
          <div className="w-1/3 h-[88vh] relative overflow-hidden  min-w-[33.3333%]">
            <img src="/5.avif" className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/99 via-black/60 to-transparent z-10" />
            <h1 className="absolute bottom-5 left-5 text-white text-2xl font-semibold z-20 bg-black/50 px-4 py-2 rounded-xl">
              Your Heading Here
            </h1>
          </div>

          {/* Image Card 6 */}
          <div className="w-1/3 h-[88vh] relative overflow-hidden  min-w-[33.3333%]">
            <img src="/6.avif" className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/99 via-black/60 to-transparent z-10" />
            <h1 className="absolute bottom-5 left-5 text-white text-2xl font-semibold z-20 bg-black/50 px-4 py-2 rounded-xl">
              Your Heading Here
            </h1>
          </div>

          {/* Image Card 7 */}
          <div className="w-1/3 h-[88vh] relative overflow-hidden  min-w-[33.3333%]">
            <img src="/7.avif" className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/99 via-black/60 to-transparent z-10" />
            <h1 className="absolute bottom-5 left-5 text-white text-2xl font-semibold z-20  px-4 py-2 rounded-xl">
              Your Heading Here
            </h1>
          </div>
        </div>
      </div>
  )
}

export default Page5