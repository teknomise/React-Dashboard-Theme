import CoinsImage from "../assets/images/coins.png"
import PropTypes from 'prop-types'

export const BalanceStatistic = ({ total }) => {
    return (
        <>
            <small>Balance statistics</small>
            <h1 className="is-marginless">{total}</h1>
            <div className="is-horizontal-align mt5px h35px">
                <div className="img-coin">
                    <img src={CoinsImage} alt="Coin Image" />
                </div>
                <div className="total-balance">Your total balance</div>
            </div>
            <hr />
        </>
    )
}

BalanceStatistic.propTypes = {
    total: PropTypes.string
}