import React, { useEffect, useState } from "react";
import { ProductService } from "../constants/servise"; // Import your data here
import { FaFileDownload } from "react-icons/fa";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { Rating } from 'primereact/rating'

function ProductDetail() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortCategory, setSortCategory] = useState("All");
  const products = ProductService.getProductsData();
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const { id } = useParams();

  useEffect(() => {
    switch (id) {
      case "electricalmaterials":
        setSortCategory("Electrical Materials");
        break;
      case "finaldistribution":
        setSortCategory("Final Distribution");
        break;
      case "powerdistribution":
        setSortCategory("Power Distribution");
        break;
      case "powermanagement":
        setSortCategory("Power Management");
        break;
      case "powersupply":
        setSortCategory("Power Supply");
        break;
      default:
        setSortCategory("All");
        break;
    }
  }, [id]);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;

  // Filter and sort the products based on search query and selected category
  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (sortCategory !== "All") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === sortCategory
    );
  }

  const sortedProducts = [...filteredProducts].sort((a, b) =>
    a.category.localeCompare(b.category)
  );

  const currentProducts = sortedProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Function to go to the previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  // Function to go to the next page
  const goToNextPage = () => {
    if (currentPage < Math.ceil(sortedProducts.length / itemsPerPage)) {
      handlePageChange(currentPage + 1);
    }
  };

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  // Function to handle category select change
  const handleCategoryChange = (event) => {
    setSortCategory(event.target.value);
    setCurrentPage(1); // Reset to the first page when changing category
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  return (
    <div className="top-[78px] relative">
      <div className="flex flex-col container mx-auto px-20 pt-20 pb-40 space-y-10">
        <div className="flex 2xl:flex-row md:flex-row flex-col justify-between items-center 2xl:gap-0 md:gap-0 gap-5">
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-2xl">Biz Haqimizda</h1>
            <hr className="w-24 h-1 my-2 2xl:ml-0 md:ml-0 ml-8 bg-red-600 border-0 rounded" />
          </div>
          <div className="flex gap-2 items-center bg-red-600 text-white py-2 px-4 rounded cursor-pointer">
            <FaFileDownload />
            <p className="2xl:text-base sm:text-base text-sm">Barcha maxsulotlar katalogini yuklab olish</p>
          </div>
        </div>
        <div className="flex 2xl:flex-row sm:flex-row flex-col justify-between bg-red-100 py-2 px-3 rounded-lg border border-red-300 items-center 2xl:gap-0 sm:gap-0 gap-3">
          <div className="2xl:basis-1/3 lg:basis-1/3 basis-full w-full">
            <select
              value={sortCategory}
              onChange={handleCategoryChange}
              className="bg-transparent border border-red-300 rounded-md focus:ring-red-600 focus:border-red-600 block py-1.5 2xl:w-1/2 md:w-1/2 w-full"
            >
              <option value="All">All Categories</option>
              {Array.from(
                new Set(products.map((product) => product.category))
              ).map((category) => (
                <option
                  key={category}
                  value={category}
                  className="bg-red-100 border-red-300 border rounded"
                >
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="relative 2xl:w-fit xs:w-fit w-4/5">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by product name"
              value={searchQuery}
              onChange={handleSearchChange}
              className="py-1.5 px-3 bg-transparent border border-red-300 rounded-md pl-10 active:border-blue-500 focus:border-blue-500 2xl:w-fit xs:w-fit w-full"
            />
          </div>
        </div>
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3 p-2">
          {currentProducts.map((product) => (
            <Link className="p-4 border-2 border-red-600 rounded" to={`/detail/${product.id}`} key={product.id}>
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
                <div className="text-2xl font-bold text-center">{product.name}</div>
              </div>
              <div className="flex items-center justify-center">
                <Rating className="gap-2 text-red-600" value={product.rating} readOnly cancel={false}></Rating>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex 2xl:flex-row sm:flex-row flex-col 2xl:justify-between sm:justify-between justify-center 2xl:gap-0 sm:gap-0 gap-6 px-2">
          <div className="text-gray-500 text-center">
            Jami: {sortedProducts.length} ta mahsulot
          </div>
          <div className="flex justify-center items-center">
            <div
              className={`-translate-x-0 p-2 text-gray-500 cursor-pointer border border-gray-500 rounded-full mr-2 ${
                currentPage === 1 ? "opacity-50" : "opacity-100"
              }`}
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
            >
              <BsChevronCompactLeft size={20} />
            </div>
            {Array.from({
              length: Math.ceil(sortedProducts.length / itemsPerPage),
            }).map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`border px-3 py-1 text-lg rounded-full cursor-pointer -translate-x-0 mr-2 ${
                  currentPage === index + 1
                    ? "border-red-500 bg-red-100 text-red-500"
                    : "text-gray-500 border-gray-500"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <div
              className={`-translate-x-0 p-2 text-gray-500 cursor-pointer border border-gray-500 rounded-full mr-2 ${
                currentPage === Math.ceil(sortedProducts.length / itemsPerPage)
                  ? "opacity-50"
                  : "opacity-100"
              }`}
              onClick={goToNextPage}
              disabled={
                currentPage === Math.ceil(sortedProducts.length / itemsPerPage)
              }
            >
              <BsChevronCompactRight size={20} />
            </div>
          </div>
          <div className="flex 2xl:justify-end sm:justify-end justify-center">
            <select
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              className="py-1 w-32 border border-gray-500 text-gray-500 rounded-md"
            >
              <option value={8}>8 tadan</option>
              <option value={12}>12 tadan</option>
              <option value={16}>16 tadan</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
