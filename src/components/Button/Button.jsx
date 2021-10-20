import PropTypes from 'prop-types';
import clsx from 'clsx';
import './Button.scss';

const Button = ({
  className,
  disabled,
  active,
  onClick,
  children,
  ...attributes
}) => (
  <button
    {...attributes}
    className={clsx('button', className, { active })}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: '',
  disabled: false,
  active: false,
  onClick: () => {},
};

export default Button;
