 

const AirlinesCard = ({img,title,reviwe}) => {
    return (
        <div>
             <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
              <div className="text-sm opacity-50">{reviwe}</div>
            </div>
          </div>
        </div>
    );
};

export default AirlinesCard;