 
const Boxes = ({title,title2,place}) => {
    return (
        
            <div className="border-2 rounded-lg border-black py-2 px-4 flex gap-3">
            <h1 className=" text-xl font-bold">{title}</h1>
            <div className="  border-l-2 border-black">
           <div className="pl-3">
                <h2 className="font-semibold">{title2}</h2>
                <p>{place}</p>
           </div>
            </div>
        </div>
        
    );
};

export default Boxes;