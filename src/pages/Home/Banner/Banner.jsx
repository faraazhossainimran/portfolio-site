const Banner = () => {
  return (
    <div>
      <div className="grid grid-cols-4 py-12">
        <div className="text-white relative col-span-3">
          <div className="flex items-center">
            <div className="relative text-left px-8">
              {/* <p className="text-xl">Introduction</p> */}
              <h1 className="text-3xl mt-6 leading-16">Hello, My name's Imran Hossain</h1>
              <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              <button className=" mt-6 btn btn-active btn-neutral">
                Download Resume
              </button>
            </div>
          </div>
        </div>
        <div className="avatar">
          <div className="w-[400px] rounded-full">
          <img className="" src="https://i.ibb.co/fDDfWqn/369572563-1378054442779951-4673260431813722840-n-removebg-preview.png"></img>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
