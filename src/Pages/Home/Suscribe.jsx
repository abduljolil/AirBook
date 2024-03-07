 

const Suscribe = () => {
    return (
        <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row ">
          <img src="https://i.postimg.cc/761yFDqW/Isolation-Mode.png" className="max-w-sm rounded-lg shadow-2xl" />
          <div >
            <h1 className="text-5xl font-bold"> Suscribe To Our <br /> NewsLater!</h1>
            <p className="py-6 text-blue-400">Suscribe To Our NewsLater and Stay Updated</p>
            <input type="text" placeholder="Your Email" className="input input-bordered input-accent w-full max-w-xs" />
            <button className="bg-yellow-400 w-full py-2 rounded-lg mt-2">Suscribe</button>
          </div>
        </div>
      </div>
    );
};

export default Suscribe;