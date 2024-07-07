import Image from "next/image";
import whiteLogo from "@/public/whiteLogo.svg";
import hero from "@/public/hero.jpg";
import ps5 from "@/public/playstation.png";
import Link from "next/link";
import { fSearch, promoItems, catItems } from "./data/data";

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

        <section>
          <h2>All Products</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {catItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`border-[rgba(25,27,31,0.2)]; flex flex-col rounded-[10px] border border-solid bg-white`}
                  style={{
                    filter: "drop-shadow(0px 8px 12px rgba(25, 27, 31, 0.1))",
                  }}
                >
                  <div className="flex h-80 w-full items-center justify-center">
                    <Image
                      src={`/cat${index + 1}.png`}
                      width={150}
                      className="px-2 py-3"
                      height={150}
                      alt={`cat${index + 1}.png`}
                    />
                  </div>
                  <div>
                    <span className="pb-2 text-2xl font-medium">Earpod</span>
                    <div>
                      <div>
                        <span>Oraimo</span>
                        <div>rating</div>
                        <div>
                          <span>price</span>
                          <span>discount</span>
                        </div>
                      </div>
                      <div>image</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
