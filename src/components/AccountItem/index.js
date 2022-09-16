import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
const cx = classNames.bind(styles);

function AccountItem({ data }) {
   return (
      <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
         <Image
            className={cx('avatar')}
            src={data.avatar}
            alt="warnermusicvn"
            // backup="https://www.rvpartscanada.com/storage/app/public/general_settings/no-image224-13PK.png"
         />
         <div className={cx('info')}>
            <h4 className={cx('name')}>
               <span>{data.nickname}</span>
               {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
            </h4>
            <span className={cx('username')}>{data.full_name}</span>
         </div>
      </Link>
   );
}

export default AccountItem;
