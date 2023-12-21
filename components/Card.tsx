import { CardProps, IconTextProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import PriceBox from "./PriceBox";


const IconText = ({
  iconSrc,
  iconAlt,
  value,
  unit,
  pluralUnit,
}: IconTextProps) => (
  <div className="flex-start gap-1">
    <Image src={iconSrc} alt={iconAlt} width={20} height={20} />
    <p className="font-bold">
      {value}{" "}
      <span className="font-normal">{value > 1 ? pluralUnit : unit}</span>
    </p>
  </div>
);

const Card = ({
  id,
  image,
  guests,
  rooms,
  width,
  bath,
  title,
  country,
  view,
  price,
  paying, 
}: CardProps) => {
  const getFirstThreeWords = (title: string) => {
    const words = title.split(" ");
    return words.slice(0, 3).join(" ");
  };

  const processedTitle = getFirstThreeWords(title);

  const cardContent = (
    <div className="w-[350px] max-w-[450px] bg-white pb-8 rounded-br-[40px] overflow-hidden">
      <div className="w-full relative">
        <Image
          src={image}
          alt="card image"
          width={400}
          className="card__image"
          height={356}
          priority
        />
        <PriceBox price={price} paying = {paying} />
      </div>

      <div className="px-3">
        <div className="text-dark pb-4">
          <div className="regural-18 flex-start gap-4 py-3">
            <span className="font-bold tracking-[1px] capitalize ">
              {country}
            </span>
            <Image alt="circle" src="/circle.svg" width={10} height={10} />
            <p className="font-normal capitalize ">{view}</p>
          </div>

          <h2 className="bold-36 capitalize">{processedTitle}</h2>
        </div>

        <div className="flex-between px-2">
          <div className="flex flex-col gap-2">
            {guests && (
              <IconText
                iconSrc="/people.svg"
                iconAlt="guests"
                value={guests}
                unit="guest"
                pluralUnit="guests"
              />
            )}
            {width && (
              <IconText
                iconSrc="/blueprint.svg"
                iconAlt="m2"
                value={width.toFixed(0)}
                unit="m2"
                pluralUnit="m2"
              />
            )}
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
              iconAlt="room"
              value={rooms}
              unit="Room"
              pluralUnit="Rooms"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return id ? (
    <Link href={`/villas/${id}`} className="cursor-pointer">
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
};

export default Card;
