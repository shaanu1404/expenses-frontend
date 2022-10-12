import { faTableColumns, faUser, faVault, faWallet, faGear } from '@fortawesome/free-solid-svg-icons'
import Header from "./Header"
import Divider from '../ui-components/Divider'
import MenuLink from './MenuLink'

const links = [
    { to: '/dashboard', title: 'Dashboard', icon: faTableColumns },
    { to: '/profile', title: 'Profile', icon: faUser },
    { to: '/accounts', title: 'Accounts', icon: faVault },
    { to: '/expenses', title: 'Expenses', icon: faWallet },
    { to: '/settings', title: 'Settings', icon: faGear },
]

const Sidebar = () => {
    return (
        <aside className="w-64 min-h-screen bg-gray-800 fixed left-0 inset-y-0">
            <Header />
            <Divider />
            <ul className="px-4 space-y-2">
                {links.map(link => <MenuLink key={link.to} {...link} />)}
            </ul>
        </aside>
    )
}

export default Sidebar