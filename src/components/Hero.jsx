import banner from "../assets/banner.jpg";

const Hero = () => {
  return (
    <div className="m-4 mt-0 border border-t-0 p-2 pt-0 rounded-b-2xl mb-64 lg:mb-80">
      <div className="text-center flex flex-col items-center h-[500px] bg-purple-600 rounded-b-xl">
        <h1 className="text-4xl lg:text-5xl font-bold w-2/3 mx-auto text-white mb-5">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="text-md font-medium w-2/4 mx-auto text-white mb-8">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="btn h-14 w-40 rounded-badge bg-white text-xl text-purple-600 font-bold">
          Shop Now
        </button>
        <div className="mt-8 md:mt-12 lg:mt-10 w-10/12 xl:w-3/5 h-[411px] lg:h-[450px] xl:h-[511px] mx-auto border-2 bg-white/50 backdrop-blur-sm p-3 rounded-2xl bg-cover">
          <img src={banner} alt="" className="rounded-xl h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

// mt-16 lg:mt-24
// absolute top-96
