import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch h-[97px] sticky shadow-[0px_4px_4px_rgba(255,_255,_255,_0.25)] bg-main-black top-[0] z-[99] max-w-full ${className}`}
    >
      <div className="absolute top-[0px] left-[0.5px] [filter:drop-shadow(0px_4px_4px_rgba(255,_255,_255,_0.25))] w-full flex flex-col items-start justify-center py-4 px-5 box-border max-w-full h-full">
        <nav className="m-0 w-[390.8px] overflow-hidden flex flex-row items-center justify-center py-[21.1px] px-[46px] box-border gap-[4.6px] max-w-full text-center text-lgi-5 text-white font-montserrat mq450:pl-5 mq450:pr-5 mq450:box-border">
          <a className="[text-decoration:none] relative tracking-[1.63px] leading-[12px] font-semibold text-[inherit] inline-block min-w-[46px] shrink-0">
            THE
          </a>
          <div className="flex-1 bg-white flex flex-row items-center justify-center py-[5.3px] px-px text-gray-200">
            <a className="[text-decoration:none] relative tracking-[1.63px] leading-[12px] font-semibold text-[inherit] inline-block min-w-[114px]">
              PRODUCT
            </a>
          </div>
          <a className="[text-decoration:none] w-[126px] relative tracking-[1.63px] leading-[12px] font-semibold text-[inherit] inline-block min-w-[126px] shrink-0">
            PLATFORM
          </a>
        </nav>
      </div>
      <img
        className="absolute top-[23px] left-[1340px] rounded-[50%] w-[50px] h-[50px] object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/ellipse-52@2x.png"
      />
    </header>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
