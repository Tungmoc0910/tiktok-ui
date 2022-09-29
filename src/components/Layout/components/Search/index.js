import { useState, useEffect, useRef } from 'react';
import { useDebounce } from '~/hooks';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PropperWrapper } from '~/components/Propper';
import AccountItem from '~/components/AccountItem';
import * as searchServices from '~/apiServices/searchServices';
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

   const debounced = useDebounce(searchValue, 500);

   const inputRef = useRef();

   useEffect(() => {
      if (!debounced.trim()) {
         setSearchResults([]);
         return;
      }
      const fetchApi = async () => {
         setLoading(true);
         const result = await searchServices.search(debounced);
         setSearchResults(result);
         setLoading(false);
      };
      fetchApi();
   }, [debounced]);
   const handleHideResults = () => {
      setShowResults(false);
   };
   const handleChange = (e) => {
      const searchValue = e.target.value;
      if (!searchValue.startsWith(' ')) {
         setSearchValue(searchValue);
      }
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
               onChange={handleChange}
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
            <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
               <SearchIcon />
            </button>
         </div>
      </HeadlessTippy>
   );
}

export default Search;
