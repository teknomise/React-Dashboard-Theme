import PropTypes from 'prop-types'
import { NavIcon } from "../elements/NavIcon"

export const TrxList = ({ data }) => {
    return (
        <div className="trx-item is-justify-between-horizontal">
            <div className="trx-user">
                <img src={data.image} alt="image" />
                <div className="user">
                    <p>{data.name}</p>
                    <p className="date">{data.date}</p>
                </div>
            </div>
            <div className="trx-value">
                <p>{data.value}</p>
                <NavIcon type={`dotmenu`} />
            </div>
        </div>
    )
}

TrxList.propTypes = {
    data: PropTypes.object
}