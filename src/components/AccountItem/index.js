import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountItem() {
   return (
      <div className={cx('wrapper')}>
         <img
            className={cx('avatar')}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/30e47c5c5f9ab19124bebb7500ad4e97~c5_300x300.webp?x-expires=1662037200&x-signature=b60%2FUYZUndlVccja0JFK6kOXOEE%3D"
            alt="Hoa"
         />
         <div className={cx('info')}>
            <h4 className={cx('name')}>
               <span>Nguyen Van A</span>
               <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </h4>
            <span className={cx('username')}>@nguyenvana</span>
         </div>
      </div>
   );
}

export default AccountItem;
