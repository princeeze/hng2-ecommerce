import Image from "next/image";
import logo from "@/public/logo.svg";
import camSearch from "@/public/cam.svg";
import search from "@/public/search.svg";
import globe from "@/public/globe.svg";
import profile from "@/public/profile.svg";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-10 py-6">
      <div>
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <div className="focus-within:ring-2 hover:ring-2">
          <input
            type="text"
            placeholder="Enter your search"
            tabIndex={0}
          ></input>
          <button type="button">
            <Image src={camSearch} alt="camera logo" />
          </button>
          <button type="button">
            <span>Search</span>
            <Image src={search} alt="search logo" />
          </button>
        </div>
      </div>
      <div className="align-center flex">
        <a href="">
          <Image src={globe} alt="globe logo" />
          <span>Eng</span>
        </a>
        <a href="">
          <Image src={profile} alt="profile logo" />
        </a>
        <button>Sign up</button>
      </div>
    </nav>
  );
}
