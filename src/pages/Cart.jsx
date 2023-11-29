import React from "react";

const Cart = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-1/2 flex flex-col">
        <h1 className="w-full text-center text-xl font-semibold">
          1. Выбранные продукты
        </h1>
        <h1 className="w-full text-center text-xl font-semibold">
          2. Delivery
        </h1>
        <div>record</div>
        <select className="w-full mx-4 border-2 h-10">ar</select>
        <h1 className="w-full text-center text-xl font-semibold">3. Payment</h1>
        <input type="radio" />
        <input type="radio" />
        <h2>Address Information</h2>
        <div></div>
        <button>PROCEED TO PAYMENT</button>
      </div>
    </div>
  );
};

export default Cart;
