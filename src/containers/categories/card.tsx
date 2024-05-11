'use client';

import { add, remove } from "@/lib/store/CartSlicer";
import { CategoryItemData } from "@/types/items";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";


const Card = (params: CategoryItemData) => {
    const dispatch = useDispatch()
  function showProductDetailCard() {
    // console.log("product clicked", itemCode);
    window.scrollTo({ top: 0, behavior: "smooth" });
    // dispatch(setSelectedProduct(itemCode));
  }

  const [qty, setQty] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if(isChecked){
        setQty(1)
        dispatch(add({...params, qty}))
    }else{
        setQty(0)
        dispatch(remove(params))
    }
  }, [isChecked])

  useEffect(() => {
    if(qty != 0){
        dispatch(add({...params, qty}))
    }
  }, [qty])

  function qtyIncrement(){
    setQty(prev => {
        if(prev == 0){
            setIsChecked(true)
            return 1
        }else{
            return prev + 1
        }
    })
  }

  function qtyDecrement(){
    setQty(prev => {
        if(prev <= 1){
            setIsChecked(false)
            return 0
        }else{
            return prev - 1
        }
    })
  }

  return (
    <div className="p-4 border rounded-md text-gray-500">
      <div className="flex items-start justify-between">
        <div className="flex items-start">
          <input
            type="checkbox"
            className="mt-2"
            checked={isChecked}
            onChange={() => setIsChecked(prev => !prev)}
          />
          <h3
            className="ml-2 underline font-medium cursor-pointer"
            onClick={showProductDetailCard}
          >
            {params.name}
          </h3>
        </div>
        {/* <BookMarkBar isBookMarked={wishlist} postWishList={postWishList} /> */}
      </div>
      <div className="flex justify-between py-3 text-sm">
        <div>
            {
                (params.disabled.toString() == '0') ?
                <p className="py-1 text-green-400">In Stock</p> :
                <p className="py-1 text-red-400">Disabled</p>
            }
          <p className="pt-1">{params.description}</p>
        </div>
        <div className="custom-number-input h-10 w-32">
          <div className="flex flex-row h-10 w-full border rounded-lg relative bg-transparent mt-1">
            <button
              data-action="decrement"
              className=" text-gray-600 hover:text-gray-700 hover:border hover:bg-gray-300 h-full w-20 rounded-l-lg cursor-pointer outline-none"
              onClick={qtyDecrement}
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              className="focus:outline-none text-center w-full bg-white font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
              name="custom-input-number"
              value={qty}
              min={0}
            ></input>
            <button
              data-action="increment"
              className="text-gray-600 hover:text-gray-700 hover:bg-gray-300 hover:border h-full w-20 rounded-r-lg cursor-pointer"
              onClick={qtyIncrement}
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function BookMarkBar({ isBookMarked, postWishList }) {
  if (!isBookMarked) {
    return (
      <svg
        width="12"
        height="15"
        viewBox="0 0 12 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer"
        onClick={postWishList}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.667236 2.33398C0.667236 1.22942 1.56267 0.333984 2.66724 0.333984H9.3339C10.4385 0.333984 11.3339 1.22942 11.3339 2.33398V13.0196C11.3339 13.833 10.4145 14.3061 9.75264 13.8333L6.00057 11.1533L2.24848 13.8333C1.58661 14.3061 0.667236 13.833 0.667236 13.0196V2.33398ZM2.66724 1.66732C2.29905 1.66732 2.00057 1.9658 2.00057 2.33398V12.3719L5.4193 9.92992C5.76704 9.68152 6.2341 9.68152 6.58184 9.92992L10.0006 12.3719V2.33398C10.0006 1.9658 9.7021 1.66732 9.3339 1.66732H2.66724Z"
          fill="#0A4E71"
        />
      </svg>
    );
  } else {
    return (
      <svg
        width="11"
        height="14"
        viewBox="0 0 11 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer"
        onClick={postWishList}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 2C0 0.895433 0.895433 0 2 0H8.66667C9.77127 0 10.6667 0.895433 10.6667 2V12.6856C10.6667 13.499 9.74726 13.9721 9.0854 13.4993L5.33333 10.8193L1.58124 13.4993C0.919373 13.9721 0 13.499 0 12.6856V2ZM2 1.33333C1.63181 1.33333 1.33333 1.63181 1.33333 2V12.0379L4.75207 9.59593C5.0998 9.34753 5.56687 9.34753 5.9146 9.59593L9.33333 12.0379V2C9.33333 1.63181 9.03487 1.33333 8.66667 1.33333H2Z"
          fill="#0A4E71"
        />
        <path d="M1 1H10V12.5L5.5 9.5L1 12.5V1Z" fill="#0A4E71" />
      </svg>
    );
  }
}

export default Card;
