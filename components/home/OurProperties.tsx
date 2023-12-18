import { OUR_PROPERTIES } from "@/constants";
import Image from "next/image";
import Button from "../Button";

const OurProperties = () => {
  return (
    <section className="section__padding">
      <div className="container">
        <div className="text-center mb-[70px] ">
          <h1 className="bold-40 lg:bold-52 tracking-[1px] ">Our properties specialities</h1>
        </div>
        <div className=" flex-start flex-col md:flex-row  flex-wrap gap-3 ">
          {OUR_PROPERTIES.map(({ icon, title, desc }, index) => (
            <div
              key={title}
              className={`flex-start flex-col gap-6 p-5 ${
                index !== OUR_PROPERTIES.length - 1
                  ? "max-md:border-b md:border-r border-gold"
                  : ""
              }`}
            >
              <div className="flex items-center md:items-start md:flex-col gap-2 md:gap-3">
                <Image
                  src={icon}
                  alt={title}
                  width={32}
                  height={32}
                  className="object-contain "
                />
                <h5 className="font-bold text-[28px] tracking-[1px] leading-[36px]  capitalize text-center">
                  {title}
                </h5>
              </div>

              <Button
                type="button"
                icon={"/arrow-right.svg"}
                title={desc}
                variant="btn_light border-0 p-1.5 hover:animate-[moveRight_1s_ease-in-out_infinite] "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProperties;
