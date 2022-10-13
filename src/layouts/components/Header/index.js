import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import routesConfig from '~/config/routes';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import images from '~/assets/images';

import Button from '~/components/Button';
import Menu from '~/components/Propper/Menu';
import Image from '~/components/Image';
import Search from '../Search';
import {
   MessagesIcon,
   InboxIcon,
   ViewProfileIcon,
   CoinIcon,
   SettingsIcon,
   LogOutIcon,
   LanguageIcon,
   KeyboardShortcutIcon,
   FeedbackandHelpIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
   {
      icon: <LanguageIcon />,
      title: 'English',

      children: {
         title: 'Language',
         data: [
            { type: 'Language', code: 'en', title: 'English' },
            { type: 'Language', code: 'vi', title: 'Tiếng Việt' },
         ],
      },
   },

   { icon: <KeyboardShortcutIcon />, title: 'Keyboard shortcuts' },
   { icon: <FeedbackandHelpIcon />, title: 'Feedback and help', to: '/feedback' },
];
function Header() {
   const currentUser = true;

   const handleMenuChange = (menuItem) => {
      switch (menuItem.type) {
         case 'language':
            break;
         default:
      }
   };

   const userMenu = [
      { icon: <ViewProfileIcon width="2rem" height="2rem" />, title: 'View profile', to: '/@hoaaaa' },
      { icon: <CoinIcon />, title: 'Get coins', to: '/coin' },
      { icon: <SettingsIcon />, title: 'Settings', to: '/settings' },
      ...MENU_ITEMS,
      { icon: <LogOutIcon />, title: 'Log out', to: '/logout', separate: true },
   ];
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div className={cx('logo')}>
               <Link to={routesConfig.home} className={cx('logo-link')}>
                  <img src={images.logo} alt={'Tiktok'} />
               </Link>
            </div>
            <Search />
            <div className={cx('actions')}>
               {currentUser ? (
                  <>
                     <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                     </Button>

                     <Tippy content="Messages" placement="bottom">
                        <button className={cx('actions-btn')}>
                           <MessagesIcon />
                        </button>
                     </Tippy>
                     <Tippy content="Inbox" placement="bottom">
                        <button className={cx('actions-btn')}>
                           <InboxIcon />
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
                     <Image
                        className={cx('user-avatar')}
                        src="./src/assets/images/avatar-user.jpg"
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
