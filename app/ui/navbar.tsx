import Image from "next/image";
import logo from "@/public/logo.svg";
import camSearch from "@/public/cam.svg";
import search from "@/public/search.svg";
import profile from "@/public/profile.png";
import cart from "@/public/cart.svg";
import Link from "next/link";
import { links } from "@/app/data/data";
import downArrow from "@/public/downArrow.svg";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="flex w-full justify-between px-10 py-3">
        <div className="flex items-center gap-10 lg:gap-16">
          <Link className="flex items-center" href="/">
            <Image src={logo} width={150} alt="logo" className="h-8 lg:h-10" />
          </Link>
          <div className="flex h-11 grow gap-2 rounded-[40px] border border-solid border-[rgba(35,37,41,0.8)] p-1 pl-3 focus-within:ring-2 hover:ring-2">
            <input
              type="text"
              placeholder="Enter your search"
              tabIndex={0}
              className="c grow focus:outline-none"
            ></input>
            <button
              type="button"
              className="rounded-full p-2 hover:bg-slate-100"
            >
              <Image src={camSearch} alt="camera logo" />
            </button>
            <button
              className="flex items-center gap-1 rounded-[40px] bg-[#FE7F0A] px-4 text-base font-medium text-white hover:bg-[#fe800a8c]"
              type="button"
            >
              <span>Search</span>
              <Image src={search} alt="search logo" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-8 lg:gap-12">
          <Link
            href="/cart"
            className="relative flex items-center gap-1 rounded-full p-3 hover:bg-gray-200"
          >
            <Image src={cart} alt="cart image" width={24} />
            <span className="absolute right-[2px] top-[2px] flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10.29px] font-bold text-white">
              1
            </span>
          </Link>
          <a href="">
            <Image
              src={profile}
              alt="profile logo"
              className="rounded-full hover:bg-gray-200"
            />
          </a>
        </div>
      </div>
      <div className="scroll flex w-full justify-between overflow-x-scroll bg-[#191B1F] sm:overflow-auto sm:px-4 md:justify-center md:gap-16">
        {links.map((item) => {
          return (
            <Link
              href="./"
              className="flex items-center gap-2 p-2 text-sm font-light hover:bg-gray-950"
              key={item.name}
            >
              <span className="uppercase text-white">{item.name}</span>
              {item.dropdown && <Image src={downArrow} alt="downArrow" />}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
