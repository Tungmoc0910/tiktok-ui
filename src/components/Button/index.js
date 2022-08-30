import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button({
   to,
   href,
   primary = false,
   outline = false,
   text = false,
   rounded = false,
   icon,
   disabled = false,
   small = false,
   large = false,
   className,
   children,
   onClick,
   ...passProps
}) {
   let Comp = 'button';
   const props = { onClick, ...passProps };
   //Remove event listeners when button is disabled
   if (disabled) {
      Object.keys(props).forEach((key) => {
         if (key.startsWith('on') && typeof props[key] === 'function') {
            delete props[key];
         }
      });
   }

   if (to) {
      props.to = to;
      Comp = Link;
   } else if (href) {
      props.href = href;
      Comp = 'a';
   }

   const classes = cx('wrapper', {
      [className]: className,
      primary,
      outline,
      text,
      rounded,
      icon,
      disabled,
      small,
      large,
   });
   return (
      <Comp className={classes} {...props}>
         {icon && <span className={cx('icon-plus')}>{icon}</span>}
         <span>{children}</span>
      </Comp>
   );
}

export default Button;
