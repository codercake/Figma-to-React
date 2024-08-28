import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../components/FrameComponent3";

const LaunchPageLightMode2 = () => {
  const navigate = useNavigate();

  const onCTAClick = useCallback(() => {
    navigate("/question-page");
  }, [navigate]);

  return (
    <div className="w-full h-[800px] relative bg-white overflow-hidden leading-[normal] tracking-[normal] text-center text-5xl text-darkslategray-200 font-poppins">
      <img
        className="absolute top-[calc(50%_-_400px)] left-[0px] w-full h-full overflow-hidden"
        alt=""
        src="/bg-animation1.svg"
      />
      <div className="absolute top-[calc(50%_-_110.5px)] left-[calc(50%_-_180px)] w-full flex flex-col items-center justify-center py-2 px-4 box-border z-[1]">
        <div className="self-stretch rounded-xl [background:linear-gradient(99.57deg,_#e6b8d9,_#c9b8e6)] flex flex-col items-center justify-center py-6 px-3 gap-12">
          <div className="self-stretch flex flex-col items-center justify-start gap-6">
            <h1 className="m-0 relative text-inherit leading-[100%] font-semibold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(90.04deg,_#0f0f0f,_#333)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              We are Live Now!
            </h1>
            <div className="self-stretch relative text-xs leading-[120%]">
              <span>{`Our new feature is now `}</span>
              <span className="font-medium text-main-black">Live</span>
              <span>{` `}</span>
              <span className="font-medium text-main-black">and ready</span>
              <span> for you to explore. Go ahead and give it a try</span>
            </div>
          </div>
          <button
            className="cursor-pointer [border:none] py-2 px-6 bg-main-black rounded flex flex-row items-center justify-center whitespace-nowrap"
            onClick={onCTAClick}
          >
            <div className="relative text-lg leading-[100%] font-medium font-poppins text-white text-left inline-block min-w-[104px]">
              Get Started
            </div>
          </button>
        </div>
      </div>
      <FrameComponent3 />
    </div>
  );
};

export default LaunchPageLightMode2;
