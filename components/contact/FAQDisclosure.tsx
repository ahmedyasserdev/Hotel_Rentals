// Import necessary dependencies
import { DicolosureProps } from "@/types";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import React from "react";

const FAQDisclosure = ({ question, answer }: DicolosureProps) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex gap-4 w-full  px-4 py-2 text-lg font-bold text-left text-primary-1 bg-secondary-3 rounded-md focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75">
            <Image
              src={"/plus-primary.svg"}
              alt={"expand"}
              width={25}
              height={25}
            />
            <span>{question}</span>
          </Disclosure.Button>
          <Disclosure.Panel className="  px-4 pt-4 pb-2 text-dark regular-18">
            <p>{answer}</p>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default FAQDisclosure;
