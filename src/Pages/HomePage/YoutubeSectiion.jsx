import { FaStar, FaGem, FaPuzzlePiece } from "react-icons/fa";
import CountUp from "react-countup";
import LazyImage from "../../Components/LazyImage";

import image from "../../../src/assets/YouTube/camera2.png";

const YoutubeSection = () => {
  return (
    <section className="bg-gray-100 py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

   {/* LEFT IMAGE FIXED + RESPONSIVE */}
<div className="w-full lg:w-[58%]">
  <div className="
      border-[6px] sm:border-[8px] border-[#f5a300] rounded-2xl shadow-lg 
      overflow-hidden 
      h-[220px]          /* mobile */
      sm:h-[300px]       /* small devices */
      md:h-[350px]       /* iPad fix */
      lg:h-[420px]       /* laptop */
      xl:h-[460px]       /* large screen */
    "
  >
    <LazyImage
      src={image}
      alt="YouTube Section"
      loading="lazy"
      decoding="async"
      fetchpriority="low"
      className="w-full h-full object-cover rounded-none"
      style={{ borderRadius: 0 }}
    />
  </div>
</div>


        {/* RIGHT SIDEBAR CARDS */}
        <div className="w-full lg:w-[38%] flex flex-col gap-5">

          {/* CARD 1 */}
          <div className="relative flex items-center justify-between bg-white rounded-2xl px-4 sm:px-6 py-4 sm:py-6 shadow-md">
            <div className="absolute left-0 top-0 h-full w-1.5 sm:w-2 bg-gradient-to-b from-[#FFD37D] to-[#FF9900] rounded-l-2xl" />

            <div className="flex flex-col items-center gap-2 text-center">
              <div className="bg-gradient-to-r from-[#FFD37D] to-[#FF9900] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white text-lg sm:text-xl">
                <FaStar />
              </div>
              <p className="text-[11px] sm:text-[13px] font-semibold text-[#1e1e1e] uppercase leading-tight">
                OUR TRUSTED <br /> ACTIVE CLIENTS
              </p>
            </div>

            <h3 className="text-[#FFA633] text-[24px] sm:text-[30px] md:text-[34px] font-extrabold">
              <CountUp end={100} duration={2} />+
            </h3>
          </div>

          {/* CARD 2 */}
          <div className="relative flex items-center justify-between bg-white rounded-2xl px-4 sm:px-6 py-4 sm:py-6 shadow-md">
            <div className="absolute left-0 top-0 h-full w-1.5 sm:w-2 bg-gradient-to-b from-[#6EC6FF] to-[#0072FF] rounded-l-2xl" />

            <div className="flex flex-col items-center gap-2 text-center">
              <div className="bg-gradient-to-r from-[#6EC6FF] to-[#0072FF] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white text-lg sm:text-xl">
                <FaGem />
              </div>
              <p className="text-[11px] sm:text-[13px] font-semibold text-[#1e1e1e] uppercase leading-tight">
                OUR EXPERIENCED <br /> MEMBERS
              </p>
            </div>

            <h3 className="text-[#0072FF] text-[24px] sm:text-[30px] md:text-[34px] font-extrabold">
              <CountUp end={15} duration={2} />+
            </h3>
          </div>

          {/* CARD 3 */}
          <div className="relative flex items-center justify-between bg-white rounded-2xl px-4 sm:px-6 py-4 sm:py-6 shadow-md">
            <div className="absolute left-0 top-0 h-full w-1.5 sm:w-2 bg-gradient-to-b from-[#7BFFB5] to-[#00C96A] rounded-l-2xl" />

            <div className="flex flex-col items-center gap-2 text-center">
              <div className="bg-gradient-to-r from-[#7BFFB5] to-[#00C96A] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white text-lg sm:text-xl">
                <FaPuzzlePiece />
              </div>
              <p className="text-[11px] sm:text-[13px] font-semibold text-[#1e1e1e] uppercase leading-tight">
                YEARS PROVIDING <br /> SERVICES
              </p>
            </div>

            <h3 className="text-[#00C96A] text-[24px] sm:text-[30px] md:text-[34px] font-extrabold">
              <CountUp end={10} duration={2} />+
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default YoutubeSection;
