import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import { Wrapper as PropperWrapper } from '~/components/Propper';
import MenuItem from './MenuItem';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
   const renderItems = () => {
      return items.map((item, index) => <MenuItem key={index} data={item} />);
   };

   return (
      <Tippy
         interactive
         placement="bottom-end"
         delay={[0, 800]}
         render={(attrs) => (
            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
               <PropperWrapper className={cx('menu-proper')}>{renderItems()}</PropperWrapper>
            </div>
         )}
      >
         {children}
      </Tippy>
   );
}

export default Menu;
