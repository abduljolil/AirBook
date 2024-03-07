import AirlinesCard from "../../components/AirlinesCard";

 

const Airlines = () => {
  
    return (
        <div className=" lg:px-20 py-10">
        <h1 className="text-2xl font-bold  mb-10">  Popular Airlines</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <AirlinesCard title='Biman Bangladesh Airlines' img='https://i.postimg.cc/BQVw7wdB/BBA.png' rating='4' reviwe='783'></AirlinesCard>
                <AirlinesCard title='Emiates' img='https://i.postimg.cc/V62WB3SJ/Emirates.png' rating='5' reviwe='753'></AirlinesCard>
                <AirlinesCard title='Turkhish Airlines' img='https://i.postimg.cc/3xjm0kC0/Turkish-Airlines.png' rating='5' reviwe='753'></AirlinesCard>
                <AirlinesCard title='malaysia Airlines' img='https://i.postimg.cc/vZ5L7qMB/Malaysia.png' rating='5' reviwe='753'></AirlinesCard>
                <AirlinesCard title=' SIngapore Airlines' img='https://i.postimg.cc/Qx3p8gcZ/Singapore-Airlines.png' rating='5' reviwe='753'></AirlinesCard>
                <AirlinesCard title='malaysia Airlines' img='https://i.postimg.cc/vZ5L7qMB/Malaysia.png' rating='3' reviwe='753'></AirlinesCard>
                <AirlinesCard title='Biman Bangladesh Airlines' img='https://i.postimg.cc/BQVw7wdB/BBA.png' rating='4' reviwe='753'></AirlinesCard>
                <AirlinesCard title=' American Airlines' img='https://i.postimg.cc/wTL0FTQg/american.png' rating='4' reviwe='753'></AirlinesCard>
                <AirlinesCard title='Emiates' img='https://i.postimg.cc/V62WB3SJ/Emirates.png' rating='5' reviwe='953'></AirlinesCard>
                <AirlinesCard title='Biman Bangladesh Airlines' img='https://i.postimg.cc/BQVw7wdB/BBA.png' rating='4' reviwe='753'></AirlinesCard>
                <AirlinesCard title='malaysia Airlines' img='https://i.postimg.cc/vZ5L7qMB/Malaysia.png' rating='5' reviwe='753'></AirlinesCard>
                <AirlinesCard title='Turkhish Airlines' img='https://i.postimg.cc/3xjm0kC0/Turkish-Airlines.png' rating='5' reviwe='753'></AirlinesCard>
            </div>
        </div>
    );
};

export default Airlines;