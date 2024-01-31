import { fetchData } from "@/utils";
import CustomFilter from "@/components/CustomFilter";
import { PORPUSE, PAYING, MIN_PIRCE, MAX_PRICE, TYPES } from "@/constants";
import Card from "@/components/Card";
import { DataProps, VillaProps } from "@/types";
import ShowMore from "@/components/ShowMore";

const Page = async ({ searchParams }: VillaProps) => {
  const data = await fetchData({
    purpose: searchParams.purpose || "for-rent",
    minPrice: searchParams.minPrice || 10000,
    maxPrice: searchParams.maxPrice || 135000,
    paying: searchParams.paying || "monthly",
    type: searchParams.type || 3,
    hitsPerPage: searchParams.hitsPerPage || 9,
  });
  const isDataEmpty = !Array.isArray(data) || data.length < 1 || !data;

  return (
    <section className="section__padding page_bg ">
      <div className="container flex  flex-col gap-4 relative z-30 mt-5">
        <div className="text-white text-center   ">
          <h1 className=" bold-40 md:bold-60">All Properties </h1>
          {Array.isArray(data) && data.length > 1 && (
            <p className="regular-16 my-3">{data.length} Results </p>
          )}
        </div>

        <div className="w-full mt-4  custom_filter-container  rounded-2xl md:bg-white p-2 grid grid-cols-1 md:grid-cols-5  justify-between-between flex-wrap gap-4 ">
          <CustomFilter options={PORPUSE} />

          <CustomFilter options={PAYING} />

          <CustomFilter options={MIN_PIRCE} />
          <CustomFilter options={MAX_PRICE} />
          <CustomFilter options={TYPES} />
        </div>

        {isDataEmpty ? (
          <h2 className="text-center bold-32 lg:bold-40 text-secondary-3 italic">
            {data === null ? "No Results" : "Loading..."}
          </h2>
        ) : (
          <div className=" 2xl:self-start  gap-3  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4  2xl:gap-4 lg:gap-10 mt-12">
            {data?.map((item: DataProps, i: number) => (
              <Card
                key={i}
                country={item.location[1]?.name}
                title={item.title}
                price={item.price}
                image={item.coverPhoto?.url}
                id={item.externalID}
                bath={item?.baths}
                rooms={item?.rooms}
                width={item.area}
                paying={item.rentFrequency}
              />
            ))}
          </div>
        )}

        <ShowMore
          pageNumber={(searchParams.hitsPerPage || 9) / 9}
          isNext={(searchParams.hitsPerPage || 9) > data.length}
        />
      </div>
    </section>
  );
};

export default Page;
