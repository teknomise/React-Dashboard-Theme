import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types'

const CustomSelect = ({ options }) => {
  const selectWrapperRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectClick = (e) => {
    e.stopPropagation();
    closeAllSelect(e.target);
    e.target.nextSibling.classList.toggle('select-hide');
    e.target.classList.toggle('select-arrow-active');
  };

  const handleOptionClick = (e) => {
    const currentOption = e.target;
    const select = currentOption.parentNode.parentNode.getElementsByTagName('select')[0];
    const selectItems = currentOption.parentNode;
    const selectedValueContainer = currentOption.parentNode.previousSibling;
  
    for (let i = 0; i < select.length; i++) {
      if (select.options[i].innerHTML === currentOption.innerHTML) {
        select.selectedIndex = i;
        setSelectedOption(currentOption.innerHTML); 
        selectedValueContainer.innerHTML = currentOption.innerHTML;
        const sameAsSelected = selectItems.getElementsByClassName('same-as-selected');
        const yl = sameAsSelected.length;
  
        for (let k = 0; k < yl; k++) {
          sameAsSelected[k].removeAttribute('class');
        }
  
        currentOption.setAttribute('class', 'same-as-selected');
        break;
      }
    }
  
    selectedValueContainer.click();
  };
  
  const closeAllSelect = (currentSelect) => {
    const selectItems = document.getElementsByClassName('select-items');
    const selectSelected = document.getElementsByClassName('select-selected');
    const xl = selectItems.length;
    const yl = selectSelected.length;
    const arrNo = [];

    for (let i = 0; i < yl; i++) {
      if (currentSelect === selectSelected[i]) {
        arrNo.push(i);
      } else {
        selectSelected[i].classList.remove('select-arrow-active');
      }
    }

    for (let i = 0; i < xl; i++) {
      if (!arrNo.includes(i)) {
        selectItems[i].classList.add('select-hide');
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectWrapperRef.current && !selectWrapperRef.current.contains(event.target)) {
        closeAllSelect();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [selectWrapperRef]);

  return (
    <div className="custom-select" ref={selectWrapperRef}>
      <select>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
      <div className="select-selected" onClick={handleSelectClick}>
      {selectedOption || 'Filter'}
      </div>
      <div className="select-items select-hide">
        {options.map((option, index) => (
          <div key={index} onClick={handleOptionClick}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;

CustomSelect.propTypes = {
    options: PropTypes.array
}