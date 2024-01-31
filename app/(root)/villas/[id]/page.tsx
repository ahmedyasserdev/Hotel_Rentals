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
import Picker from "@/components/DatePicker";
import Button from "@/components/Button";
import PropertyData from "@/components/villa/PropertyData";

const initialDataState = {
  title: "",
  description: "",
  baths: 0,
  purpose: "",
  type: "",
  area: 0,
  furnishingStatus: "",
  rooms: 0,
  photos: [],
  price: 0,
  rentFrequency: "",
  amenities: [],
};

const Page = ({ params: { id } }: ExternalIDType) => {
  const [data, setData] = useState<DataProps>(initialDataState);
  const [checkInDate, setcheckInDate] = useState(new Date());
  const [checkOutDate, setcheckOutDate] = useState(new Date());
  const fetchDataAsync = async () => {
    const result = await fetchDetails(id);
    setData(result);
  };
  useEffect(() => {
    fetchDataAsync();
  }, [id]);

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
    <section className=" max-md:py-[70px] section__padding page_bg">
      <div className="container">
        <div className="flex-between gap-[40px] md:gap-2 flex-col-reverse lg:flex-row">
          <div className="text-dark lg:self-start text-center lg:text-start lg:w-1/2">
            <h1 className="bold-32 md:bold-40">{data.title}</h1>
            <p className="regular-16   mx-auto md:max-w-[80%] mt-3 leading-[1.6]">
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

        <div className="flex items-center lg:items-start flex-col gap-2">
          {propertyData.map((property, index) => (
            <PropertyData key = {index} property = {property}  />
          ))}
        </div>

        <div className=" flex-between  items-start flex-col  lg:flex-row gap-10 mt-4">
          <div>
            <AmenitiesSection amenities={data.amenities} />
          </div>

          <div className="flex  flex-col gap-10 w-full lg:max-w-[50%] overflow-x-visible ">
            <Button
              title="Book"
              type="button"
              variant="btn_primary bold-36 w-full grid  "
            />

            <div className="flex-between  flex-row gap-4">
              {/* date picker */}

              <Picker
                date={checkInDate}
                setDate={setcheckInDate}
                label="Check in date"
              />
              <Picker
                date={checkOutDate}
                setDate={setcheckOutDate}
                label="Check out date"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
