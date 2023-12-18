import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="section__padding">
      <div className="container">
        <h1 className=" max-lg:flex-center lg:hidden bold-40 md:bold-52  text-dark">
          About Us
        </h1>

        <div className="flex-between flex-col-reverse lg:flex-row gap-6 ">
          <div className="flex-start items-start flex-col gap-3  w-full lg:w-1/2  text-dark">
            <h1 className="   lg:flex-start  hidden bold-60">
              About Us
            </h1>

            <p className="medium-16 leading-[32px]  w-full lg:max-w-[400px] text-start">
              Curabitur efficitur ante vel mi bibendum, et maximus nisl
              ultricies. <br/> Morbi nec tempus dui, sit amet facilisis nisl <br /> .
              Ut vel urna quis urna tristique tempus. Etiam lobortis est at
              mauris eleifend, id tempor purus ultricies. Curabitur efficitur
              luctus enim nec sollicitudin. Fusce venenatis venenatis lorem eu
              accumsan. Nunc sit amet mi vitae odio porttitor feugiat. Sed quis
              sem elementum, <br/> viverra ligula at, lobortis magna. Praesent congue
              nibh in dolor rutrum, et euismod quam elementum.{" "}
              <span className="bold-18">
                Mauris justo felis, iaculis quis sagittis
              </span>{" "}
              sit amet, feugiat vitae est. Aliquam porta ex elit, sit amet
              rutrum turpis egestas viverra. Quisque at libero purus.
            </p>



                <div className="flex-start text-dark px-[15px] py-[8px] pt-2  bg-primary-3 ">
                    <h4 className = "regular-20  xl:regular-26 2xl:regular-32 text-center " >We strive to offer you best possible homes to stay.  </h4>
                </div>






          </div>

          <div className="relative about  ">
            <Image
              className="absolute bg-white pr-3 pl-2  pb-2 object-contain  left-[-25px] top-[-20px]    lg:left-[-50px] lg:top-[-40px] z-30 w-[160px] md:w-[250px] "
              src="/about-2.svg"
              width={300}
              height={300}
              alt="people"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
