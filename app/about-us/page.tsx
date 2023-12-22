import AboutUs from "@/components/AboutUs";
import Image from "next/image";
const page = () => {
  return (
    <section className="section__padding page_bg">
      <div className="container">
        <article className="flex-between  gap-5 lg:gap-10 flex-col lg:flex-row">
          <div className="w-full flex-center lg:w-1/2 max-lg:mt-4  ">
            <Image
              src={"/about-page.svg"}
              width={614}
              height={508}
              alt="about"
            />
          </div>

          <div className="text-dark  text-center lg:text-start w-full lg:w-1/2 ">
            <h1 className="bold-40 lg:bold-52">
              Your peace of mind, our priority
            </h1>

            <p className="medium-16 leading-[32px] mt-4  w-full lg:max-w-[400px] ">
              Curabitur efficitur ante vel mi bibendum, et maximus nisl
              ultricies. <br /> Morbi nec tempus dui, sit amet facilisis nisl{" "}
              <br /> . Ut vel urna quis urna tristique tempus. Etiam lobortis
              est at mauris eleifend, id tempor purus ultricies. Curabitur
              efficitur luctus enim nec sollicitudin. Fusce venenatis venenatis
              lorem eu accumsan. Nunc sit amet mi vitae odio porttitor feugiat.
              Sed quis sem elementum, <br /> viverra ligula at, lobortis magna.
              Praesent congue nibh in dolor rutrum, et euismod quam elementum.{" "}
              <span className="bold-18">
                Mauris justo felis, iaculis quis sagittis
              </span>{" "}
              sit amet, feugiat vitae est. Aliquam porta ex elit, sit amet
              rutrum turpis egestas viverra. Quisque at libero purus.
            </p>
          </div>
        </article>

        <div className = "pt-4 lg:pt-8"  >
          <AboutUs />
        </div>


      </div>
    </section>
  );
};

export default page;
