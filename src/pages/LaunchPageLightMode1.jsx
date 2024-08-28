import FrameComponent2 from "../components/FrameComponent2";
import TopNav from "../components/TopNav";

const LaunchPageLightMode1 = () => {
  return (
    <div className="w-full h-[800px] relative bg-white overflow-hidden leading-[normal] tracking-[normal]">
      <img
        className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden"
        alt=""
        src="/bg-animation1.svg"
      />
      <img
        className="absolute top-[calc(50%_-_390px)] left-[calc(50%_-_180px)] w-[360px] h-[779px] object-cover z-[1]"
        alt=""
        src="/confetti2@2x.png"
      />
      <FrameComponent2 />
      <TopNav
        statusBarIconAlignSelf="unset"
        statusBarIconLeft="0px"
        statusBarIconTop="0"
        statusBarIconPosition="sticky"
      />
    </div>
  );
};

export default LaunchPageLightMode1;
