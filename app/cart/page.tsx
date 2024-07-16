"use client";
import Link from "next/link";
import { useProductStore } from "@/app/store/store";
import Cart from "../ui/cart";

export default function Page() {
  const { cart } = useProductStore();
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.product.current_price[0].NGN[0] * item.quantity,
    0,
  );
  const shippingFee = 2000;
  return (
    <div className="p-10">
      <header className="flex text-xl font-semibold text-gray-700">
        <span>Home</span>
        <span className="text-[#191B1F]">/Cart</span>
      </header>
      <main>
        <div className="max-w-full overflow-x-auto">
          <Cart />
        </div>
        <div className="flex w-full justify-between py-12">
          <Link
            href="./"
            className="rounded border border-gray-300 p-1.5 text-base font-semibold text-black"
          >
            <button>Return Home</button>
          </Link>
          <Link
            href="./"
            className="rounded border border-gray-300 p-1.5 text-base font-semibold text-black"
          >
            <button>Update Cart</button>
          </Link>
        </div>
        <div className="grid grid-cols-1 items-start gap-10 min-[638px]:grid-cols-2 md:gap-20">
          <form className="flex w-auto items-center">
            <input
              type="text"
              placeholder="Enter Coupon code"
              className="w-full rounded-bl-lg rounded-tl-lg border border-gray-300 bg-white p-2"
            />
            <button
              type="submit"
              className="w-1/2 rounded-br-lg rounded-tr-lg bg-[#FE7F0A] px-4 py-2 text-white"
            >
              Apply
            </button>
          </form>
          <div className="flex flex-col items-end gap-4">
            <div className="w-full rounded-lg bg-slate-100 p-4">
              <strong>Cart Total</strong>
              <div className="flex justify-between pt-3">
                <p>Amount</p>
                <p>₦ {totalAmount.toLocaleString()}</p>
              </div>
              <hr className="my-3 border-[#191B1F]" />
              <div className="flex justify-between">
                <p>Shipping</p>
                <p>₦ {shippingFee.toLocaleString()}</p>
              </div>
              <hr className="my-2 border-[#191B1F]" />
              <div className="flex justify-between">
                <p>
                  <strong>Total</strong>
                </p>
                <p> ₦ {(totalAmount + shippingFee).toLocaleString()}</p>
              </div>
            </div>
            <Link href="./cart/checkout" about="Checkout">
              <button
                type="submit"
                className="rounded-lg bg-[#FE7F0A] px-4 py-2 text-white"
              >
                Proceed to checkout
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
