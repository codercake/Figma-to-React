import TopNav from "../components/TopNav";
import MainContent1 from "../components/MainContent1";

const LaunchPageLightMode4 = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-72 box-border gap-16 leading-[normal] tracking-[normal]">
      <img
        className="w-full h-full absolute !m-[0] top-[0px] left-[0px] overflow-hidden shrink-0"
        alt=""
        src="/bg-animation1.svg"
      />
      <TopNav
        statusBarIconAlignSelf="stretch"
        statusBarIconLeft="unset"
        statusBarIconTop="0"
        statusBarIconPosition="sticky"
      />
      <MainContent1
        getReadyText="/get-ready-text1@2x.png"
        stayTuned="/stay-tuned3@2x.png"
        showNotifySectionInvalid={false}
      />
    </div>
  );
};

export default LaunchPageLightMode4;
