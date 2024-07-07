interface Link {
  name: string;
  dropdown: boolean;
}

interface promoItems {
  color: string;
  image: string;
}

interface gridItem {
  img: number;
  title: string;
  content: string;
}

export const fSearch: string[] = [
  "Rechargeable Fan",
  "iPhone 15 Pro Max",
  "Lexus Es 350",
];

export const links: Link[] = [
  {
    name: "Categories",
    dropdown: true,
  },
  {
    name: "Home",
    dropdown: false,
  },
  {
    name: "Shop",
    dropdown: false,
  },
  {
    name: "Checkout",
    dropdown: false,
  },
  {
    name: "Suppliers",
    dropdown: false,
  },
];

export const promoItems: promoItems[] = [
  {
    color: "C26900",
    image: "/Img.png",
  },
  {
    color: "1B5779",
    image: "/Img-1.png",
  },
  {
    color: "000000",
    image: "/Img-2.png",
  },
];

export const catItems: Number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

export const gridItems: gridItem[] = [
  {
    img: 0,
    title: "fast delivery",
    content: "Free delivery for all orders above 100,00 thousand naira",
  },
  {
    img: 1,
    title: "24/7 SUPPORT SYSTEM",
    content: "Friendly 24/7 Customer Support",
  },
  {
    img: 2,
    title: "secure system",
    content: "Secured payment via all our mode of payment",
  },
];
