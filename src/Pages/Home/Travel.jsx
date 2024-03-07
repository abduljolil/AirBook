import TravelCard from "../../components/TravelCard";

 

const Travel = () => {
    
    return (
        <div className=" lg:px-20 py-10">
        <h1 className="text-2xl font-bold  mb-10">Travel Blog</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      <TravelCard img='https://i.postimg.cc/jjVmt930/Rectangle-18.png' day='16' month='23' title='Embracing The Digital Nomad Lifestyle The Digital Nomad Thr...'Name='Ys Stafen' profilePicture='https://i.postimg.cc/sgWH6mjn/Rectangle-33.png' travel='Work and Travel'></TravelCard>
            <TravelCard img='https://i.postimg.cc/FKZZ8n2x/Rectangle-18-1.png' day='10' month='23' title='Historical Journeys:Stepping Back And Time Through Travel'Name='Aria Montague' profilePicture='https://i.postimg.cc/ZYFdcdzr/Rectangle-30.png' travel='Historical'></TravelCard>
            <TravelCard img='https://i.postimg.cc/hPLpVjpw/Rectangle-18-2-1.png' day='4' month='23' title='Sustainable Tourism:Preserving The planet While Seeing It All'Name='Elara Thorne' profilePicture='https://i.postimg.cc/jd1dQx2H/Rectangle-32.png' travel='Sustainable Tourism'></TravelCard>
            
      </div>
        </div>
    );
};

export default Travel;