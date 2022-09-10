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
   faInbox,
   faCoins,
   faGear,
   faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { Wrapper as PropperWrapper } from '~/components/Propper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Propper/Menu';
import { faCircleQuestion, faKeyboard, faMessage, faPaperPlane, faUser } from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faLanguage} />,
      title: 'English',

      children: {
         title: 'Language',
         data: [
            { type: 'Language', code: 'en', title: 'English' },
            { type: 'Language', code: 'vi', title: 'Tiếng Việt' },
         ],
      },
   },

   { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
   { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and help', to: '/feedback' },
];
function Header() {
   const [searchResults, setSearchResults] = useState([]);
   const currentUser = true;

   useEffect(() => {
      setSearchResults([]);
   }, []);

   const handleMenuChange = (menuItem) => {
      switch (menuItem.type) {
         case 'language':
            break;
         default:
      }
   };

   const userMenu = [
      { icon: <FontAwesomeIcon icon={faUser} />, title: 'View profile', to: '/@hoaaaa' },
      { icon: <FontAwesomeIcon icon={faCoins} />, title: 'Get coins', to: '/coin' },
      { icon: <FontAwesomeIcon icon={faGear} />, title: 'Settings', to: '/settings' },
      ...MENU_ITEMS,
      { icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />, title: 'Log out', to: '/logout', separate: true },
   ];
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div className={cx('logo')}>
               <img src={images.logo} alt={'Tiktok'} />
            </div>
            <HeadlessTippy
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
            </HeadlessTippy>
            <div className={cx('actions')}>
               {currentUser ? (
                  <>
                     <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                     </Button>

                     <Tippy content="Messages" placement="bottom">
                        <button className={cx('actions-btn')}>
                           <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                     </Tippy>
                     <Tippy content="Inbox" placement="bottom">
                        <button className={cx('actions-btn')}>
                           <FontAwesomeIcon icon={faInbox} />
                        </button>
                     </Tippy>
                  </>
               ) : (
                  <>
                     <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                     </Button>
                     <Button primary>Log in</Button>
                  </>
               )}
               <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                  {currentUser ? (
                     <img
                        className={cx('user-avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/98d5986d5852e5feec015ee97358f092~c5_720x720.jpeg?x-expires=1662991200&amp;x-signature=ISOkro0cCGO0kOx6oaI8%2FOB8TOg%3D&quot"
                        alt="Nguyen Van A"
                     />
                  ) : (
                     <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
