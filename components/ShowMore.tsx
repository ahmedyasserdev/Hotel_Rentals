"use client";

import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";
import  Button  from "./Button";

const ShowMore = ({ pageNumber, isNext }: any ) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 9;

  const newPathname = updateSearchParams("hitsPerPage", `${newLimit}`);
    
    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <Button
          type="button"
          title="Show More"
          handlClick={ () =>  handleNavigation()}
          variant="btn_primary  p-2 bold-18 "
          icon={"/plus.svg"}
        />
      )}
    </div>
  );
};

export default ShowMore;