"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { DataProps, ExternalIDType } from "@/types";
import { fetchDetails } from "@/utils";
import PriceBox from "@/components/PriceBox";
import AmenitiesSection from "@/components/villa/AmenitiesSection";
import { useState, useEffect } from "react";

const Page = ({ params: { id } }: ExternalIDType) => {
  const [data, setData] = useState<DataProps | null>(null);
  const fetchDataAsync = async () => {
    const result = await fetchDetails(id);
    setData(result);
  };
  useEffect(() => {
    fetchDataAsync();
  }, [id]); // This will re-run the effect whenever id changes

  const propertyData = [
    { label: "Baths", value: data.baths },
    {
      label: "Purpose",
      value:
        data.purpose && typeof data.purpose === "string"
          ? data.purpose.split("-").join(" ")
          : "",
    },
    { label: "Type", value: data.type },
    {
      label: "Area",
      value:
        data.area && typeof data.area === "number"
          ? data.area.toFixed(0) + "m2"
          : data.area + "m2",
    },
    { label: "Furnishing Status", value: data.furnishingStatus },
    { label: "Rooms", value: data.rooms },
  ];

  return (
    <section className=" py-[70px] section__padding page_bg">
      <div className="container">
        <div className="flex-between gap-[40px] md:gap-2 flex-col-reverse lg:flex-row">
          <div className="text-dark md:self-start text-center lg:text-start md:w-1/2">
            <h1 className="bold-32 md:bold-40">{data.title}</h1>
            <p className="regular-16 md:max-w-[80%] mt-3 leading-[1.6]">
              {data.description?.slice(0, 250)}.
            </p>
          </div>

          <div className=" w-screen md:w-1/2 relative rounded-md ">
            {data.photos && (
              <Swiper
                navigation={true}
                className="mySwiper"
                spaceBetween={10}
                slidesPerView={1}
                modules={[Navigation]}
              >
                {data.photos.map((photo, index) => (
                  <SwiperSlide key={index}>
                    {" "}
                    <img src={photo.url} alt={`Photo ${index + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

            <PriceBox price={data.price} paying={data.rentFrequency} />
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
            <AmenitiesSection amenities={data.amenities} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
