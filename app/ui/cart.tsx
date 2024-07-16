"use client";
import { useProductStore } from "@/app/store/store";
import Image from "next/image";

export default function Cart() {
  const { cart, updateCartQuantity, removeFromCart } = useProductStore();

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
        {cart.map((item) => {
          const price = item.product.current_price?.[0]?.NGN?.[0];
          const handleQuantityChange = (
            e: React.ChangeEvent<HTMLInputElement>,
          ) => {
            const newQuantity = parseInt(e.target.value);
            if (!isNaN(newQuantity) && newQuantity > 0) {
              updateCartQuantity(item.product.id, newQuantity);
            }
          };

          const incrementQuantity = () => {
            updateCartQuantity(item.product.id, item.quantity + 1);
          };

          const decrementQuantity = () => {
            if (item.quantity > 1) {
              updateCartQuantity(item.product.id, item.quantity - 1);
            } else if (item.quantity === 1) {
              removeFromCart(item.product.id);
            }
          };
          return (
            <tr key={item.product.name} className="border-gray-200">
              <td className="relative flex w-max items-center gap-6 p-4 pt-6 md:px-4">
                <Image
                  src={`https://api.timbu.cloud/images/${item.product.photos[0].url}`}
                  alt={item.product.name}
                  width={60}
                  height={60}
                  className="h-auto w-auto"
                />
                <span className="max-w-96 truncate text-left text-base font-medium">
                  {item.product.name}
                </span>
              </td>
              <td className="p-4 pt-6 text-left text-base font-medium md:px-4">
                {price != null ? (
                  <span> ₦ {price.toLocaleString()}</span>
                ) : (
                  <span>No price for this item</span>
                )}
              </td>
              <td className="p-4 pt-6 text-left text-base font-medium md:px-4">
                <div className="flex w-fit rounded-full border border-gray-300 p-2 text-left text-base font-medium">
                  <button
                    onClick={decrementQuantity}
                    className="rounded-full px-2 hover:bg-gray-300"
                  >
                    -
                  </button>
                  {item.quantity && (
                    <input
                      onChange={handleQuantityChange}
                      type="text"
                      defaultValue={item.quantity}
                      value={item.quantity}
                      className="w-16 text-center"
                      min="1"
                      max="100"
                    />
                  )}
                  <button
                    onClick={incrementQuantity}
                    className="rounded-full px-2 hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="p-4 pt-6 text-end text-base font-medium md:px-4">
                {price != null ? (
                  <span> ₦ {(price * item.quantity).toLocaleString()}</span>
                ) : (
                  <span>No price for this item</span>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
