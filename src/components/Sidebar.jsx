import { Logo } from "../elements/Logo"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { NavIcon } from "../elements/NavIcon";
import UserImage1 from '../assets/images/user-1.png'
import { Navlinks } from "./Navlinks";

export const Sidebar = () => {
  const [navLinks, setNavLinks] = useState([])

  useEffect(() => {
    setNavLinks([
      {
        icon: 'home',
        link: '#'
      },
      {
        icon: 'bell',
        link: '#'
      },
      {
        icon: 'clock',
        link: '#'
      },
      {
        icon: 'users',
        link: '#'
      },
      {
        icon: 'wallet',
        link: '#'
      },
      {
        icon: 'setting',
        link: '#'
      }
    ])
  }, []);

  return (
    <aside className="bg-white p-1 sidebar is-justify-between-vertical">
      <div className="is-center-vertical">
        <Logo />
        <div className="comments-icon">
          <Link to="/">
            <NavIcon type={`comments`} />
          </Link>
        </div>
      </div>
      <div className="is-center-vertical">
        <Navlinks links={navLinks} />
      </div>
      <div className="is-center-vertical mb-1">
        <div className="nav-rounded z-2">
          <Link to={`#`}>
            <img src={UserImage1} alt="User Image" />
          </Link>
        </div>
        <div className="nav-rounded nav-rounded-bottom z-1">
          <Link to={`#`}>
            <NavIcon type={`logout`} />
          </Link>
        </div>
      </div>
    </aside>
  )
}