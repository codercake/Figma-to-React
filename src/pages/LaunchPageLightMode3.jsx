import TopNav from "../components/TopNav";
import MainContent1 from "../components/MainContent1";

const LaunchPageLightMode3 = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[174px] box-border gap-6 leading-[normal] tracking-[normal]">
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
        showHours={false}
        propWidth="220px"
        propBorderRadius="12px"
        propPadding="20px"
        propGap="20px"
        propOverflowX="unset"
        propAlignSelf="stretch"
        propGap1="8px"
        propHeight="unset"
        propWidth1="8px"
        propFontSize="36px"
        propFlex="1"
        propGap2="8px"
        propWidth2="unset"
        propFontSize1="36px"
        propMinWidth="47px"
        propWidth3="unset"
        propHeight1="unset"
        propFontSize2="14px"
        propMinWidth1="55px"
        propAlignSelf1="unset"
        propHeight2="unset"
        propMargin="0"
        propFontSize3="36px"
        propFontWeight="400"
        propHeight3="unset"
        propWidth4="unset"
        propDisplay="unset"
        propFlex1="1"
        propGap3="8px"
        propWidth5="unset"
        propFontSize4="36px"
        propMinWidth2="45px"
        propWidth6="unset"
        propHeight4="unset"
        propFontSize5="14px"
        propMinWidth3="61px"
        propAlignSelf2="unset"
        propHeight5="unset"
        getReadyText="/get-ready-text1@2x.png"
        stayTuned="/stay-tuned3@2x.png"
        showNotifySectionInvalid={false}
      />
    </div>
  );
};

export default LaunchPageLightMode3;
