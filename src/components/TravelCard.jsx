 

const TravelCard = ({day,title,profilePicture,Name,month,img,travel}) => {
    return (
        <div className="carousel card w-96  bg-base-100 shadow-xl ">
        <div id="slide1" className="carousel-item relative w-full h-56">
          <img src={img} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle bg-orange-500">❮</a> 
            <a href="#slide2" className="btn btn-circle bg-orange-500">❯</a>
          </div>
        </div> 
<div className="p-4 space-y-3">
<div className="text-sm flex gap-2">
            <p className="text-orange-400">{travel}</p>
            <p>{day} septembar {month}</p>
        </div>
        <h1 className="text-lg font-bold">{title}</h1>
        <div className="flex  border-t-2 justify-between items-center  ">
        <div className="flex items-center gap-5">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={profilePicture} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
              <div className="font-bold">{Name}</div>
              </div>
             <div  >
             <button className="text-yellow-400"> Read More</button>
             </div>
        </div>
</div>

      </div>
    );
};

export default TravelCard;