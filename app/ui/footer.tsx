import Image from "next/image";
import appstore from "@/public/appstore.png";
import playstore from "@/public/playstore.png";
import linkedin from "@/public/linkedin.svg";
import facebook from "@/public/facebook.svg";
import google from "@/public/google.svg";

export default function Footer() {
  return (
    <footer className="bg-[#FFE5CE]">
      <div className="grid grid-cols-1 gap-8 p-10 sm:grid-cols-[1fr_1fr_1fr_1.5fr] sm:gap-12">
        <div className="footer-item">
          <h5>Contact us</h5>
          <a href="">No 123, Ikeja, Lagos State, Nigeria.</a>
          <a href="">+234-8169672420</a>
          <a href="">noahajiyon@gmail.com</a>
        </div>
        <div className="footer-item">
          <h5>Shop</h5>
          <a href="">Nigeria</a>
          <a href="">England</a>
          <a href="">United State</a>
          <a href="">Ethopia</a>
        </div>
        <div className="footer-item">
          <h5>Account</h5>
          <a href="">My Account</a>
          <a href="">Login/Register</a>
          <a href="">Cart</a>
          <a href="">Wishlist</a>
        </div>
        <div className="footer-item">
          <h5>Download App</h5>
          <div className="flex gap-3">
            <div>
              <a>
                Download our App and get extra 15% discount on your first order.
              </a>
              <div className="mt-8 flex gap-6">
                <a href="">
                  <Image src={facebook} alt="facebook" />
                </a>
                <a href="">
                  <Image src={google} alt="google" />
                </a>
                <a href="">
                  <Image src={linkedin} alt="linkedin" />
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <a href="">
                <Image src={appstore} alt="appstore" width={150} />
              </a>

              <a href="">
                <Image src={playstore} alt="playstore" width={150} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center border-t border-[#A39488] p-3">
        <span className="text-sm text-[#756C65]">Copyright ©Maukal 2024</span>
      </div>
    </footer>
  );
}
