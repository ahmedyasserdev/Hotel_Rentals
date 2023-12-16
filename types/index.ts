export type CardProps = {
    id?: number;
    image : string ;
  guests : number ;
  bedroom : number
  width : number ;
  bath : number ;
  title : string ;
  country : string ;
  view : string ;
  price : number
}


export type IconTextProps = {
    iconSrc : string ;
    iconAlt : string ;
    value : number ;
    unit : string ;
    pluralUnit : string
}

export type PriceBoxProps = {
    price : number
  }