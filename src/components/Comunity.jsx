import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { comunity } from "../constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Comunity = () => {
  return (
    <div className="flex flex-col mt-10 space-y-10">
      <div className="flex flex-col items-center space-y-4">
        <div>
          <h1 className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-2xl font-bold text-center">
            Manage your entire comunity <br className="xs:hidden" /> in a single system
          </h1>
        </div>
        <div className="flex 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-base text-sm gap-2 items-center bg-red-600 text-white p-2 rounded cursor-pointer">
          <FaFileDownload />
          <p>Barcha maxsulotlar katalogini yuklab olish</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 mt-10 xs:grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5">
        {comunity.map((item, index) => (
          <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)} className="flex justify-center 2xl:w-[180px] xl:w-[180px] lg:w-[150px] md:w-[130px] sm:w-[100px] w-[80px]" key={item.url}>
            <Link to={`/product-detail/${item.name.toLocaleLowerCase().replace(/\s/g, '')}`} className="space-y-4">
              <div className="bg-red-300 border-2 rounded-md border-red-600 p-4 m-2 2xl:h-[150px] xl:h-[150px] lg:h-[150px] md:h-[130px] sm:h-[100px] h-[85px] 2xl:w-[180px] xl:w-[180px] lg:w-[150px] md:w-[130px] sm:w-[100px] w-[85px] flex justify-center shadow-[0_0_50px_0] shadow-[#3478C8]">
                <img src={item.url} alt="" className="object-center w-full h-full" />
              </div>
              <h1 className="2xl:text-lg xl:text-lg lg:text-lg md:text-base text-sm font-semibold text-center">
                {item.title}
              </h1>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Comunity, "comunity");

// import React from "react";
// import { FaFileDownload } from "react-icons/fa";
// import { comunity } from "../constants";
// import { Link } from "react-router-dom";

// const Comunity = () => {
//   return (
//     <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
//       <div className="text-center">
//         <h1 className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-2xl font-bold">
//           Manage your entire community <br className="xs:hidden" /> in a single system
//         </h1>
//         <div className="flex items-center gap-2 bg-red-600 text-white p-2 rounded cursor-pointer">
//           <FaFileDownload />
//           <p>Barcha maxsulotlar katalogini yuklab olish</p>
//         </div>
//       </div>
//       {comunity.map((item) => (
//         <div key={item.url}>
//           <Link to={`/product-detail/${item.name.toLocaleLowerCase().replace(/\s/g, '')}`} className="space-y-4">
//             <div className="bg-red-300 border-2 rounded-md border-red-600 p-4 m-2 shadow-[0_0_50px_0] shadow-[#3478C8]">
//               <img src={item.url} alt="" className="object-cover w-full h-72" />
//             </div>
//             <h1 className="2xl:text-lg xl:text-lg lg:text-lg md:text-base text-sm font-semibold text-center">
//               {item.title}
//             </h1>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Comunity;

