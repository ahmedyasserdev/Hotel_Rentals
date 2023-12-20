import { PriceBoxProps } from "@/types";

const PriceBox = ({ price  , paying = "daily"}: PriceBoxProps) => (
    <div className="price__box">
      <div className="price__content">
        <p className="bold-18">
          <span className="font-normal capitalize">From</span> €{price}/{paying}
        </p>
      </div>
    </div>
  );
  

  export default PriceBox