 

const AirlinesCard = ({img,title,reviwe,rating}) => {
    return (
        <div>
             <div className="flex items-center gap-5">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div className="">
              <div className="font-bold text-blue-500">{title}</div>
              
              <div className="rating rating-xs justify-center items-center">
              <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
              <p>{rating} ({reviwe} reviwe)</p>
            </div>  
           
             
            </div>
          </div>
        </div>
    );
};

export default AirlinesCard;