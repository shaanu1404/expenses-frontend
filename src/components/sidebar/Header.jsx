import { Link } from "react-router-dom"
import FigmaLogo from '../../assets/images/figma.png'

const Header = () => (
    <Link to="/">
        <div className="flex items-center px-4 pt-4">
            <img src={FigmaLogo} alt="Logo" className="w-8" />
            <span className="text-lg ml-3 font-bold tracking-wide">ExpensiveApp</span>
        </div>
    </Link>
)

export default Header