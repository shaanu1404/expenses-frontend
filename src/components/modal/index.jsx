import { motion } from 'framer-motion'
import Backdrop from "./Backdrop"
import ModalHeader from "./ModalHeader";
import ModalFooter from './ModalFooter'

const Modal = ({ size, onClose, title, body, footer, closeWithBackdrop = true }) => {

    const modalWidth = size === "sm" ? "w-4/12" : size === "md" ? "w-6/12" : "w-8/12"

    return (
        <Backdrop onClick={() => {
            if (closeWithBackdrop) {
                onClose()
            }
        }}>
            <motion.div
                initial={{ opacity: 0, y: -100, translateX: '-50%' }}
                animate={{ opacity: 1, y: 0, translateX: '-50%' }}
                exit={{ opacity: 0, y: -100, translateX: '-50%' }}
                transition={{ duration: 0.3 }}
                className={`${modalWidth} min-h-[100px] bg-white text-black absolute top-32 left-1/2 -translate-x-1/2 rounded-2xl p-6 shadow-lg shadow-black/60`}>
                <ModalHeader onClose={onClose} title={title} />
                <div className="py-3">
                    {body}
                </div>
                {footer && <ModalFooter>{footer}</ModalFooter>}
            </motion.div>
        </Backdrop>
    )
}

export default Modal