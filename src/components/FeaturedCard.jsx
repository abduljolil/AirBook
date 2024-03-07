 

const FeaturedCard = ({title,img}) => {
   
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-5 pt-15">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <div className="card-actions">
      <button className="btn btn-warning">Viwe More</button>
    </div>
  </div>
</div>
    );
};

export default FeaturedCard;