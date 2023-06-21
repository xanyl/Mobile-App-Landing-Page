
import PropTypes from "prop-types";

// const Mobile({height, width}) {
//   return (

//     // <div className='mobile-main' style={{
//     //     height: `${height}px`,
//     //     width: `${width}px`
//     // }}>
//     //     <div className="mobile1"></div>
//     //     <div className="mobile2"></div>
//     //     <div className="mobile3"></div>
//     //     Iphone 14 Pro Max
//     // </div>
//   )
// }
// Mobile.propTypes = {
//   height: PropTypes.number.isRequired,
//   width: PropTypes.number.isRequired,
// };

// export default Mobile

const Mobile = ({ className, height, width, background, borderRadius }) => {
  return (
    <div
      className={className}
      style={{
        height: `${height}px`,
        width: `${width}px`,
        background,
        borderRadius: `${borderRadius}px`,
      }}
    >
      
    </div>
  );
};

Mobile.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  background: PropTypes.string,
  borderRadius: PropTypes.number,
};

export default Mobile;
