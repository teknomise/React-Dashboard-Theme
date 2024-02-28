import { Link } from "react-router-dom"
import { NavIcon } from "../elements/NavIcon"
import PropTypes from 'prop-types'

export const Navlinks = ({links}) => {
    return(
        <nav className="is-horizontal-align">
        <div className="navlink-list">
          {links.map((val, key) => (
            <div className={`nav-item ${key === 0 ? 'nav-item-active' : ''}`} key={key}>
              <Link to={val.link}  >
                <NavIcon type={val.icon} />
              </Link>
            </div>
          ))}
        </div>
      </nav>
    )
}

Navlinks.propTypes = {
    links: PropTypes.array
}