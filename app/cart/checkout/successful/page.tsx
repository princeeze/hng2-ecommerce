"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import success from "@/public/Successful.svg";

export default function Page() {
  const [count, setCount] = useState<number>(15);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 0) {
        router.push("/");
      } else {
        setCount((prevCount) => prevCount - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [count, router]);

  return (
    <div className="p-10">
      <header className="flex text-xl font-semibold text-gray-700">
        <span>Home/Cart</span>
        <span className="text-[#191B1F]">/Checkout</span>
      </header>
      <main>
        <div className="mt-4 flex flex-col items-center">
          <Image src={success} width={200} alt="success" />
          <p className="mt-6 text-center text-2xl font-semibold text-gray-700">
            Payment Successful!
          </p>
          <p className="mt-2 text-center text-lg font-medium text-gray-700">
            You will be redirected to the home page in{" "}
            <span className="text-orange-500">{count}</span>.
          </p>
        </div>
      </main>
    </div>
  );
}
