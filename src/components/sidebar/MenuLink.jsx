import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MenuLink = ({ to, title, icon }) => {
    return (
        <li>
            <NavLink
                className={({ isActive }) => `block w-full ${isActive ? 'text-blue-400' : 'text-gray-400'} py-0.5 test-sm space-x-4`}
                to={to}>
                <FontAwesomeIcon className="w-6 text-sm" icon={icon} /> <span className="text-sm">{title}</span>
            </NavLink>
        </li>
    )
}

export default MenuLink