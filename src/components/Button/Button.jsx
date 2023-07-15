import PropTypes from 'prop-types';

import Styles from './button.module.css';

const Button = ({ variant = 'primary', className, ...props }) => {
  return (
    <button
      className={`${Styles.button} ${Styles[variant]} ${className}`}
      {...props}
    />
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
};

export default Button;
