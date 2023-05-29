import React from "react";
import { Link } from "react-router-dom";

function BoxProduct({ id, img, dic, titel, price, removeProduct }) {
  return (
    <div className="min-w-1/4 min-[330px] max-h-[330px] bg-[#eaeef0] dark:bg-[#272D35] overflow-hidden flex flex-col justify-between rounded-[10px]">
      <div className="w-full">
        <img className="w-full" src={img} alt="" />
      </div>
      <div className="text-[#222} dark:text-white p-3">
        <h1 className="text-[18px]">{titel}</h1>
        <p className="text-[15px] text-[#999] ">{dic}</p>
        <h3 className="text-blue-500">price: {price}$</h3>
      </div>
      <div className="flex items-center justify-start gap-3 p-2">
        <button
          onClick={() => removeProduct(id)}
          className="bg-red-500 pt-2 pb-2 pr-4 pl-4 rounded text-white "
        >
          remove
        </button>
        <Link
          to={`${id}`}
          className="bg-[#5c3cad] pt-2 pb-2 pr-4 pl-4 rounded text-white "
        >
          change
        </Link>
      </div>
    </div>
  );
}

export default BoxProduct;
