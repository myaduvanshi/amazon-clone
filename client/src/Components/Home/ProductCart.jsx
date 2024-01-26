import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../app/features/cartSlice";

function ProductCart() {
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-wrap p-1 justify-center">
        {items.map((item) => (
          <div key={item.id} className="bg-white w-[19.5rem] px-2 h-[26rem] m-[0.6rem]">
            <h2 className="py-2 px-2">
              <b>{item.title}</b>
            </h2>
            <div className="w-full m-1 cursor-pointer flex justify-center">
              <img className="w-86 h-auto" src={item.img} alt="" />
            </div>
            <div
              className="
      w-72 ml-auto mr-auto 
      "
            >
              <div className="flex justify-center">
                <p>
                  {" "}
                  <span className="text-xs text-gray-600">&#x20b9;</span>
                  <span className="text-xl font-bold">{item.price}</span>
                </p>
              </div>
              <button
                className="
        bg-[#FFA41C] rounded-2xl py-1 px-[6.5rem] m-1 hover:bg-[#f39913]
        "
              >
                Buy Now
              </button>
              <button
              onClick={() => dispatch(addToCart(item))}
                className="
        bg-[#FFD814] rounded-2xl py-1 px-24 m-1 hover:bg-[#ecc609]
        "
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductCart;
