import PropTypes from 'prop-types'
import MicroChartImage from '../assets/images/line-chart.png'

export const MicroStats = ({ percent }) => {
    return (
        <>
            <div className="is-horizontal-align gap10px">
                <div className="micro-chart">
                    <img src={MicroChartImage} alt="chart" />
                </div>
                <div className="micro-stats">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0858 22.9571C17.6087 22.9571 22.0858 18.4799 22.0858 12.9571C22.0858 7.43424 17.6087 2.95709 12.0858 2.95709C6.56297 2.95709 2.08582 7.43424 2.08582 12.9571C2.08582 18.4799 6.56297 22.9571 12.0858 22.9571Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.0858 12.9571L12.0858 8.95709L8.08582 12.9571" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.0858 16.9571V8.95709" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="stats">
                        {percent}%
                    </div>
                </div>
            </div>
            <div className="micro-font">Always see your earning updates</div>
        </>
    )
}

MicroStats.propTypes = {
    percent: PropTypes.number
}