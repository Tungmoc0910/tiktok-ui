import { useState, useEffect, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PropperWrapper } from '~/components/Propper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Search() {
   const [searchValue, setSearchValue] = useState('');
   const [searchResults, setSearchResults] = useState([]);
   const [showResults, setShowResults] = useState(true);
   const [loading, setLoading] = useState(false);

   const inputRef = useRef();

   useEffect(() => {
      if (!searchValue.trim()) {
         setSearchResults([]);
         return;
      }
      setLoading(true);

      fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
         .then((res) => res.json())
         .then((res) => {
            setSearchResults(res.data);
            setLoading(false);
         })
         .catch((err) => {
            setLoading(false);
         });
   }, [searchValue]);
   const handleHideResults = () => {
      setShowResults(false);
   };

   return (
      <HeadlessTippy
         interactive
         visible={showResults && searchResults.length > 0}
         render={(attrs) => (
            <div className={cx('search-results')} tabIndex="-1" {...attrs}>
               <PropperWrapper>
                  <h3 className={cx('search-title')}>Accounts</h3>
                  {searchResults.map((results) => (
                     <AccountItem key={results.id} data={results} />
                  ))}
               </PropperWrapper>
            </div>
         )}
         onClickOutside={handleHideResults}
      >
         <div className={cx('search')}>
            <input
               ref={inputRef}
               value={searchValue}
               type="text"
               placeholder="Search accounts and videos"
               spellCheck={false}
               onChange={(e) => setSearchValue(e.target.value)}
               onFocus={() => setShowResults(true)}
            />
            {!!searchValue && !loading && (
               <button
                  className={cx('clear')}
                  onClick={() => {
                     setSearchValue('');
                     inputRef.current.focus();
                     setSearchResults([]);
                  }}
               >
                  <FontAwesomeIcon icon={faCircleXmark} />
               </button>
            )}

            {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
            <button className={cx('search-btn')}>
               <SearchIcon />
            </button>
         </div>
      </HeadlessTippy>
   );
}

export default Search;
