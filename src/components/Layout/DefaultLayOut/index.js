import Header from '~/components/Layout/components/Header';
import classNames from 'classnames/bind';
import styles from './DefaultLayOut.module.scss';
import SideBar from './SideBar';

const cx = classNames.bind(styles);

function DefaultLayOut({ children }) {
   return (
      <div className={cx('wrapper')}>
         <Header />
         <div className={cx('container')}>
            <SideBar />
            <div className={cx('content')}>{children}</div>
         </div>
      </div>
   );
}

export default DefaultLayOut;
