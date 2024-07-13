"use client";
import { useProductStore } from "../store/store";
import Image from "next/image";
import cat1 from "../../public/cat1.png";
import cat2 from "../../public/cat2.png";

export default function Cart() {
  const { cart } = useProductStore();

  return (
    <table className="w-full text-center">
      <thead>
        <tr className="mb-4 border-b border-gray-200">
          <th className="p-4 text-left text-lg font-medium md:w-2/5">
            Product
          </th>
          <th className="p-4 text-left text-lg font-medium md:w-1/5">Price</th>
          <th className="p-4 text-left text-lg font-medium md:w-1/5">
            Quantity
          </th>
          <th className="p-4 text-end text-lg font-medium md:w-1/5">Amount</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product) => {
          const price = product.current_price?.[0]?.NGN?.[0];
          return (
            <tr key={product.name} className="border-gray-200">
              <td className="relative flex w-max items-center gap-6 p-4 pt-6 md:px-4">
                <Image
                  src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                  alt={product.name}
                  width={60}
                  height={60}
                />
                <span className="max-w-96 truncate text-left text-base font-medium">
                  {product.name}
                </span>
              </td>
              <td className="p-4 pt-6 text-left text-base font-medium md:px-4">
                {price != null ? (
                  <span> ₦ {price}</span>
                ) : (
                  <span>No price for this item</span>
                )}
              </td>
              <td className="p-4 pt-6 text-left text-base font-medium md:px-4">
                <div className="flex w-fit rounded-full border border-gray-300 p-2 text-left text-base font-medium">
                  <button className="rounded-full px-2 hover:bg-gray-300">
                    -
                  </button>
                  <input
                    type="text"
                    className="w-16 text-center"
                    defaultValue="1"
                    min="1"
                    max="100"
                  />
                  <button className="rounded-full px-2 hover:bg-gray-300">
                    +
                  </button>
                </div>
              </td>
              <td className="p-4 pt-6 text-end text-base font-medium md:px-4">
                $100
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
