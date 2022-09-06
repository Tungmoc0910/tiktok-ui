import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCircleXmark,
   faSpinner,
   faMagnifyingGlass,
   faPlus,
   faEllipsisVertical,
   faLanguage,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PropperWrapper } from '~/components/Propper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Propper/Menu';
import { faCircleQuestion, faKeyboard } from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
   { icon: <FontAwesomeIcon icon={faLanguage} />, title: 'English' },

   { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
   { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and help', to: '/feedback' },
];
function Header() {
   const [searchResults, setSearchResults] = useState([]);
   useEffect(() => {
      setSearchResults([]);
   }, []);
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div className={cx('logo')}>
               <img src={images.logo} alt={'Tiktok'} />
            </div>
            <Tippy
               interactive
               visible={searchResults.length > 0}
               render={(attrs) => (
                  <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                     <PropperWrapper>
                        <h3 className={cx('search-title')}>Accounts</h3>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />

                        <AccountItem />
                     </PropperWrapper>
                  </div>
               )}
            >
               <div className={cx('search')}>
                  <input type="text" placeholder="Search accounts and videos" spellCheck={false} />
                  <button className={cx('clear')}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                  <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                  <button className={cx('search-btn')}>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
               </div>
            </Tippy>
            <div className={cx('actions')}>
               <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                  Upload
               </Button>
               <Button primary>Log in</Button>
               <Menu items={MENU_ITEMS}>
                  <button className={cx('more-btn')}>
                     <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
