import PropTypes from "prop-types";

const AndroidStatusBars = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-white flex flex-row items-center justify-between pt-[5.6px] px-4 pb-[5.7px] gap-5 ${className}`}
    >
      <img
        className="h-[9px] w-[30.5px] relative"
        loading="lazy"
        alt=""
        src="/1230.svg"
      />
      <div className="flex flex-row items-start justify-start gap-[3.1px]">
        <img
          className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/wifi.svg"
        />
        <img
          className="h-[18px] w-[18px] relative"
          loading="lazy"
          alt=""
          src="/frame-2109.svg"
        />
        <img
          className="h-[18.7px] w-[18.7px] relative overflow-hidden shrink-0 min-h-[19px]"
          loading="lazy"
          alt=""
          src="/battery.svg"
        />
      </div>
    </header>
  );
};

AndroidStatusBars.propTypes = {
  className: PropTypes.string,
};

export default AndroidStatusBars;
