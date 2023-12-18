import Button from "../Button";

const Host = () => {
  return (
    <section className="section_padding vase w-full  h-[729px]">
      <div className="container flex-center h-full">
        <div className="flex-center flex-col  px-12  pt-24 pb-16 lg:max-w-[65%]   gap-8 md:gap-10   text-center  bg-glass text-dark rounded-[4px] rounded-tl-[60px] rounded-br-[60px] ">
          <div>
            <p className="tracking-[2px] bold-16 text-primary-1  uppercase">
              Become a host
            </p>
            <h2 className="bold-32  md:bold-52">Become a host</h2>
          </div>
          <p className="medium-18 leading-[1.8]  md:max-w-[90%] mx-auto text-dark">
            Join the elite league of hosts specializing in luxury villas and
            unlock a world of exclusive opportunities.
          </p>
        <div className="w-[80%] mx-auto" >
              <Button title="Join Today" type = "button"  full= {true} variant="  tracking-[1px] btn_primary py-[12px] px-[20px]  bold-20 "   />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Host;
