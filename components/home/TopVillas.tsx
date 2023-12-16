import { TOP_VILLAS } from "@/constants";
import Card from "../Card";

const TopVillas = () => {
  return (
    <section className="section__padding">
      <div className="container">
        <div className=" flex-center flex-col gap-10  text-dark  ">
          <h1 className="bold-60">Top pick villas</h1>
          <p className="regular-16 text-center lg:max-w-[80%] mx-auto block">
            Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies.
            Morbi nec tempus dui, sit amet facilisis nisl. Ut vel urna quis urna
            tristique tempus. Etiam lobortis est at mauris eleifend, id tempor
            purus ultricies.
          </p>
        </div>

        <div className="flex gap-4 items-center max-lg:flex-wrap  pt-20 ">
          {TOP_VILLAS.map(
            ({
              id,
              price,
              image,
              country,
              view,
              title,
              guests,
              bedroom,
              width,
              bathroom,
            }) => (
              <Card title={title}  guests = {guests}  bedroom={bedroom} bath = {bathroom} width = {width} key = {id} 
                view = {view}
                image = {image}
                price = {price}
                country={country}

              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default TopVillas;
