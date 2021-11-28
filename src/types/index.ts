
export interface Product {
    title: string;
    priceWithoutDiscount: Number;
    price: Number;
    parcel: {
      times: Number;
      value: Number;
    };
    imageSrc: string;
  }