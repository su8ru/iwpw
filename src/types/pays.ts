export interface pays {
  data: {
    name: string;
    link?: string;
    type: payType;
    logo: string;
  }[];
}

export enum payType {
  felica = "felica",
  card = "card",
  barcode = "barcode",
  contactless = "contactless"
}
