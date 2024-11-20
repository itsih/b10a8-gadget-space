/* eslint-disable react/prop-types */


const Heading = ({title, subtitle}) => {
    return (
        <div className="felx flex-col justify-center items-center my-12">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4 text-center ">{title}</h1>
            <p className="text-xs md:text-base text-white text-center font-medium ">{subtitle}</p>
        </div>
    );
};

export default Heading;