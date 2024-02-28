import { useState, useEffect, useRef } from 'react';
import { NavIcon } from './NavIcon';

const SearchBar = () => {

    const [expanded, setExpanded] = useState(false);
    const wrapperRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setExpanded(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [wrapperRef]);

    const handleIconClick = () => {
        setExpanded((prev) => !prev);
    };

    useEffect(() => {
        if (expanded && inputRef.current) {
            inputRef.current.focus();
        }
    }, [expanded]);

    return (
        <div ref={wrapperRef} className={`search-wrapper ${expanded ? 'expanded' : ''}`}>
            {expanded && (
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                    autoFocus
                />
            )}
            <div className="search-icon" onClick={handleIconClick}>
                <NavIcon type={'search'} />
            </div>
        </div>
    );
};

export default SearchBar;
