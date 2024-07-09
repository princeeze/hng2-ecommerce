import Link from "next/link";
import cat1 from "../../public/cat1.png";
import cat2 from "../../public/cat2.png";
import Image from "next/image";

export default function Page() {
  return (
    <div className="p-10">
      <header className="flex text-xl font-semibold text-gray-700">
        <span>Home</span>
        <span className="text-[#191B1F]">/Cart</span>
      </header>
      <main>
        <div className="max-w-full overflow-x-auto">
          <table className="w-full text-center">
            <thead>
              <tr className="mb-4 border-b border-gray-200">
                <th className="p-4 text-left text-lg font-medium md:w-2/5">
                  Product
                </th>
                <th className="p-4 text-left text-lg font-medium md:w-1/5">
                  Price
                </th>
                <th className="p-4 text-left text-lg font-medium md:w-1/5">
                  Quantity
                </th>
                <th className="p-4 text-end text-lg font-medium md:w-1/5">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-gray-200">
                <td className="flex w-max items-center gap-6 p-4 pt-6 md:px-4">
                  <Image src={cat1} alt="cat" width={60} />
                  <span className="text-left text-base font-medium">
                    Sweater
                  </span>
                </td>
                <td className="p-4 pt-6 text-left text-base font-medium md:px-4">
                  $100
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
              <tr className="border-b border-gray-200">
                <td className="flex w-max items-center gap-6 p-4 md:px-4">
                  <Image src={cat2} alt="cat" width={60} />
                  <span className="text-left text-base font-medium">
                    Gamepad
                  </span>
                </td>
                <td className="p-4 text-left text-base font-medium md:px-4">
                  $100
                </td>
                <td className="p-4 text-left text-base font-medium md:px-4">
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
                <td className="p-4 text-end text-base font-medium md:px-4">
                  $100
                </td>
              </tr>
            </tbody>
          </table>
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
                <p>$740</p>
              </div>
              <hr className="my-3 border-[#191B1F]" />
              <div className="flex justify-between">
                <p>Shipping</p>
                <p>$00.00</p>
              </div>
              <hr className="my-2 border-[#191B1F]" />
              <div className="flex justify-between">
                <p>
                  <strong>Total</strong>
                </p>
                <p>$750</p>
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
