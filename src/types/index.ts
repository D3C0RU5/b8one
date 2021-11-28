
export interface Product {
    id: string;
    title: string;
    priceWithoutDiscount: Number;
    price: Number;
    parcel: {
      times: Number;
      value: Number;
    };
    imageSrc: string;
    imageAlt: string;
  }