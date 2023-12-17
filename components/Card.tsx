import { CardProps, IconTextProps, PriceBoxProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const PriceBox = ({ price }: PriceBoxProps) => (
  <div className="price__box">
    <div className="price__content">
      <p className="bold-18">
        <span className="font-normal">From</span> €{price}/daily
      </p>
    </div>
  </div>
);

const IconText = ({ iconSrc, iconAlt, value, unit, pluralUnit }: IconTextProps) => (
  <div className="flex-start gap-1">
    <Image src={iconSrc} alt={iconAlt} width={20} height={20} />
    <p className="font-bold">
      {value} <span className="font-normal">{value > 1 ? pluralUnit : unit}</span>
    </p>
  </div>
);

const Card = ({
  id,
  image,
  guests,
  bedroom,
  width,
  bath,
  title,
  country,
  view,
  price,
}: CardProps) => {
  const cardContent = (
    <div className="w-[350px] max-w-[500px] bg-white pb-8 rounded-br-[40px] overflow-hidden">
      <div className="w-full relative">
        <Image
          src={image}
          alt="card image"
          width={400}
          className="card__image"
          height={356}
          priority
        />
        <PriceBox price={price} />
      </div>

      <div className="px-3">
        <div className="text-dark pb-4">
          <div className="regural-18 flex-start gap-4 pb-4">
            <span className="font-bold tracking-[1px] capitalize ">{country}</span>
            <Image alt="circle" src="/circle.svg" width={10} height={10} />
            <p className="font-normal capitalize ">{view}</p>
          </div>

          <h2 className="bold-36 capitalize">{title}</h2>
        </div>

        <div className="flex-between px-2">
          <div className="flex flex-col gap-2">
            <IconText
              iconSrc="/people.svg"
              iconAlt="guests"
              value={guests}
              unit="guest"
              pluralUnit="guests"
            />
            <IconText
              iconSrc="/blueprint.svg"
              iconAlt="m2"
              value={width}
              unit="m2"
              pluralUnit="m2"
            />
          </div>

          <div className="flex flex-col gap-2">
            <IconText
              iconSrc="/bath-tub.svg"
              iconAlt="bath"
              value={bath}
              unit="bathroom"
              pluralUnit="bathrooms"
            />
            <IconText
              iconSrc="/bed.svg"
              iconAlt="bedroom"
              value={bedroom}
              unit="bedroom"
              pluralUnit="bedrooms"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return id ? (
    <Link href={`/your-path/${id}`} className="cursor-pointer">
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
};

export default Card;
