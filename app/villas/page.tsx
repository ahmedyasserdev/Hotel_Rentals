"use client";
import { useState, useEffect, Suspense } from "react";
import { options } from "@/utils";
import CustomFilter from "@/components/CustomFilter";
import { PORPUSE, PAYING, MIN_PIRCE, MAX_PRICE, TYPES } from "@/constants";
import Card from "@/components/Card";
import Button from "@/components/Button";
const Page = () => {
  const [data, setData] = useState<{}[]>([]);
  const [purpose, setPurpose] = useState<string>("for-rent");
  const [minPrice, setMinPrice] = useState<number>(10000);
  const [maxPrice, setMaxPrice] = useState<number>(50000);
  const [rentFrequency, setRentFrequency] = useState<string>("monthly");
  const [hitsPerPage, setHitsPerPage] = useState<number>(9);
  const [categoryExternalID, setCategoryExternalID] = useState<number>(3);

  const url = `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=${
    purpose || "for-rent"
  }&hitsPerPage=${hitsPerPage || 3}&lang=en&rentFrequency=${
    rentFrequency || "monthly"
  }&priceMin=${minPrice || 10000}&priceMax=${
    maxPrice || 50000
  }&categoryExternalID=${categoryExternalID || 1}`;

  const isDataEmpty = !Array.isArray(data) || data.length < 1 || !data;

  const fetchData = async () => {
    const response = await fetch(url, options);
    const data = await response.json();
    setData(data?.hits);
    return data?.hits;
  };

  useEffect(() => {
    fetchData();
  }, [purpose,minPrice,maxPrice, rentFrequency, hitsPerPage, categoryExternalID,]);

  return (
    <section className="section__padding bg_villas ">
      <div className="container flex-center   flex-col gap-4 relative z-30 mt-5">
        <div className="text-white text-center   ">
          <h1 className=" bold-40 md:bold-60">All Properties </h1>
          {Array.isArray(data) && data.length > 1 && (
            <p className="regular-16 my-3">{data.length} Results </p>
          )}
        </div>

        <div className="w-full mt-4  custom_filter-container  rounded-2xl md:bg-white p-2 grid grid-cols-1 md:grid-cols-5  justify-between-between flex-wrap gap-4 ">
          <CustomFilter options={PORPUSE} setFilterState={setPurpose} />

          <CustomFilter options={PAYING} setFilterState={setRentFrequency} />

          <CustomFilter options={MIN_PIRCE} setFilterState={setMinPrice} />
          <CustomFilter options={MAX_PRICE} setFilterState={setMaxPrice} />
          <CustomFilter
            options={TYPES}
            setFilterState={setCategoryExternalID}
          />
        </div>

        {isDataEmpty ? (
          <h2 className="text-center bold-32 lg:bold-40 text-secondary-3 italic">
            Loading... Or No Results{" "}
          </h2>
        ) : (
          <div className=" 2xl:self-start grid grid-cols-1 md:grid-cols-2  2xl:grid-cols-3   2xl:gap-4 lg:gap-10 mt-12">
            {data?.map((item, i) => (
              <Suspense key={i} fallback={"loading..."}>
                <Card
                  country={item.location[1].name}
                  title={item.title}
                  price={item.price}
                  image={item.coverPhoto?.url}
                  id={item.externalID}
                  bath={item?.baths}
                  rooms={item?.rooms}
                  width={item.area}
                  paying={item.rentFrequency}

                />
              </Suspense>
            ))}
          </div>
        )}

        {!isDataEmpty && data.length >= hitsPerPage && (
          <Button
            variant="btn_primary p-2 bold-18"
            icon={"/plus.svg"}
            type={"button"}
            title={"Show More"}
            handlClick={() => setHitsPerPage(hitsPerPage + 9)}
          />
        )}
      </div>
    </section>
  );
};

export default Page;
