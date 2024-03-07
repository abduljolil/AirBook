 
import { FaRegCircle } from "react-icons/fa6";
import Boxes from '../../components/Boxes';
import { IoSearchOutline } from "react-icons/io5";

const Banner = () => {
 
   return (
       <div className="carousel w-full  ">
       <div  className="carousel-item relative w-full">
         <img src='https://i.postimg.cc/ZR8fWjwQ/Rectangle-2.png' className="w-full rounded-lg" />
         <div className="absolute right-1 top-12 bottom-1 left-40">
            <div className="">
               <h1 className='text-3xl font-bold py-3'>Welcome to AirBook</h1>
                <div className="lg: w-[1119px] h-[250px] bg-white border-blue-500 border-2 rounded-lg">
               <div className="p-5">
               <div className="flex justify-between ">
                  <div className=" flex gap-3">
                     <h5 className='flex items-center gap-2'> <FaRegCircle /> One Way</h5>
                     <h5 className='flex items-center gap-2 bg-blue-400 w-28 rounded-lg'> <FaRegCircle /> One Way</h5>
                  </div>
                  <div className="flex gap-3">
                     <button className='btn btn-secondary'> Travller</button>
                     <button className='btn btn-secondary'>Economy</button>
                  </div>
                  </div>
             <div className=" flex items-center gap-2 mt-4">
             <div className=" grid lg:grid-cols-4 gap-2">
                  <Boxes place='Hajrat Shahajalal Internation' title='DAC'title2='Dhaka'></Boxes>
                  <Boxes place='Coxs Bazer Internation' title='Cxb'title2='Coxs Bazer'></Boxes>
                  <Boxes place=' Tuesday,2023' title='03'title2='Octobee'></Boxes>
                  <Boxes place=' Tuesday,2023' title='05'title2='October'></Boxes>
               </div>
               <button className="btn btn-warning "><span className="py-2"><IoSearchOutline className="text-2xl " /></span></button>
             </div>
               </div>
                </div>
            </div>
         </div>
        
       </div> 
    
       
     </div>
   );
};

export default Banner;