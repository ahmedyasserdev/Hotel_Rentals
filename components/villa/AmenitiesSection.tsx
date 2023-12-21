import { Disclosure } from "@headlessui/react";
import Image from "next/image";

type AmenitiesSectionProps = {
  amenities: {}[];
};

const AmenitiesSection = ({ amenities }: AmenitiesSectionProps) => {
  return (
    <div>
      {/* Desktop View */}
      <div className="lg:block hidden">
        <h2 className="bold-32 mb-3">Amenities</h2>
        {amenities?.map((amenitie, index) => (
          <div className="flex items-center gap-3 my-3" key={index}>
            <div className="mr-2">
              <p className="bold-18">{amenitie.text}:</p>
            </div>
            <div className="flex items-center gap-2">
              {amenitie.amenities?.map((item, subIndex) => (
                <div className="flex items-center gap-3" key={subIndex}>
                  <p className="regular-16">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Mobile View */}
      <div className="lg:hidden block">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="bold-20  mb-3 w-full text-white bg-gold flex-between rounded-lg p-2">
                Amenities{" "}
                <Image
                  width={25}
                  height={25}
                  src={open ? "/up-arrow.svg" : "/down-arrow.svg"}
                  alt={open ? "close" : "open"}
                />
              </Disclosure.Button>
              <Disclosure.Panel>
                {amenities?.map((amenitie, index) => (
                  <div className="flex-center flex-col " key={index}>
                    <div className="text-center flex-wrap gap-2 my-4 pb-[4px] border-b-2 border-gold">
                      <p className="bold-18">{amenitie.text}</p>
                    </div>
                    <div className="flex-center flex-col gap-2">
                      {amenitie.amenities?.map((item, subIndex) => (
                        <div className="" key={subIndex}>
                          <p className="regular-16">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default AmenitiesSection;
