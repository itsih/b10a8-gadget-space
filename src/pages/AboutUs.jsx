import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <div className="w-9/12 h-screen  mx-auto my-10 flex flex-col justify-between bg-purple-200 p-5 rounded-xl border border-purple-600">
      <Helmet>
        <title>About Us | Gadget Space </title>
      </Helmet>
      <h1 className="text-red-500 underline font-bold text-3xl text-center">
        Welcome To Gadget Space
      </h1>
      <p className="text-xl text-center">
        Gadget Space is a One-Stop Gadget Shop for all your gadgets and gifting
        needs, with thousands of products handpicked by our team with one
        question running through their heads - “How much would I love to receive
        this as a present?” <br /> Launched in 2020, Gadget Space is everything related
        to gadgets, gizmos, and cutting-edge consumer electronics. Our aim has
        always been to provide first-class customer service with value for money
        innovative products that completely satisfy even the most demanding
        customer. <br /> Gadget Space started as a way to serve a market that is
        passionate about technology, gaming, and enthusiasts. We have always
        loved unique and innovative products so dedicating the time and
        resources to develop the business and make it a reality has been a joy
        instead of a burden. As we grow, expand, and nurture the business, we
        realize every day how lucky we are to do something we love. <br /> We take your
        satisfaction seriously. We provide a professional, dedicated service for
        every single customer regardless of order size. Our Support Center
        replies to your support tickets quickly, while our class-leading Live
        Chat and 24-hour telephone services offer real-time support whenever you
        need it. <br />Our online catalog is constantly expanding with the very latest
        and the coolest gadgets added every day to ensure you get your tech fix. <br />
      </p>
      <h3 className="text-center text-2xl font-bold">OUR VISION</h3>
      <p className="text-center text-lg font-medium text-black">To be the leading online shopping website for gadgets and gifts.</p>
      <h3 className="text-center text-2xl font-bold">OUR MISSION STATEMENT</h3>
      <p className="text-center text-lg font-medium text-black">To provide quality products and services at great value in a comfortable and friendly online shopping experience.</p>
      <h3 className="text-center text-2xl font-bold">OUR CORE VALUES</h3>
      <p className="text-center text-lg font-medium text-black">TPassion, Respect, Integrity, Diligence, Excellence</p>
      <h3 className="text-center text-2xl font-bold">OUR History</h3>
      <p className="text-center text-lg font-medium text-black">Gadget Space was founded in 2020 by Ibrahim Hossain. The company is located in Dhaka, Bangladesh. After serving online orders for 8 months, we have opened our first physical shop in Dhaka. We are trying our best to expand the business as fast as possible by maintaining our service quality good and better everyday.</p>
    </div>
  );
};

export default AboutUs;
