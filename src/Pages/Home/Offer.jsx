import OfferCard from "../../components/OfferCard";
 
const Offer = () => {
    return (
        <div className=" lg:px-20 py-10">
            <h1 className="text-2xl font-bold  mb-10"> Deals and Offers</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <OfferCard img='https://i.postimg.cc/3rn8CsZS/slider-Up-to-14-discount-on-Domestic-flights-2.png'></OfferCard>
            <OfferCard img='https://i.postimg.cc/3RGLJQxK/slider-Up-to-14-discount-on-Domestic-flights-2-1.png'></OfferCard>
            <OfferCard img='https://i.postimg.cc/MKpy98Jv/slider-Up-to-14-discount-on-Domestic-flights-2-2.png'></OfferCard>
            </div>
        </div>
    );
};

export default Offer;