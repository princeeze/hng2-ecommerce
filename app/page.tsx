import Image from "next/image";
import whiteLogo from "@/public/whiteLogo.svg";
import hero from "@/public/hero.jpg";
import ps5 from "@/public/playstation.png";
import star from "@/public/star.svg";
import Add from "@/public/Add.svg";
import Link from "next/link";
import bag from "@/public/bag.png";
import dropdown from "@/public/dropdown.svg";
import woman from "@/public/woman.png";
import man from "@/public/man.png";
import checkers from "@/public/checkers.png";
import email from "@/public/email.png";
import { fSearch, promoItems, catItems, gridItems } from "./data/data";

export default function Page() {
  return (
    <div>
      <div
        className="flex h-[692px] flex-col justify-center px-10 text-white"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="flex items-center gap-5 pb-1">
          <Image src={whiteLogo} alt="logo" />
          <p className="text-4xl font-medium leading-[50.40px] text-white">
            Welcome to Maukal
          </p>
        </div>
        <h1 className="max-w-[820px] pb-6 text-7xl font-semibold leading-[100.80px]">
          The Leading Online Store with the Largest Product
        </h1>
        <Link href="./" about="Login" className="pb-6">
          <button
            className="flex items-center justify-center gap-2.5 rounded-lg bg-[#FE7F0A] px-[18px] py-2.5 text-2xl font-semibold text-white shadow-[0px_1px_12px_rgba(0,0,0,0.25)]"
            type="button"
          >
            <span>Shop Now</span>
          </button>
        </Link>
        <div className="flex items-center gap-6">
          <p className="text-2xl">Frequently Searched:</p>
          <ol className="flex list-none gap-6">
            {fSearch.map((item) => {
              return (
                <li
                  key={item}
                  className="rounded-[100px] border border-white px-6 py-2.5 hover:bg-white hover:text-[#CC7F51]"
                >
                  {item}
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <main className="p-10">
        <section className="flex flex-wrap gap-3 pb-16">
          {promoItems.map((item) => {
            return (
              <div
                key={item.image}
                className="flex shrink grow basis-64 text-white"
                style={{ backgroundColor: "#" + item.color }}
              >
                <div className="flex w-1/2 flex-col justify-between py-4 pl-5">
                  <div className="flex flex-col gap-2">
                    <p className="text-2xl font-semibold leading-[140%]">
                      New Deals at Best Prices
                    </p>
                    <span>From $50.00</span>
                  </div>
                  <a href="" className="underline">
                    Browse Deals
                  </a>
                </div>
                <div className="flex w-1/2 items-center">
                  <Image
                    src={item.image}
                    width={300}
                    height={300}
                    alt="item.image"
                  />
                </div>
              </div>
            );
          })}
        </section>

        <section>
          <h2>Popular Categories</h2>
          <div className="grid grid-cols-6 gap-3">
            {catItems.slice(0, 12).map((item, index) => {
              return (
                <a
                  key={index}
                  className="flex flex-col items-center justify-between bg-[#D9D9D9] px-3 pt-2 hover:bg-slate-300"
                  href=""
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src={`/cat${index + 1}.png`}
                      width={150}
                      className="px-2 py-3"
                      height={150}
                      alt={`cat${index + 1}.png`}
                    />
                  </div>
                  <span className="pb-2 text-2xl font-medium">Earpod</span>
                </a>
              );
            })}
          </div>
        </section>

        <section className="mt-14 flex justify-between bg-black text-white">
          <div className="flex max-w-[760px] flex-col justify-center p-12">
            <h2 className="pb-2 text-5xl font-semibold leading-[67.20px]">
              PS 5 SONY DELIVERS TO YOU WITH A SPEED OF LIGHT
            </h2>
            <p className="max-w-[70%] pb-7 text-2xl font-light leading-8">
              Worldwide shopping. We ship to over 200 countries right to your
              doorstep
            </p>
            <Link href="./" about="Login">
              <button
                className="flex items-center justify-center gap-2.5 rounded-lg bg-[#FE7F0A] px-[18px] py-2.5 text-2xl font-semibold text-white shadow-[0px_1px_12px_rgba(0,0,0,0.25)]"
                type="button"
              >
                <span>Order Now</span>
              </button>
            </Link>
          </div>
          <div className="pr-12 pt-12">
            <Image src={ps5} alt="playstation5" />
          </div>
        </section>

        <section className="mt-14">
          <h2>All Products</h2>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {catItems.slice(4, 20).map((item, index) => {
              return (
                <div
                  key={index}
                  className={`border-[rgba(25,27,31,0.2)]; flex flex-col rounded-[10px] border border-solid bg-white`}
                  style={{
                    filter: "drop-shadow(0px 8px 12px rgba(25, 27, 31, 0.03))",
                  }}
                >
                  <div className="flex h-72 w-full items-center justify-center bg-[#EDEDED]">
                    <Image
                      src={`/cat${index + 1}.png`}
                      width={197}
                      className="px-2 py-3"
                      height={240}
                      alt={`cat${index + 1}.png`}
                    />
                  </div>
                  <div className="flex flex-col gap-3 p-3">
                    <span className="text-2xl font-medium text-[#191B1F]">
                      Earpod
                    </span>
                    <div className="flex justify-between">
                      <div className="flex flex-col gap-2.5">
                        <span className="text-lg font-medium leading-[25.20px] text-zinc-900 opacity-60">
                          Oraimo
                        </span>
                        <div className="flex gap-3">
                          <div className="flex gap-1">
                            <Image src={star} alt="star ion" />
                            <span>4.9</span>
                          </div>
                          <div className="border-l border-gray-400 px-3">
                            <div className="rounded-[20px] bg-neutral-200 px-2.5">
                              <span className="text-xs font-medium text-zinc-900 opacity-60">
                                New Arrival
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="font-medium leading-snug text-zinc-900">
                          <span className="pr-3 line-through opacity-40">
                            ₦ 10,599
                          </span>
                          <span>₦ 9,999</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={Add}
                          alt="Add Icon"
                          className="w-10 pt-10"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="my-14 flex gap-2">
          <div className="w-full overflow-hidden bg-[#FFD6D6] p-8">
            <h3 className="text-4xl font-semibold text-zinc-900">
              Comfortable Styles for her
            </h3>
            <div className="flex justify-between">
              <div className="flex w-auto flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <p className="max-w-[350px] text-2xl text-zinc-900">
                    Shop Maukal fashion including clothing, shoes, jewelry,
                    watches, bags and more.
                  </p>
                  <a href="" className="p-1.5 underline">
                    See more
                  </a>
                </div>
                <a href="" className="flex items-center gap-3">
                  <Image src={bag} alt="bag image" />
                  <div className="flex flex-col text-black">
                    <h4 className="text-xl font-semibold">
                      Top Ladies Handbag
                    </h4>
                    <span className="">Big Sale $20</span>
                  </div>
                  <Image src={dropdown} alt="dropdown" />
                </a>
              </div>
              <div className="relative w-[49%]">
                <Image
                  src={woman}
                  alt="woman image"
                  height={612}
                  width={407}
                  className="absolute -bottom-20 -right-3 w-auto min-w-60"
                />
              </div>
            </div>
          </div>
          <div className="w-full overflow-hidden bg-[#EDEDED] p-8">
            <h3 className="text-4xl font-semibold text-zinc-900">
              Comfortable Styles for him
            </h3>
            <div className="flex justify-between">
              <div className="flex w-auto flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <p className="max-w-[350px] text-2xl text-zinc-900">
                    Shop Maukal fashion including clothing, shoes, jewelry,
                    watches, bags and more.
                  </p>
                  <a href="" className="p-1.5 underline">
                    See more
                  </a>
                </div>
                <a href="" className="flex items-center gap-3">
                  <Image src={checkers} alt="checkers image" />
                  <div className="flex flex-col text-black">
                    <h4 className="text-xl font-semibold">Checkers Shirt</h4>
                    <span className="">Big Sale $20</span>
                  </div>
                  <Image src={dropdown} alt="dropdown" />
                </a>
              </div>
              <div className="relative w-[49%]">
                <Image
                  src={man}
                  alt="man image"
                  height={612}
                  width={407}
                  className="absolute -bottom-28 -right-3 w-auto min-w-60"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-14 grid grid-cols-3 justify-center gap-6 px-12">
          {gridItems.map((item) => {
            return (
              <div key={item.title} className="flex flex-col items-center">
                <Image
                  src={`/Services-${item.img}.svg`}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="pb-6"
                />
                <h4 className="pb-2 text-2xl font-semibold uppercase">
                  {item.title}
                </h4>
                <p className="text-sm">{item.content}</p>
              </div>
            );
          })}
        </section>

        <section className="flex items-center justify-between bg-[#EDEDED]">
          <div className="px-10">
            <h4 className="pb-2 text-5xl font-semibold">
              Subscribe to our Newsletter
            </h4>
            <p className="pb-10 text-2xl text-[#191B1F]">
              Subscribe to our newsletter and get 10% off your first purchase
            </p>

            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-bl-lg rounded-tl-lg border-gray-300 bg-white p-2"
              />
              <button
                type="submit"
                className="rounded-br-lg rounded-tr-lg bg-[#FE7F0A] px-4 py-2 text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="p-6">
            <Image src={email} alt="email" />
          </div>
        </section>
      </main>
    </div>
  );
}
