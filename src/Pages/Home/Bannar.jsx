import img1 from '../../../public/Rectangle 2.png';
 

const Banner = () => {
 
   return (
       <div className="carousel w-full  ">
       <div  className="carousel-item relative w-full">
         <img src={img1} className="w-full rounded-lg" />
         <div className="absolute ">
            <div className="justify-center items-center">
               <h1 className='text-3xl font-bold'>Welcome to AirBook</h1>
                <div className="lg: w-[1119px] h-[250px] bg-white border-blue-500 border-2">
               <div className=""></div>
                </div>
            </div>
         </div>
        
       </div> 
    
       
     </div>
   );
};

export default Banner;