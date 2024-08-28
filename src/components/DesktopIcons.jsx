const DesktopIcons = () => {
    return (
      <div className="w-full h-[188px] relative bg-darkgray-200 flex flex-row items-start justify-start p-5 box-border gap-[58px]">
        <div className="h-[148px] w-[82px] rounded-8xs border-blueviolet border-[1px] border-dashed box-border overflow-hidden shrink-0 flex flex-col items-start justify-start p-4 gap-4">
          <img
            className="w-[50px] h-[50px] relative"
            loading="lazy"
            alt=""
            src="/modelight.svg"
          />
          <img
            className="w-[50px] h-[50px] relative"
            loading="lazy"
            alt=""
            src="/modedark.svg"
          />
        </div>
        <div className="h-24 w-[218px] rounded-8xs border-blueviolet border-[1px] border-dashed box-border overflow-hidden shrink-0 flex flex-row items-start justify-start p-4 gap-[58px]">
          <img
            className="h-16 w-16 relative"
            loading="lazy"
            alt=""
            src="/modedark-1.svg"
          />
          <img
            className="h-16 w-16 relative"
            loading="lazy"
            alt=""
            src="/modelight-1.svg"
          />
        </div>
      </div>
    );
  };
  
  export default DesktopIcons;
  