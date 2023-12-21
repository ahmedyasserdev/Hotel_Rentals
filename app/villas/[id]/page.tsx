"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { useEffect, useState } from "react";
import { DataProps, ExternalIDType } from "@/types";
import { options } from "@/utils";
import PriceBox from "@/components/PriceBox";
import AmenitiesSection from "@/components/villa/AmenitiesSection";

const Page = ({ params: { id } }: ExternalIDType) => {
  const [data, setData] = useState<DataProps[]>([]);

    const {
      price,
      rentFrequency,
      rooms,
      title,
      baths,
      area,
      description,
      type,
      purpose,
      furnishingStatus,
      amenities,
      photos,
      location,
    } = data[0];
  const propertyData = [
    { label: "Baths", value: baths },
    {
      label: "Purpose",
      value:
        purpose && typeof purpose === "string"
          ? purpose.split("-").join(" ")
          : "",
    },
    { label: "Type", value: type },
    {
      label: "Area",
      value:
        area && typeof area === "number" ? area.toFixed(0) + "m2" : area + "m2",
    },
    { label: "Furnishing Status", value: furnishingStatus },
    { label: "Rooms", value: rooms },
  ];

  const fetchDetails = async () => {
    const url = `https://bayut.p.rapidapi.com/properties/detail?externalID=${id}`;
    const response = await fetch(url, options);
    const data = await response.json();
    setData(data);
    return data;
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  return (
    <section className="section__padding property">
      <div className="container">
        <div className="flex-between gap-[40px] md:gap-2 flex-col-reverse lg:flex-row">
          <div className="text-dark md:self-start text-center lg:text-start md:w-1/2">
            <h1 className="bold-32 md:bold-40">{title}</h1>
            <p className="regular-16 md:max-w-[80%] mt-3 leading-[1.6]">
              {description?.slice(0, 250)}.
            </p>
          </div>

          <div className=" w-screen md:w-1/2 relative rounded-md ">
            {photos && (
              <Swiper
                navigation={true}
                className="mySwiper"
                spaceBetween={10}
                slidesPerView={1}
                modules={[Navigation]}
              >
                {photos.map((photo, index) => (
                  <SwiperSlide key={index}>
                    <img src={photo.url} alt={`Photo ${index + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

            <PriceBox price={price} paying={rentFrequency} />
          </div>
        </div>

        <article className="mt-4 mb-10 flex-center lg:flex-start gap-4 text-dark">
          <div>
            <h2 className="bold-20">Check in</h2>
            <p className="regular-18">From 04:00</p>
          </div>
          <div>
            <h2 className="bold-20">Check out</h2>
            <p className="regular-18">Until 11:00</p>
          </div>
        </article>

        <div className="flex items-center lg:items-start flex-col gap-2">
          <h2 className="bold-32 lg:bold-52">
            {Array.isArray(location) ? location[1].name : null}
          </h2>
          {propertyData.map((property, index) => (
            <p key={index} className="bold-18">
              {property.label} :{" "}
              <span className="regular-16 ml-2 capitalize">
                {property.value}
              </span>
            </p>
          ))}
        </div>

        <div className="mt-4">
          <div>
            <AmenitiesSection amenities={amenities} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
