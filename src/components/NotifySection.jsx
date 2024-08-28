import TextField from "./TextField";
import NotifyButton from "./NotifyButton";
import PropTypes from "prop-types";

const NotifySection = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-3.5 max-w-full text-left text-xl text-dimgray font-poppins ${className}`}
    >
      <TextField />
      <NotifyButton />
    </div>
  );
};

NotifySection.propTypes = {
  className: PropTypes.string,
};

export default NotifySection;
