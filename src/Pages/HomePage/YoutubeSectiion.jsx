import { FaStar, FaGem, FaPuzzlePiece } from "react-icons/fa";
import CountUp from "react-countup";

const YoutubeSection = () => {
  return (
    <section className="bg-gray-100 py-14 sm:py-20">
      {/* ✅ Same padding as PricingSection */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4  px-6 md:px-[95px]">
        
        {/* 🎥 Left - YouTube Video */}
        <div className="w-full lg:w-[58%]">
          <div className="border-[8px] sm:border-[10px] border-[#f5a300] rounded-2xl overflow-hidden shadow-md">
            <iframe
              className="w-full h-[220px] sm:h-[320px] md:h-[400px] lg:h-[440px] rounded-xl"
              src="https://www.youtube.com/embed/YCjAGpgMz1Y"
              title="Remove Background Service: Remove Background for E-commerce Business"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* 📊 Right - Stats Cards */}
        <div className="w-full lg:w-[38%] flex flex-col gap-6">

          {/* 1️⃣ Trusted Clients */}
          <div className="relative flex items-center justify-between bg-white rounded-2xl px-5 sm:px-6 py-5 sm:py-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-[6px] bg-gradient-to-b from-[#FFD37D] to-[#FF9900] rounded-l-2xl"></div>

            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <div className="bg-gradient-to-r from-[#FFD37D] to-[#FF9900] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl">
                <FaStar />
              </div>
              <p className="text-[12px] sm:text-[14px] font-semibold text-[#1e1e1e] leading-tight text-left uppercase">
                OUR TRUSTED <br /> ACTIVE CLIENTS
              </p>
            </div>

            <h3 className="text-[#FFA633] text-[28px] sm:text-[34px] md:text-[36px] font-extrabold">
              <CountUp end={250} duration={3} />+
            </h3>
          </div>

          {/* 2️⃣ Experienced Members */}
          <div className="relative flex items-center justify-between bg-white rounded-2xl px-5 sm:px-6 py-5 sm:py-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-[6px] bg-gradient-to-b from-[#6EC6FF] to-[#0072FF] rounded-l-2xl"></div>

            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <div className="bg-gradient-to-r from-[#6EC6FF] to-[#0072FF] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl">
                <FaGem />
              </div>
              <p className="text-[12px] sm:text-[14px] font-semibold text-[#1e1e1e] leading-tight text-left uppercase">
                OUR EXPERIENCED <br /> MEMBERS
              </p>
            </div>

            <h3 className="text-[#0072FF] text-[28px] sm:text-[34px] md:text-[36px] font-extrabold">
              <CountUp end={20} duration={3} />+
            </h3>
          </div>

          {/* 3️⃣ Years Providing Services */}
          <div className="relative flex items-center justify-between bg-white rounded-2xl px-5 sm:px-6 py-5 sm:py-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-[6px] bg-gradient-to-b from-[#7BFFB5] to-[#00C96A] rounded-l-2xl"></div>

            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <div className="bg-gradient-to-r from-[#7BFFB5] to-[#00C96A] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl">
                <FaPuzzlePiece />
              </div>
              <p className="text-[12px] sm:text-[14px] font-semibold text-[#1e1e1e] leading-tight text-left uppercase">
                YEARS PROVIDING <br /> SERVICES
              </p>
            </div>

            <h3 className="text-[#00C96A] text-[28px] sm:text-[34px] md:text-[36px] font-extrabold">
              <CountUp end={12} duration={3} />+
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSection;
