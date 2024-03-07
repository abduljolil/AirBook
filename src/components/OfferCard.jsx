 

const OfferCard = ({img}) => {
    return (
        <div className="hero bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-xl font-bold">With Bikhas pyment Only</h1>
            <p className="py-6">up to 14% discount on the base fare of domestic flights</p>
             
          </div>
        </div>
      </div>
    );
};

export default OfferCard;