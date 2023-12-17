const OurRegion = () => {
  return (
    <section className="section__padding  bg-gold w-full rounded-br-[150px]   ">
      <div className="container  ">
        <div className="text-center pb-8 ">
          <h1 className=" bold-40 lg:bold-60 text-dark uppercase pb-4 lg:pb-3 ">OUR REGIONS</h1>
          <p className="regular-16 text-dark lg:max-w-[80%] mx-auto  ">
            Fusce blandit magna eget felis dapibus, ac lacinia quam faucibus.
            Quisque feugiat felis a quam volutpat, non scelerisque nibh
            scelerisque.
          </p>
        </div>

        <div className=" flex-center gap-3 max-lg:flex-wrap">
          <div className="bg-home_region_1 bg-center bg-cover bg-no-repeat lg:w-1/2 rounded-tr-[50px] rounded-bl-[50px] min-h-[400px] flex flex-col justify-end">
            <div className="flex items-start text-white p-5 flex-col  ">
              <h1 className="bold-60">Mountains</h1>
              <p className="bold-18">
                87 <span className="font-normal">properties</span>
              </p>
            </div>
          </div>

          <div className="bg-home_region_2 bg-center bg-cover bg-no-repeat lg:w-1/2 rounded-tl-[50px] rounded-br-[50px]  min-h-[400px] flex flex-col justify-end ">
            <div className="flex items-start text-white p-5 flex-col  ">
              <h1 className="bold-60">Coastline</h1>
              <p className="bold-18">
                64 <span className="font-normal">properties</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurRegion;
