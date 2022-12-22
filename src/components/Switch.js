import "./Switch.css";
import cx from "classnames"

const Switch = ({ rounded = false, isToggled, onToggle, name}) => {
  const sliderCX = cx('slider', {
    'rounded': rounded
  })

  return (
    <div className='flex'>
      <p className='switch_name'>{name}</p>
    <label className='switch' >
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className={sliderCX} />
    </label>
    </div>
  );
};

export default Switch;
