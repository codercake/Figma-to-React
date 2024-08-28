import TopNav1 from "../components/TopNav1";
import MainContent from "../components/MainContent";
import LaunchedCard2 from "../components/LaunchedCard2";

const LaunchPageLightMode = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[174px] box-border gap-6 leading-[normal] tracking-[normal]">
      <img
        className="w-full h-full absolute !m-[0] top-[0px] left-[0px] overflow-hidden shrink-0"
        alt=""
        src="/bg-animation1.svg"
      />
      <TopNav1 />
      <MainContent
        showHours={false}
        propBackground="linear-gradient(99.46deg, #380d2c, #e6b8d9 0.01%, #c9b8e6)"
        propWidth="220px"
        propBorderRadius="12px"
        propPadding="20px"
        propGap="20px"
        propOverflowX="unset"
        propAlignSelf="stretch"
        propGap1="8px"
        propHeight="unset"
        propColor="#333"
        propWidth1="8px"
        propFontSize="36px"
        propFlex="1"
        propGap2="8px"
        propWidth2="unset"
        propColor1="#0f0f0f"
        propFontSize1="36px"
        propMinWidth="47px"
        propWidth3="unset"
        propHeight1="unset"
        propColor2="#333"
        propFontSize2="14px"
        propMinWidth1="55px"
        propAlignSelf1="unset"
        propHeight2="unset"
        propColor3="#333"
        propMargin="0"
        propFontSize3="36px"
        propFontWeight="400"
        propHeight3="unset"
        propWidth4="unset"
        propDisplay="unset"
        propFlex1="1"
        propGap3="8px"
        propWidth5="unset"
        propColor4="#0f0f0f"
        propFontSize4="36px"
        propMinWidth2="45px"
        propWidth6="unset"
        propHeight4="unset"
        propColor5="#333"
        propFontSize5="14px"
        propMinWidth3="61px"
        propAlignSelf2="unset"
        propHeight5="unset"
      />
      <div className="w-[90px] !m-[0] absolute top-[calc(50%_-_28px)] left-[calc(50%_-_45px)] flex flex-col items-center justify-center py-0.5 px-1 box-border opacity-[0] z-[2]">
        <LaunchedCard2 />
      </div>
    </div>
  );
};

export default LaunchPageLightMode;
