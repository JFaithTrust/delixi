// import React, { useEffect, useState } from "react";
// import { FaFileDownload } from "react-icons/fa";

// import { Button } from "primereact/button";
// import { Rating } from "primereact/rating";
// import { ProductService } from "../constants/servise";
// import { Paginator } from "primereact/paginator";

// const ProductDetail = () => {
//   const [first, setFirst] = useState(0);
//   const [rows, setRows] = useState(3);

//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     ProductService.getProductsSmall().then((data) => setProducts(data));
//   }, []);

//   const onPageChange = (event) => {
//     setFirst(event.first);
//     setRows(event.rows);
//   };

//   return (
//     <div className="flex flex-col container mx-auto px-20 py-20 space-y-10">
//       <div className="flex justify-between items-center">
//         <div className="flex flex-col items-start">
//           <h1 className="font-bold text-2xl">Biz Haqimizda</h1>
//           <hr className="w-24 h-1 my-2 bg-red-600 border-0 rounded" />
//         </div>
//         <div className="flex gap-2 items-center bg-red-600 text-white py-2 px-4 rounded cursor-pointer">
//           <FaFileDownload />
//           <p>Barcha maxsulotlar katalogini yuklab olish</p>
//         </div>
//       </div>
//       <div className="grid grid-cols-4 gap-3 p-2">
//         {products.slice(first, first + rows).map((product) => (
//           <div className="p-4 border-2 border-red-600 rounded">
//             <div className="flex flex-wrap items-center justify-between gap-2">
//               <div className="flex items-center gap-2">
//                 <i className="pi pi-tag"></i>
//                 <span className="font-semibold">{product.category}</span>
//               </div>
//             </div>
//             <div className="flex flex-col items-center gap-3 py-5">
//               <img
//                 className="shadow-2 rounded"
//                 src={product.image}
//                 alt={product.name}
//               />
//               <div className="text-2xl font-bold">{product.name}</div>
//               <Rating
//                 className="text-red-600 border-2 border-red-600 gap-2 py-1 px-3 rounded-md"
//                 value={product.rating}
//                 readOnly
//                 cancel={false}
//               ></Rating>
//             </div>
//             <div className="flex items-center justify-between">
//               <span className="text-2xl font-semibold">${product.price}</span>
//               <Button
//                 icon="pi pi-shopping-cart"
//                 className="p-button-rounded"
//               ></Button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div>
//         <Paginator
//           first={first}
//           rows={rows}
//           totalRecords={120}
//           rowsPerPageOptions={[3, 5, 10]}
//           onPageChange={onPageChange}
//           className="gap-10"
//           template={{ layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown' }}
//           style={{ 'p-paginator-color' : 'red' }}
//         />
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;

import React, { useEffect, useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { ProductService } from "../constants/servise";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const ProductDetail = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ProductService.getProductsSmall().then((data) => setProducts(data));
  }, []);

  return (
    <div className="flex flex-col container mx-auto px-20 py-20 space-y-10">
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-2xl">Biz Haqimizda</h1>
          <hr className="w-24 h-1 my-2 bg-red-600 border-0 rounded" />
        </div>
        <div className="flex gap-2 items-center bg-red-600 text-white py-2 px-4 rounded cursor-pointer">
          <FaFileDownload />
          <p>Barcha maxsulotlar katalogini yuklab olish</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 p-2">
        {products.map((product) => (
          <div className="p-4 border-2 border-red-600 rounded">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <i className="pi pi-tag"></i>
                <span className="font-semibold">{product.category}</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 py-5">
              <img
                className="shadow-2 rounded"
                src={product.image}
                alt={product.name}
              />
              <div className="text-2xl font-bold">{product.name}</div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-semibold">${product.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex top-4 justify-center items-center h-[193px]">
        <div className="-translate-x-0 text-2xl p-2 bg-red-600 text-white cursor-pointer">
          <BsChevronCompactLeft size={20} />
        </div>
        {products.map((item, index) => (
          <div key={index} className="text-2xl cursor-pointer flex justify-center w-full">
            <div>{index + 1}</div>
          </div>
        ))}
        <div className="-translate-x-0 text-2xl p-2 bg-red-600 text-white cursor-pointer">
          <BsChevronCompactRight size={20} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
