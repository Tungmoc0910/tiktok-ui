import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';

const Image = forwardRef(({ src, alt, className, backup: backupCustom = images.noImage, ...props }, ref) => {
   const [backup, setBackup] = useState('');
   const handleError = () => {
      setBackup(backupCustom);
   };
   return (
      <img
         className={classNames(styles.wrapper, className)}
         ref={ref}
         src={backup || src}
         alt={alt}
         {...props}
         onError={handleError}
      />
   );
});

export default Image;
