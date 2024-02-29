import { CheckboxCustom } from "../elements/CheckboxCustom"
import PropTypes from 'prop-types'

export const ShoppingList = ({ itemCheckbox }) => {
    return (
        <>
            <p>List of items to buy</p>
            <div className="date-flex wd-60">
                <div className="left-date">
                    <h4 className="mb-0">02:00</h4>
                    <div className="micro-date">
                        Sat, August 12
                    </div>
                </div>
                <div className="relative top10px">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.27295 18.4915L15.2729 12.4915L9.27295 6.49152" stroke="#b1b6c5" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="right-date">
                    <h4 className="mb-0">05:00</h4>
                    <div className="micro-date">
                        Sat, September 12
                    </div>
                </div>
            </div>

            <div className="is-justify-between-horizontal font-12 pt-1">
                <div>
                    <span className="span-grey-text">0/3</span>
                    Shopping list
                </div>
                <div className="add-item mr10px">
                    + Add an item
                </div>
            </div>
            <div className="checkbox-custom-items pt-1">
                {itemCheckbox.map((data, key) => (
                    <CheckboxCustom data={data} key={key} />
                ))}
            </div>
        </>
    )
}

ShoppingList.propTypes = {
    itemCheckbox: PropTypes.array
}