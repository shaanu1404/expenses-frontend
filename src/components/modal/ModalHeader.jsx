import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const ModalHeader = ({ onClose, title }) => (
    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
        <h1 className="text-black text-lg font-medium">{title}</h1>
        <button className="w-8 h-8 rounded-full text-gray-700 bg-transparent text-center leading-8 hover:bg-gray-500/20 transition-colors"
            onClick={onClose}
        >
            <FontAwesomeIcon icon={faTimes} />
        </button>
    </div>
)

export default ModalHeader