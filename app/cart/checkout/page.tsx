import cat1 from "@/public/cat1.png";
import cat2 from "@/public/cat2.png";
import Image from "next/image";
import Link from "next/link";
import visa from "@/public/Cards.svg";

export default function Page() {
  return (
    <div className="p-10">
      <header className="flex text-xl font-semibold text-gray-700">
        <span>Home/Cart</span>
        <span className="text-[#191B1F]">/Checkout</span>
      </header>
      <main>
        <h3>Billing Details</h3>
        <div className="grid grid-cols-1 gap-x-20 md:grid-cols-2">
          <form className="grid grid-cols-1 gap-x-8 gap-y-5">
            <label htmlFor="fullname">Fullname</label>
            <input
              type="text"
              id="fullname"
              className="mt-[-15px] rounded-md border border-gray-300 bg-gray-100 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Fullname"
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="mt-[-15px] rounded-md border border-gray-300 bg-gray-100 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Email"
            />

            <label htmlFor="phone">Phone number</label>
            <input
              type="tel"
              id="phone"
              className="mt-[-15px] rounded-md border border-gray-300 bg-gray-100 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Phone number"
            />

            <label htmlFor="customerId">Customer ID</label>
            <input
              type="text"
              id="customerId"
              className="mt-[-15px] rounded-md border border-gray-300 bg-gray-100 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Customer ID"
            />

            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              className="mt-[-15px] rounded-md border border-gray-300 bg-gray-100 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Address"
            />

            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              className="mt-[-15px] rounded-md border border-gray-300 bg-gray-100 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="State"
            />

            <label htmlFor="postalCode">Postal code</label>
            <input
              type="text"
              id="postalCode"
              className="mt-[-15px] rounded-md border border-gray-300 bg-gray-100 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Postal code"
            />

            <div className="mt-[-15px] flex items-center">
              <input type="checkbox" id="saveInfo" className="mr-2" />
              <label htmlFor="saveInfo">Save information for next time</label>
            </div>
          </form>
          <div className="flex flex-col items-end gap-4">
            <div className="w-full rounded-lg bg-slate-50 p-4">
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
            <div className="mt-4 flex w-full flex-col gap-4">
              <div className="flex items-center gap-4">
                <input type="radio" id="payOnDelivery" name="payment" />
                <label htmlFor="payOnDelivery">Pay on delivery</label>
              </div>

              <div className="flex items-center gap-4">
                <input type="radio" id="payWithCard" name="payment" />
                <label htmlFor="payWithCard" className="w-full">
                  Pay with card
                </label>
                <div className="flex w-full justify-end">
                  <Image src={visa} alt="visa" className="ml-2" />
                </div>
              </div>
            </div>
            <h3>Card Info</h3>
            <form className="grid w-full grid-cols-1 gap-x-8 gap-y-5">
              <label htmlFor="fullname">Name on Card</label>
              <input
                type="text"
                id="fullname"
                className="mt-[-15px] rounded-md border border-gray-300 bg-gray-100 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="Fullname"
              />
              <label htmlFor="fullname">Card Number</label>
              <input
                type="text"
                id="fullname"
                className="mt-[-15px] rounded-md border border-gray-300 bg-gray-100 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="Fullname"
              />
              <div className="grid w-full grid-cols-3 gap-4">
                <div className="w-full">
                  <label htmlFor="fullname">CVV Number</label>
                  <input
                    type="text"
                    id="fullname"
                    className="w-full rounded-md border border-gray-300 bg-gray-100 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    placeholder="CVV"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="fullname">Exp</label>
                  <input
                    type="text"
                    id="fullname"
                    className="w-full rounded-md border border-gray-300 bg-gray-100 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    placeholder="01/22"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="fullname">Card Pin</label>
                  <input
                    type="text"
                    id="fullname"
                    className="w-full rounded-md border border-gray-300 bg-gray-100 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    placeholder="e.g. 0000"
                  />
                </div>
              </div>
            </form>
            <div className="flex w-full justify-between">
              <Link href="" about="Checkout">
                <button
                  type="submit"
                  className="rounded-lg bg-[#FE7F0A] px-4 py-2 text-white"
                >
                  Proceed with payment
                </button>
              </Link>
              <Link href="./cart/checkout" about="Checkout">
                <button
                  type="submit"
                  className="rounded-lg bg-[#0e0803] px-4 py-2 text-white"
                >
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
