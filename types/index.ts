export type CardProps = {
  id?: number;
  image?: string; 
  guests?: number;
  rooms: number;
  width?: number;
  bath: number;
  title: string;
  country: string;
  view?: string;
  price: number;
  paying?: string;
};
export type IconTextProps = {
  iconSrc: string;
  iconAlt: string;
  value: number ;
  unit: string;
  pluralUnit: string;
};

export type PriceBoxProps = {
  price: number;
  paying: string;
};

export type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  handlClick?: () => void;
};

export type OptionProps = {
  name: string;
  value?: string;
};

export type CustomFilterProps = {
  title?: string;
  options: OptionProps[];
  setFilterState: any;
};

export type ExternalIDType = {
  params: { id: number };
};
export type DataProps = {
  price: number;
  rentFrequency: string;
  rooms: number;
  title: string;
  baths: number;
  area: number;
  description: string;
  type: string;
  purpose: string;
  furnishingStatus: string;
  amenities: {}[];
  photos: { url: string }[]; 
  location: { name: string }[];
  coverPhoto?: { url: string }; 
  externalID?: number; 
};
