import PropTypes from 'prop-types'
import { NavIcon } from './NavIcon'
export const CheckboxCustom = ({ data }) => {
    return (
        <div className="checkbox-custom">
            <div className="field-check">
                <input type="checkbox" name={data.val} id={data.val} value={data.val} />
                <label htmlFor={data.val}>{data.label}</label>
            </div>
            <NavIcon type={`dotmenu`} />
        </div>
    )
}

CheckboxCustom.propTypes = {
    data: PropTypes.object
}