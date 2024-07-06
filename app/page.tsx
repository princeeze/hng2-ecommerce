import Image from "next/image";
import whiteLogo from "@/public/whiteLogo.svg";
import hero from "@/public/hero.jpg";
import Link from "next/link";
import { fSearch, promoItems } from "./data/data";

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

      <section className="flex gap-3 p-10">
        {promoItems.map((item) => {
          return (
            <div
              key={item.image}
              className="flex text-white"
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
    </div>
  );
}
