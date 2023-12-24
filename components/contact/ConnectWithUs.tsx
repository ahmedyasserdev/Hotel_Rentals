import Image from "next/image";
import { CONTACT_INFO, SOCIAL_ICONS } from "@/constants";

const ConnectWithUs = () => {
  return (
    <article className="flex-center bg-secondary-3  flex-col lg:flex-row gap-10 rounded-tr-[40px] rounded-bl-[40px] ">
      <div className="w-full lg:w-1/2 ">
        <Image
          src="/contact.png"
          className="w-full h-full   rounded-bl-[40px] "
          alt={"contact "}
          width={700}
          height={600}
        />
      </div>

      <div className=" px-3 pb-3  lg:w-1/2   rounded-2xl flex flex-col justify-between items-start">
        <h1 className=" bold-32 lg:bold-52 text-dark text-center">
          Connect with us
        </h1>

        <div className="flex flex-col gap-4 py-4 ">
          {CONTACT_INFO.map(({ title, value }, index) => (
            <div key={index} className="flex items-center gap-4 text-dark ">
              <h6 className="bold-18 ">{title}</h6>
              <p className="regular-16  tracking-[1px]">{value}</p>
            </div>
          ))}
        </div>

        <p className="regular-16 text-primary-1 tracking-[1px]">
          Open in Google maps
        </p>

        <div className="flex items-center  gap-4 pt-3 ">
          {SOCIAL_ICONS.map(({ alt, icon }, index) => (
            <Image
              key={index}
              className="cursor-pointer"
              src={icon}
              alt={alt}
              width={26}
              height={20}
            />
          ))}
        </div>









      </div>
    </article>
  );
};

export default ConnectWithUs;

