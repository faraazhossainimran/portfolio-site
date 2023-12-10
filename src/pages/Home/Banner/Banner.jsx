const Banner = () => {
  return (
    <div className="relative">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?w=1380&t=st=1702242754~exp=1702243354~hmac=0e5aefa6f5462d8ca79175613c634bf4101f7f815088f529b87c40167b174060)",
        }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5 text-3xl">
              I'm Imran Hossain, Frontend Developer
            </p>
            <button className="btn btn-primary mt-6">Download CV</button>
          </div>
        </div>
      </div>
      <div><img width={'60px'} className="absolute top-[453px] right-[317px] animate-spin" src="https://i.ibb.co/7zh50jL/icons8-react-native-48.png"/></div>
    </div>
  );
};

export default Banner;
