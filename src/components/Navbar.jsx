import PropTypes from "prop-types";

const Navbar = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-white flex flex-col items-start justify-center pt-[6.7px] px-0 pb-[6.6px] text-center text-smi-3 text-black font-montserrat ${className}`}
    >
      <div className="w-[229.6px] overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 box-border gap-[3px]">
        <a className="[text-decoration:none] relative tracking-[1.02px] leading-[8px] font-semibold text-[inherit] inline-block min-w-[29px]">
          THE
        </a>
        <div className="flex-1 bg-black flex flex-row items-center justify-center pt-[3.3px] px-0 pb-[3.4px] text-white">
          <a className="[text-decoration:none] relative tracking-[1.02px] leading-[8px] font-semibold text-[inherit] inline-block min-w-[72px]">
            PRODUCT
          </a>
        </div>
        <a className="[text-decoration:none] flex-1 relative tracking-[1.02px] leading-[8px] font-semibold text-[inherit] inline-block min-w-[80px]">
          PLATFORM
        </a>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
