interface Link {
  name: string;
  dropdown: boolean;
}

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
