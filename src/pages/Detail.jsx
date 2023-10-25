import { FaFileDownload } from "react-icons/fa";
import { ProductService } from "../constants/servise";
import { useParams } from "react-router-dom";
import { BsChevronCompactRight } from "react-icons/bs";
import { Rating } from "primereact/rating";

const Detail = () => {
  const products = ProductService.getProductsData();
  const { id } = useParams();

  return (
    <div className="top-[78px] relative">
      <div className="flex flex-col container mx-auto px-20 pt-20 pb-40 space-y-10">
        <div className="flex 2xl:flex-row md:flex-row flex-col justify-between items-center 2xl:gap-0 md:gap-0 gap-5">
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-2xl 2xl:text-start md:text-start text-center">Mahsulot haqida batafsil</h1>
            <hr className="2xl:w-24 md:w-24 xs:w-52 w-20 h-1 my-2 2xl:ml-0 md:ml-0 sm:ml-8 xs:ml-8 ml-[66px] bg-red-600 border-0 rounded" />
          </div>
          <div className="flex gap-2 items-center bg-red-600 text-white py-2 px-4 rounded cursor-pointer">
            <FaFileDownload />
            <p className="2xl:text-base sm:text-base text-sm">
              Mahsulot haqida to’liq ma’lumotlarni yuklab olish
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          {products
            .filter((product) => product.id == id)
            .map((product) => (
              <div className="flex 2xl:flex-row md:flex-row flex-col gap-4" key={product.id}>
                <div className="basis-1/2 flex justify-center items-center border-2 border-red-300 bg-red-100 rounded-lg 2xl:py-40 lg:py-40 md:py-30 xs:py-28 py-20 sm:px-20 2xl:px-32 lg:px-32">
                  <img src={product.image} alt="w-full h-full" />
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="bg-red-100 2xl:text-base xs:text-base text-sm flex items-center rounded-md py-0.5 px-2 gap-2">
                    <p className="text-red-600">Bosh sahifa</p>
                    <BsChevronCompactRight />
                    <p className="text-red-600">Katalog kategory</p>
                    <BsChevronCompactRight />
                    <p className="text-blue-600">{product.name}</p>
                  </div>
                  <h1 className="text-2xl text-red-600 font-bold">
                    {product.category}
                  </h1>
                  <h1 className="text-2xl font-bold">
                    {product.name}
                  </h1>
                  <Rating className="gap-2 text-red-600 bg-red-100 w-fit px-1 py-1 rounded-lg" value={product.rating} readOnly cancel={false}></Rating>
                  <p>Mahsulotga 2 yillik kafolat beriladi</p>
                  <p className="border-t-2 pt-3 border-red-600">{product.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
