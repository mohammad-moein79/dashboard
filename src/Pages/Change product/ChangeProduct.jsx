import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ProductsBasketOfData } from "../../Data";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import TittelBox from "../../Components/TitelBox/TitelBox";

function ChangeUser() {
  const params = useParams();

  let findProduct = () => {
    let findProductWantToChange = ProductsBasketOfData.find((product) => {
      return product.id == params.id;
    });
    return findProductWantToChange;
  };

  const { titel, dic, price } = findProduct();

  let [titelState, setTitelState] = useState(titel);
  let [dicState, setDicState] = useState(dic);
  let [priceState, setPriceState] = useState(price);
  let [showMassageError, setShowMassageError] = useState(false);
  let [showMassageSuccess, setShowMassageSuccess] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (priceState && dicState && titelState) {
      setShowMassageSuccess(true);

      setTimeout(() => {
        setShowMassageSuccess(false);
      }, 5000);
    } else {
      setShowMassageError(true);

      setTimeout(() => {
        setShowMassageError(false);
      }, 5000);
    }
  };

  return (
    <div className=" min-h-[573px] relative ">
      <div className="bg-[#eaeef0] dark:bg-[#272D35] p-4  rounded-[10px]">
        <TittelBox titel={"change info"}></TittelBox>
        <div className="flex justify-start p-2 ">
          <form onSubmit={submitHandler} className="flex flex-col gap-10">
            <div className="flex justify-between items-center p-1 gap-4">
              <div className="flex items-center flex-col gap-1 relative justify-center w-full">
                <div className="flex items-center gap-3 justify-center w-full">
                  <label className="dark:text-white text-[#222]">Tittel:</label>
                  <input
                    type="text"
                    onChange={(e) => setTitelState(e.target.value)}
                    className="text-white dark:bg-gray-700 bg-gray-500  p-2 pr-3 pl-3 rounded-[10px] outline-none focus:outline-[#5c3cad]"
                    name="Tittel"
                    id="Tittel"
                    value={titelState}
                  />
                </div>
                {titelState == false ? (
                  <span className="text-[14px] absolute top-11 text-rose-500">
                    pleas fill out the fild
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="flex items-center flex-col gap-1 relative justify-center w-full">
                <div className="flex items-center gap-3 justify-center w-full">
                  <label className="dark:text-white text-[#222]">Tittel:</label>
                  <input
                    type="text"
                    onChange={(e) => setDicState(e.target.value)}
                    className="text-white dark:bg-gray-700 bg-gray-500  p-2 pr-3 pl-3 rounded-[10px] outline-none focus:outline-[#5c3cad]"
                    name="Tittel"
                    id="Tittel"
                    value={dicState}
                  />
                </div>
                {dicState == false ? (
                  <span className="text-[14px] absolute top-11 text-rose-500">
                    pleas fill out the fild
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="flex items-center flex-col gap-1 relative justify-center w-full">
                <div className="flex items-center gap-3 justify-center w-full">
                  <label className="dark:text-white text-[#222]">Tittel:</label>
                  <input
                    type="text"
                    onChange={(e) => setPriceState(e.target.value)}
                    className="text-white dark:bg-gray-700 bg-gray-500  p-2 pr-3 pl-3 rounded-[10px] outline-none focus:outline-[#5c3cad]"
                    name="Tittel"
                    id="Tittel"
                    value={priceState}
                  />
                </div>
                {priceState == false ? (
                  <span className="text-[14px] absolute top-11 text-rose-500">
                    pleas fill out the fild
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex justify-start items-center gap-4">
              <button
                type="submit"
                className={`${
                  titelState && dicState && priceState
                    ? "bg-[#5c3cad] text-white"
                    : "bg-[#412588] text-slate-500"
                } pt-2 pb-2 pr-6 pl-6 rounded `}
              >
                submit
              </button>
              <Link
                to={"/products"}
                className="bg-red-500 pt-2 pb-2 pr-6 pl-6 rounded text-white"
              >
                cansel
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div
        className={`absolute bottom-[40px]  min-w-[400px] ${
          showMassageError ? "show" : "dontShow"
        }`}
      >
        <Alert variant="filled" severity="error">
          <h1 className="text-[20px]">error !</h1>
          <p className="text-[15px]">please fill out the form .</p>
        </Alert>
      </div>
      <div
        className={`absolute bottom-[40px]  min-w-[400px] ${
          showMassageSuccess ? "show" : "dontShow"
        }`}
      >
        <Alert variant="filled" severity="success">
          <h1 className="text-[20px]">success !</h1>
          <p className="text-[15px]">every thing that's right .</p>
        </Alert>
      </div>
    </div>
  );
}

export default ChangeUser;
