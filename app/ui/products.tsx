"use client";
import Image from "next/image";
import star from "@/public/star.svg";
import Add from "@/public/Add.svg";
import { useProductStore } from "@/app/store/store";
import Link from "next/link";
import { Product } from "../utils/utils";

export default function Products({ product }: { product: Product }) {
  const addToCart = useProductStore((state) => state.addToCart);
  const price = product.current_price?.[0]?.NGN?.[0];

  return (
    <div
      key={product.name}
      className={`flex flex-col overflow-hidden rounded-[10px] border border-solid border-[#D1D1D2] bg-white drop-shadow-sm hover:drop-shadow-lg`}
    >
      <Link
        href={`/products/${product.id}`}
        className="relative flex h-60 w-full items-center justify-center bg-[#EDEDED] p-4"
      >
        <Image
          src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
          fill={true}
          sizes="(0-28)"
          className="overflow-hidden rounded-2xl object-contain p-4"
          alt={product.name}
        />
      </Link>
      <div className="flex flex-col gap-3 p-3">
        <Link
          href={`/products/${product.id}`}
          className="overflow-hidden text-ellipsis whitespace-nowrap text-xl font-bold text-[#191B1F]"
        >
          {product.name}
        </Link>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2.5">
            <span className="text-base font-medium leading-[25.20px] text-zinc-900 opacity-60">
              Timbu Cloud
            </span>
            <div className="flex gap-3">
              <div className="flex gap-1">
                <Image src={star} alt="star ion" className="h-auto w-auto" />
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
              {price != null ? (
                <span> ₦ {price}</span>
              ) : (
                <span>No price for this item</span>
              )}
              {product.discounted_price && (
                <span className="pl-3 line-through opacity-40">
                  ₦ {product.discounted_price}
                </span>
              )}
            </div>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center"
          >
            <Image
              src={Add}
              alt="Add Icon"
              className="w-10 pt-10 hover:text-[#FE7F0A]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
