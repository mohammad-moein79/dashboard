import React, { useState } from "react";
import BoxProduct from "../../Components/Box produc/BoxProduct";
import {
  ProductsBasketOfData,
  givANewArryProductAfterThatRomve,
} from "../../Data";

function Products() {
  let [ProductsBasket, setProductsBasket] = useState(ProductsBasketOfData);

  const FindAndRemoveProduct = (idProduct) => {
    let removeProductFromBasket = ProductsBasket.filter((product) => {
      return product.id !== idProduct;
    });
    givANewArryProductAfterThatRomve(removeProductFromBasket);
    setProductsBasket(removeProductFromBasket);
  };

  return (
    <div className="showGrid2 min-h-[573px]  gap-4  rounded-[10px]">
      {ProductsBasket.map((product) => (
        <BoxProduct
          {...product}
          removeProduct={FindAndRemoveProduct}
        ></BoxProduct>
      ))}
    </div>
  );
}

export default Products;
