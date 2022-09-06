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
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/2f3781bf7266f3b20e88934d707e9824~c5_100x100.jpeg?x-expires=1662649200&x-signature=LZqGAxZ9%2B9pIHecnTLOzBRYRvHM%3D"
            alt="Hoa"
         />
         <div className={cx('info')}>
            <h4 className={cx('name')}>
               <span>warnermusicvn</span>
               <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </h4>
            <span className={cx('username')}>Warner Music Vietnam</span>
         </div>
      </div>
   );
}

export default AccountItem;
