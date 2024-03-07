import FeaturedCard from "../../components/FeaturedCard";

 

const Featured = () => {
    return (
        <div className=" lg:px-20 py-10">
            <h1 className="text-2xl font-bold  mb-10">Featured Destinations</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                <FeaturedCard title='Stopover Opportuniy in istanbul With Turkish Airlines' img='https://i.postimg.cc/bY2n2B3F/Rectangle-181.png'></FeaturedCard>
                <FeaturedCard title='Dicover The Timeless City WIth ouristanbul Of Turkish Airlines' img='https://i.postimg.cc/L84hvC3S/Rectangle-18-11.png'></FeaturedCard>
                <FeaturedCard title='The Best Of Abu Dhabi With Exclusive Etihad Airwasy!' img='https://i.postimg.cc/nrYcGBsM/Rectangle-18-22.png'></FeaturedCard>
                
            </div>
        </div>
    );
};

export default Featured;