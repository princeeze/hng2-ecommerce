"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ID, Product } from "@/app/store/store";
import { useProductStore } from "@/app/store/store";
import Image from "next/image";

export default function Page({ params }: { params: { id: ID } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (params.id) {
      const fetchProduct = async () => {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/${params.id}?organization_id=${process.env.NEXT_PUBLIC_ORG_ID}&Appid=${process.env.NEXT_PUBLIC_APPID}&Apikey=${process.env.NEXT_PUBLIC_APIKEY}`,
          );
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          const data = await res.json();
          setProduct(data);
        } catch (error) {
          console.error("Error fetching product data:", error);
        }
      };
      fetchProduct();
    }
  }, [params.id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const price = product.current_price?.[0]?.NGN?.[0];
  return (
    <div className="container mx-auto p-4">
      {params.id}
      <h1 className="mb-4 text-3xl font-bold">{product.name}</h1>
      <div className="flex">
        <Image
          src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`}
          alt={product.name}
          width={400}
          height={400}
          className="h-auto w-1/2"
        />
        <div className="w-1/2 p-4">
          <p className="mb-4 text-lg">{product.description}</p>
          <div className="mb-4 text-xl font-bold">
            {price != null ? (
              <span> ₦ {price}</span>
            ) : (
              <span>No price for this item</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
